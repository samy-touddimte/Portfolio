import { useState } from "react";
import emailjs from "emailjs-com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "validation_error">("idle");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "validation_error") {
      setStatus("idle");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
      setStatus("validation_error");
      return;
    }

    setStatus("loading");

    const serviceId = "service_qnny4hm";
    const templateId = "template_2otnn9q";
    const publicKey = "bFFuh7ZQn7sj1Zq9u";

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      subject: formData.subject,
      message: formData.message,
      to_email: "samtouddimte@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm border-0"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg p-8 bg-[#FFFCF8] rounded-xl border-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
          aria-label="Fermer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <h2 className="font-serif text-2xl mb-4">Message envoyé !</h2>
            <p className="text-zinc-600 mb-8">Merci de m&apos;avoir contacté, je vous répondrai dans les plus brefs délais.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-zinc-100 text-zinc-700 font-mono text-sm rounded hover:bg-zinc-200 transition-colors uppercase tracking-wider"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-2xl mb-6 text-zinc-900">Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-zinc-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-zinc-100 border-0 rounded text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-zinc-100 border-0 rounded text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1">
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-zinc-100 border-0 rounded text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-zinc-100 border-0 rounded text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-300 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-4 py-2 bg-zinc-100 text-zinc-700 font-mono text-sm rounded hover:bg-zinc-200 transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed border-0"
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                </button>
                {status === "validation_error" && (
                  <div className="px-2 py-1 bg-zinc-100 text-zinc-700 font-mono text-xs rounded text-center">
                    Veuillez remplir tous les champs.
                  </div>
                )}
                {status === "error" && (
                  <div className="px-2 py-1 bg-zinc-100 text-zinc-700 font-mono text-xs rounded text-center">
                    Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer plus tard.
                  </div>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

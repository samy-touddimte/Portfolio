"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
  Phone,
  Eye,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
  onOpenContactModal?: () => void;
}

export function ProfileSection({ aboutMe, onOpenContactModal }: ProfileSectionProps) {
  const [emailVisible, setEmailVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  if (!aboutMe) {
    return null;
  }

  const renderProtectedEmail = (email: string) => {
    const parts = email.split('@');
    if (parts.length !== 2) return email;
    return (
      <span aria-label="Email address">
        <span>{parts[0]}</span>
        <span style={{ display: 'none' }} aria-hidden="true">REMOVETHIS</span>
        <span>@{parts[1]}</span>
      </span>
    );
  };

  const renderProtectedPhone = (phone: string) => {
    const mid = Math.floor(phone.length / 2);
    return (
      <span aria-label="Numéro de téléphone">
        <span>{phone.slice(0, mid)}</span>
        <span style={{ display: 'none' }} aria-hidden="true">REMOVETHIS</span>
        <span>{phone.slice(mid)}</span>
      </span>
    );
  };

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex gap-6 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-2">
          {emailVisible ? (
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer text-left"
            >
              <Mail size={14} />
              {renderProtectedEmail(aboutMe.email)}
            </button>
          ) : (
            <button
              onClick={() => setEmailVisible(true)}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer text-left"
            >
              <Eye size={14} /> Afficher l&apos;email
            </button>
          )}
          {aboutMe.phone && (
            <>
              <br />
              {phoneVisible ? (
                <a
                  href={`tel:${aboutMe.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <Phone size={14} />
                  {renderProtectedPhone(aboutMe.phone)}
                </a>
              ) : (
                <button
                  onClick={() => setPhoneVisible(true)}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer text-left"
                >
                  <Eye size={14} /> Afficher le numéro
                </button>
              )}
            </>
          )}
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} />
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} />@{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
        {aboutMe.funDescription && (
          <p className="text-sm text-zinc-600 mt-8">
            {aboutMe.funDescription}
          </p>
        )}
      </div>
    </div>
  );
}

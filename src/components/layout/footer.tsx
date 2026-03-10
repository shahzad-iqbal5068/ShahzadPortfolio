"use client";

import { Copyright, Mail, MapPin, Phone } from "lucide-react";

import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import SocialIcons from "@/components/data-display/social-icons";
import { EXTERNAL_LINKS, CONTACT_INFO } from "@/lib/data";

const Logo = () => (
  <Typography variant="h3" className="font-bold">
    {"<Ch Shahzad/>"}
  </Typography>
);

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo & Name */}
          <div className="flex flex-col gap-4">
            <Link href="/" noCustomization>
              <Logo />
            </Link>
            <Typography variant="body3" className="text-gray-600 dark:text-gray-400">
              Full Stack Developer building exceptional digital experiences with React, Node.js, and modern web technologies.
            </Typography>
          </div>

          {/* Contact */}
          <div>
            <Typography variant="subtitle" className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
              Contact
            </Typography>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {CONTACT_INFO.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <Typography variant="subtitle" className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
              Connect
            </Typography>
            <SocialIcons />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-700 md:flex-row">
          <Typography variant="body3" className="flex items-center text-gray-600 dark:text-gray-400">
            <Copyright className="mr-1 inline-block h-4 w-4" />
            {new Date().getFullYear()} Choudhury Shahzad. All rights reserved.
          </Typography>
          <Typography variant="body3" className="text-gray-600 dark:text-gray-400">
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB_REPO}
              className="hover:text-emerald-600"
            >
              Coded with ❤️
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

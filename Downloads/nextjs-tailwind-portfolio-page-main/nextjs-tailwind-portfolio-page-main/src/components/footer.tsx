"use client";

import { LinkedinIcon, GithubIcon, Mail, InstagramIcon } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    href: `https://www.linkedin.com/in/anish-jakka-singaraiah/`,
  },
  { title: "GitHub", icon: GithubIcon, href: `https://github.com/Anish-JS` },
  {
    title: "Instagram",
    icon: InstagramIcon,
    href: `https://www.instagram.com/js_anish/`,
  },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-between gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Link
            className="md:gap-4 flex justify-center items-center gap-8 bg-gray-900 rounded-md p-2"
            href="mailto:anishjakka@gmail.com"
          >
            <Mail className="text-gray-50" />
            <p className="text-gray-50 hidden md:block">anishjakka@gmail.com</p>
          </Link>
          <ul className="flex gap-8 items-center">
            {SOCIALS.map(({ title, icon: Icon, href }) => (
              <li key={title}>
                <div className="font-normal text-gray-50 bg-gray-900 hover:shadow-md p-1 transition-colors rounded-md">
                  <Link href={href}>
                    <Icon />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

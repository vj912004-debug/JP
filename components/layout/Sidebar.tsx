"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Cog,
  Images,
  Mail,
  Download,
  MessageCircle,
} from "lucide-react";
import { headerNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const icons = {
  "/": Home,
  "/about": User,
  "/services": Briefcase,
  "/machinery": Cog,
  "/gallery": Images,
  "/quality": Images,
  "/grades": Cog,
  "/contact": Mail,
} as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();
  const message = encodeURIComponent(
    "Hello Jagdamba Procut, I'd like to share a steel plate / cutting requirement."
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-width)] flex-col overflow-y-auto border-r border-white/5 bg-[#120e1c] px-5 py-6 lg:flex">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 sidebar-waves opacity-80" />
      <Link href="/" className="relative shrink-0">
        <Logo inverted />
      </Link>

      <nav className="relative mt-8 flex flex-1 flex-col gap-1" aria-label="Sidebar">
        {headerNav.map((item) => {
          const Icon = icons[item.href as keyof typeof icons] ?? Briefcase;
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition-all duration-300",
                active
                  ? "bg-gradient-to-r from-pink-500/90 to-violet-500 text-white shadow-orange-glow"
                  : "text-steel hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon size={18} strokeWidth={1.9} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="relative mt-6 rounded-3xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600 p-5 text-white shadow-orange-glow">
        <p className="text-sm font-bold">Ready for your next order</p>
        <p className="mt-1.5 text-xs leading-relaxed text-white/85">
          Share grade, thickness and a drawing — we confirm stock and cutting from Vadodara.
        </p>
        <Button href="/quote" size="sm" className="mt-4 w-full !bg-[#f8f5ff] !text-violet-800 hover:!bg-white">
          Get a Quote
        </Button>
      </div>

      <div className="relative mt-5 space-y-3 pb-2">
        <Link
          href="/downloads"
          className="flex items-center gap-2 text-xs font-semibold text-steel hover:text-white"
        >
          <Download size={14} />
          Vendor documents
        </Link>
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-steel">Reach us</p>
        <div className="flex gap-2">
          <a
            href={`https://wa.me/${company.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white hover:bg-pink-500"
            aria-label="WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href={`mailto:${company.email}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white hover:bg-violet-500"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
}

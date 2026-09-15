"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string, children?: { href: string }[]) {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  return Boolean(children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`)));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || drawerOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-engineered",
        solid
          ? "bg-white/92 shadow-subtle backdrop-blur-md"
          : "bg-gradient-to-b from-dark-950/70 via-dark-950/20 to-transparent"
      )}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between lg:h-[84px]">
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              className={cn(
                "relative grid h-10 w-10 place-items-center overflow-hidden rounded-xs border font-display text-lg font-extrabold transition-all duration-300",
                solid
                  ? "border-blue-900/20 bg-blue-900 text-white group-hover:shadow-blue-glow"
                  : "border-white/30 bg-white/10 text-white backdrop-blur-sm group-hover:border-orange-400/70"
              )}
            >
              JP
              <span className="pointer-events-none absolute inset-0 shine-hover" />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span
                className={cn(
                  "font-display text-[15px] font-bold tracking-tight transition-colors",
                  solid ? "text-blue-950" : "text-white"
                )}
              >
                JAGDAMBA PROCUT
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[10.5px] font-medium uppercase tracking-[0.12em] transition-colors",
                  solid ? "text-ink-muted" : "text-white/60"
                )}
              >
                Steel &middot; Profile &amp; Laser Cutting
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => {
              const active = isActivePath(pathname, item.href, item.children);
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => item.children && setOpenMenu(null)}
                  onFocus={() => item.children && setOpenMenu(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    data-active={active}
                    aria-expanded={item.children ? openMenu === item.label : undefined}
                    aria-haspopup={item.children ? "menu" : undefined}
                    className={cn(
                      "nav-underline flex items-center gap-1 rounded-xs px-3.5 py-2 text-[14.5px] font-semibold transition-colors",
                      solid
                        ? active
                          ? "text-blue-900"
                          : "text-ink-secondary hover:text-blue-900"
                        : active
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={cn(
                          "transition-transform duration-200",
                          openMenu === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full z-[70] w-72 overflow-hidden rounded-card border border-hairline-light bg-white p-2 shadow-card-hover"
                      >
                        {item.children.map((child, i) => (
                          <motion.div
                            key={child.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.035, duration: 0.22 }}
                          >
                            <Link
                              href={child.href}
                              className="flex flex-col gap-0.5 rounded-xs px-3.5 py-2.5 transition-colors hover:bg-blue-50"
                            >
                              <span className="text-[14px] font-semibold text-ink-primary">
                                {child.label}
                              </span>
                              {child.blurb && (
                                <span className="text-xs text-ink-muted">{child.blurb}</span>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href="/stock-enquiry" variant={solid ? "outline" : "outline-light"} size="sm">
              Stock Enquiry
            </Button>
            <Button href="/quote" variant="primary" size="sm" className="shine-hover">
              Request a Quote
            </Button>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen(true)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xs border transition-colors lg:hidden",
              solid ? "border-hairline-medium text-blue-950" : "border-white/30 text-white"
            )}
          >
            <Menu size={20} />
          </button>
        </div>
      </Container>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

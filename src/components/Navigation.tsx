'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const baseLink = "relative flex-grow whitespace-nowrap text-center font-mono text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest py-3 px-1 sm:px-2 text-neutral-600 dark:text-neutral-400 transition-colors duration-200 hover:text-primary-800 dark:hover:text-primary-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-primary-800 dark:after:bg-primary-300 after:transition-[width] after:duration-300 motion-reduce:after:transition-none hover:after:w-full";
const activeLink = "text-primary-800 dark:text-primary-300 after:w-full";

const NavigationBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const cls = (href: string) => `${baseLink} ${isActive(href) ? activeLink : ""}`;

  return (
    <nav className="sticky top-0 z-20 flex flex-row flex-nowrap justify-around items-stretch overflow-x-auto bg-white/80 dark:bg-neutral-900/80 backdrop-blur-[4px] border-b border-neutral-200 dark:border-neutral-800">
      <Link href="/" className={cls("/")}>About Me</Link>
      <Link href="/publications" className={cls("/publications")}>Publications</Link>
      <Link href="/posts" className={cls("/posts")}>Posts</Link>
      <Link href="/notes" className={cls("/notes")}>Notes</Link>
    </nav>
  );
};

export default NavigationBar

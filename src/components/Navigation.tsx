'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const baseLink = "flex-grow text-center text-xl p-2 cursor-pointer border-b-4 hover:border-primary-800 hover:text-primary-800 animated-underline";
const activeLink = "border-primary-800 text-primary-800 active";

const NavigationBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const cls = (href: string) => `${baseLink} ${isActive(href) ? activeLink : ""}`;

  return (
    <nav className="sticky top-0 z-20 flex flex-row flex-nowrap justify-around items-stretch bg-white/80 backdrop-blur-[4px]">
      <Link href="/" className={cls("/")}>About Me</Link>
      <Link href="/publications" className={cls("/publications")}>Publications</Link>
      <Link href="/posts" className={cls("/posts")}>Posts</Link>
      <Link href="/notes" className={cls("/notes")}>Notes</Link>
    </nav>
  );
};

export default NavigationBar

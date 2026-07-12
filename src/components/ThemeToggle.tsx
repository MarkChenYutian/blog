'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect } from 'react';

/**
 * Light/dark switch shown in the cardinal header band. The current theme is
 * read from the `dark` class on <html> (set before paint by the inline script
 * in the root layout), so the icon is swapped purely with CSS to avoid any
 * hydration mismatch.
 *
 * Theme resolution: with no saved choice the site follows the system theme,
 * including live OS theme changes. Toggling saves an explicit override —
 * unless the choice matches the system theme, in which case the override is
 * cleared and the site returns to auto.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystem = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch {
        /* fall through and follow the system */
      }
      document.documentElement.classList.toggle('dark', e.matches);
    };
    mq.addEventListener('change', followSystem);
    return () => mq.removeEventListener('change', followSystem);
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    try {
      if (isDark === systemDark) {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    } catch {
      /* private mode etc. — theme just won't persist */
    }
  };

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label='Toggle dark mode'
      title='Toggle dark mode'
      className={`flex h-9 w-9 items-center justify-center border border-white/40 bg-white/10 text-neutral-100 backdrop-blur-[2px] transition-colors hover:bg-white/25 hover:border-white/60 ${className}`}
    >
      <SunIcon size={17} strokeWidth={1.5} className='hidden dark:block' />
      <MoonIcon size={17} strokeWidth={1.5} className='dark:hidden' />
    </button>
  );
}

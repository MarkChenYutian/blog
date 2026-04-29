"use client"
import { useEffect, useState } from 'react';

export interface TOCEntry {
  title: string;
  level: number;
  id: string;
}

const ACTIVATION_OFFSET = 120; // px from the top of the viewport

const useActiveHeading = (headings: TOCEntry[]) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) {
      setActiveId('');
      return;
    }

    let raf = 0;
    let pending = false;

    const compute = () => {
      pending = false;
      let current = '';
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - ACTIVATION_OFFSET <= 0) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [headings]);

  return activeId;
};

export default useActiveHeading;

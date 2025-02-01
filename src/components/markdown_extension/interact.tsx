"use client"
import { useEffect, useState } from 'react';

export interface TOCEntry {
  title: string;
  level: number;
  id: string;
}

const useActiveHeading = (headings: TOCEntry[]) => {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      setActiveIds((prevActiveIds) => {
        const updatedIds = new Set(prevActiveIds);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updatedIds.add(entry.target.id); // Add intersecting IDs
          } else {
            updatedIds.delete(entry.target.id); // Remove non-intersecting IDs
          }
        });
        return Array.from(updatedIds);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the heading is visible
    });

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  return activeIds;
};

export default useActiveHeading;

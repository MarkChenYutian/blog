'use client';

import { StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

type StarsData = { updatedAt: string | null; repos: Record<string, number> };

let cached: StarsData | null = null;
let pending: Promise<StarsData | null> | null = null;

const loadStars = (): Promise<StarsData | null> => {
  if (cached) return Promise.resolve(cached);
  if (!pending) {
    pending = fetch('/stars.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((d: StarsData | null) => {
        cached = d;
        return d;
      })
      .catch(() => null);
  }
  return pending;
};

const parseGithubUrl = (url: string): { owner: string; repo: string } | null => {
  const m = url.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?(?:[?#]|$)/);
  if (!m) return null;
  return { owner: m[1], repo: m[2] };
};

const formatStars = (n: number): string => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k';
  return String(n);
};

export default function GithubStars({ link }: { link: string }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const parsed = parseGithubUrl(link);
    if (!parsed) return;
    const key = `${parsed.owner}/${parsed.repo}`;

    let alive = true;
    loadStars().then((data) => {
      if (!alive || !data) return;
      const n = data.repos[key];
      if (typeof n === 'number') setStars(n);
    });
    return () => { alive = false; };
  }, [link]);

  if (stars === null) return null;

  return (
    <span className="inline-flex items-center gap-0.5 ml-1 text-xs tabular-nums">
      <StarIcon size={12} strokeWidth={1.5} fill="currentColor" className="text-yellow-500" />
      {formatStars(stars)}
    </span>
  );
}

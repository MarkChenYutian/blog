'use client';

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useState } from "react";

interface FoldableRegionProps {
  children: React.ReactNode;
  /** Visible height (px) when collapsed. */
  collapsedHeight?: number;
  expandLabel?: string;
  collapseLabel?: string;
}

export default function FoldableRegion({
  children,
  collapsedHeight = 100,
  expandLabel = "View more",
  collapseLabel = "View less",
}: FoldableRegionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="relative">
        <div
          className="overflow-hidden"
          style={{ maxHeight: expanded ? 'none' : `${collapsedHeight}px` }}
        >
          {children}
        </div>

        {!expanded && (
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none">
            {/* Gradual backdrop blur — clear at top, fully blurred at bottom */}
            <div
              className="absolute inset-0 backdrop-blur-[3px]"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 80%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 80%)',
              }}
            />
            {/* Gradient fade to background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
          </div>
        )}
      </div>

      <div className="flex justify-center mt-3">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium px-4 py-2"
        >
          {expanded ? collapseLabel : expandLabel}
          {expanded ? (
            <ChevronUpIcon size={18} strokeWidth={2} />
          ) : (
            <ChevronDownIcon size={18} strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  spacing?: number;
  segmentLength?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  /** Pixel radius within which the cursor's influence dominates over the base field. */
  influenceRadius?: number;
};

const noiseAngle = (x: number, y: number, t: number) =>
  (Math.sin(x * 0.012 + t * 1.1 + 1.7) +
    Math.cos(y * 0.014 - t * 0.85 + 0.4) +
    Math.sin((x + y) * 0.009 + t * 0.55) * 0.6) *
  0.4;

const CursorField = ({
  spacing = 28,
  segmentLength = 10,
  strokeWidth = 1.25,
  color = 'currentColor',
  className = '',
  influenceRadius = 220,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [grid, setGrid] = useState<{ cx: number; cy: number }[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const build = () => {
      const { width, height } = el.getBoundingClientRect();
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      if (cols < 1 || rows < 1) return;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;
      const points: { cx: number; cy: number }[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          points.push({ cx: offsetX + c * spacing, cy: offsetY + r * spacing });
        }
      }
      setGrid(points);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(el);
    return () => ro.disconnect();
  }, [spacing]);

  useEffect(() => {
    const el = containerRef.current;
    const svg = svgRef.current;
    if (!el || !svg || grid.length === 0) return;

    const lines = svg.querySelectorAll<SVGLineElement>('line');
    let raf = 0;
    let visible = true;
    let mx = -9999;
    let my = -9999;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };

    const r2 = influenceRadius * influenceRadius;
    const start = performance.now();

    const tick = () => {
      const t = (performance.now() - start) / 1000;
      lines.forEach((line) => {
        const cx = Number(line.dataset.cx);
        const cy = Number(line.dataset.cy);

        const base = noiseAngle(cx, cy, t);
        const baseX = Math.cos(base);
        const baseY = Math.sin(base);

        const dx = mx - cx;
        const dy = my - cy;
        const dist2 = dx * dx + dy * dy;
        const w = Math.exp(-dist2 / (2 * r2));

        const cursorAngle = Math.atan2(dy, dx);
        const blendX = (1 - w) * baseX + w * Math.cos(cursorAngle);
        const blendY = (1 - w) * baseY + w * Math.sin(cursorAngle);

        const angle = (Math.atan2(blendY, blendX) * 180) / Math.PI;
        line.setAttribute('transform', `rotate(${angle} ${cx} ${cy})`);
      });
      raf = requestAnimationFrame(tick);
    };

    const start_loop = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };
    const stop_loop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start_loop();
        else stop_loop();
      },
      { threshold: 0 },
    );
    io.observe(el);

    window.addEventListener('mousemove', onMove);
    if (visible) start_loop();

    return () => {
      stop_loop();
      io.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, [grid, influenceRadius]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <svg ref={svgRef} width='100%' height='100%'>
        {grid.map(({ cx, cy }, i) => (
          <line
            key={i}
            data-cx={cx}
            data-cy={cy}
            x1={cx - segmentLength / 2}
            y1={cy}
            x2={cx + segmentLength / 2}
            y2={cy}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
          />
        ))}
      </svg>
    </div>
  );
};

export default CursorField;

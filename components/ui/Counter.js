import { useEffect, useState } from 'react';

function parseNumberToken(token) {
  const match = String(token).match(/(?<prefix>[^\d]*)(?<num>[\d]+)(?<suffix>.*)/);
  if (!match || !match.groups) return { prefix: '', target: 0, suffix: '' };
  const { prefix, num, suffix } = match.groups;
  return { prefix, target: Number(num), suffix };
}

export default function Counter({ value, duration = 1200, className = '' }) {
  const { prefix, target, suffix } = parseNumberToken(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCurrent(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return (
    <span className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}



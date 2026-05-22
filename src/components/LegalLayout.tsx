import { ReactNode } from 'react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div>
      {/* Header */}
      <section className="section-padding pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding pb-24">
        <div className="max-w-3xl mx-auto space-y-5 text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </section>
    </div>
  );
}

/* ---- Prose helpers: keep legal page bodies clean & consistent ---- */

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-xl font-extrabold text-gray-900 dark:text-white pt-6">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed">{children}</p>;
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

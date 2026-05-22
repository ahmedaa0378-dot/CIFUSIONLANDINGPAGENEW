import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE = 'https://cifusion.ai';

type Meta = { title: string; description: string };

const DEFAULT_META: Meta = {
  title: 'CIFusion.ai — AI-Powered Continuous Improvement',
  description:
    'AI-powered Lean Six Sigma and continuous improvement platform for mid-market operations teams.',
};

const ROUTE_META: Record<string, Meta> = {
  '/': {
    title: 'CIFusion.ai — AI-Powered Continuous Improvement & Lean Six Sigma',
    description:
      'Capture frontline improvement ideas, get GPT-4 Lean Six Sigma methodology recommendations, and track projects to proven ROI. Built for mid-market operations teams.',
  },
  '/platform': {
    title: 'Platform — CIFusion.ai',
    description:
      'See how CIFusion handles the full continuous improvement lifecycle: guided idea submission, AI methodology analysis, approval workflows, project tracking, and ROI validation.',
  },
  '/solutions': {
    title: 'Solutions — CIFusion.ai',
    description:
      'AI-powered continuous improvement for manufacturing, healthcare, pharma, automotive, aerospace, and energy operations.',
  },
  '/pricing': {
    title: 'Pricing — CIFusion.ai',
    description:
      'Flexible plans with unlimited employee accounts at every tier. Tell us about your team and we will tailor a plan to your size, goals, and CI maturity.',
  },
  '/about': {
    title: 'About — CIFusion.ai',
    description:
      'CIFusion is built by a Lean Six Sigma Master Black Belt with 18+ years of continuous improvement experience, encoding hard-won CI expertise into AI.',
  },
  '/demo': {
    title: 'Request a Demo — CIFusion.ai',
    description:
      'Book a 30-minute demo and see how CIFusion captures frontline ideas, recommends Lean Six Sigma methodologies with AI, and tracks projects to proven ROI.',
  },
  '/contact': {
    title: 'Contact — CIFusion.ai',
    description:
      'Get in touch with the CIFusion team about AI-powered continuous improvement for your organization.',
  },
  '/blog': {
    title: 'Blog & Insights — CIFusion.ai',
    description:
      'Practical insights on Lean Six Sigma, AI in operations, and building continuous improvement cultures that deliver real results.',
  },
  '/privacy': {
    title: 'Privacy Policy — CIFusion.ai',
    description:
      'How CIFusion.ai collects, uses, shares, and protects personal data across our platform and website.',
  },
  '/cookies': {
    title: 'Cookie Policy — CIFusion.ai',
    description:
      'How CIFusion.ai uses cookies and similar technologies on our website and platform.',
  },
  '/terms': {
    title: 'Terms of Service — CIFusion.ai',
    description:
      'The terms governing access to and use of the CIFusion.ai platform and website.',
  },
};

function setMetaTag(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function RouteSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? DEFAULT_META;
    document.title = meta.title;
    setMetaTag('description', meta.description);
    setCanonical(SITE + pathname);
  }, [pathname]);
  return null;
}

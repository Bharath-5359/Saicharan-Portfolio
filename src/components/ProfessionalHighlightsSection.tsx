import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Award,
  Sparkles,
  Briefcase,
  Target,
  Filter,
  LineChart,
  FileText,
  Megaphone,
  TrendingUp,
  BarChart3,
  Palette,
  Mail,
  Search,
  Facebook,
  type LucideIcon,
} from 'lucide-react';
import FadeIn from './FadeIn';

const GoogleMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 opacity-70" fill="currentColor" aria-hidden>
    <path d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z" />
  </svg>
);

const HubSpotMark = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 opacity-70" fill="currentColor" aria-hidden>
    <path d="M18.6 8.6V6.1a1.7 1.7 0 1 0-1.6 0v2.5a4.9 4.9 0 0 0-2.4.9L7.9 4.4a1.9 1.9 0 1 0-1 1.3l6.5 5.1a4.9 4.9 0 0 0-.8 2.7 4.9 4.9 0 0 0 .3 1.7l-2 .8a2.1 2.1 0 1 0 .6 1.5l2-.8a4.9 4.9 0 1 0 5.1-8.1zm-1.2 7.6a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
  </svg>
);

const certIcon = (name: string) => {
  if (name.toLowerCase().includes('google')) return <GoogleMark />;
  if (name.toLowerCase().includes('hubspot')) return <HubSpotMark />;
  return null;
};

const ITEM_ICONS: Record<string, LucideIcon> = {
  // Why Hire Me
  'Performance Marketing Focus': Target,
  'Lead Generation Expertise': Filter,
  'Data-Driven Decision Making': LineChart,
  'Content Marketing Experience': FileText,
  'Influencer Marketing Experience': Megaphone,
  'Conversion Funnel Optimization': TrendingUp,
  // Tools I Work With
  'Google Ads': Target,
  'Meta Ads': Facebook,
  'Google Analytics': BarChart3,
  'Canva': Palette,
  'ChatGPT': Sparkles,
  'HubSpot': Briefcase,
  // Current Focus
  'Performance Marketing': TrendingUp,
  'Lead Generation Systems': Filter,
  'SEO Content Strategy': Search,
  'Influencer Outreach': Megaphone,
  'Email Marketing': Mail,
};

const ItemIcon = ({ name }: { name: string }) => {
  const Icon = ITEM_ICONS[name];
  if (!Icon) return null;
  return <Icon size={15} strokeWidth={1.5} className="shrink-0 opacity-70" />;
};


interface HighlightColumn {
  number: string;
  icon: typeof Award;
  label: string;
  tagline: string;
  items: string[];
}

const COLUMNS: HighlightColumn[] = [
  {
    number: '01',
    icon: Award,
    label: 'Certifications',
    tagline: 'Industry-recognized credentials in Google & HubSpot ecosystems.',
    items: [
      'Google Ads Search Certification',
      'Google Ads Display Certification',
      'Google Ads Video Certification',
      'Google Ads Shopping Certification',
      'HubSpot Digital Marketing Certification',
      'HubSpot SEO Certification',
      'HubSpot Social Media Marketing Certification',
    ],
  },
  {
    number: '05',
    icon: Sparkles,
    label: 'Why Hire Me',
    tagline: 'A growth-focused operator blending strategy, creative, and analytics.',
    items: [
      'Performance Marketing Focus',
      'Lead Generation Expertise',
      'Data-Driven Decision Making',
      'Content Marketing Experience',
      'Influencer Marketing Experience',
      'Conversion Funnel Optimization',
    ],
  },
  {
    number: '03',
    icon: Target,
    label: 'Current Focus',
    tagline: 'Where I am sharpening my craft and delivering measurable impact.',
    items: [
      'Performance Marketing',
      'Lead Generation Systems',
      'SEO Content Strategy',
      'Influencer Outreach',
      'Email Marketing',
    ],
  },
  {
    number: '04',
    icon: BarChart3,
    label: 'Tools I Work With',
    tagline: 'Day-to-day stack used across campaigns, analytics, and creative.',
    items: [
      'Google Ads',
      'Meta Ads',
      'Google Analytics',
      'Canva',
      'ChatGPT',
      'HubSpot',
    ],
  },
  {
    number: '02',
    icon: Briefcase,
    label: 'What I Do',
    tagline: 'End-to-end growth execution across paid, organic, and AI workflows.',
    items: [
      'Performance Marketing — Google Ads | Meta Ads | Campaign Strategy',
      'Lead Generation — Lead Generation | Funnel Building | Lead Qualification',
      'Digital Marketing — Content Marketing | Influencer Marketing | Email Marketing',
      'SEO & Analytics — SEO | Keyword Research | Google Analytics',
      'Tools & AI — Canva | ChatGPT | AI Image Generation',
    ],
  },
];

const HighlightCard = ({ column }: { column: HighlightColumn; index: number }) => {
  const Icon = column.icon;
  const showItemIcons =
    column.label === 'Why Hire Me' ||
    column.label === 'Tools I Work With' ||
    column.label === 'Current Focus';
  return (
    <motion.article
      className="shrink-0 origin-top flex flex-col gap-6 sm:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 w-[85vw] sm:w-[60vw] md:w-[48vw] lg:w-[42vw] h-[62vh] max-h-[560px]"
    >
      <div className="flex flex-row items-start gap-4 sm:gap-6 md:gap-8 min-w-0 w-full">
        <div
          className="shrink-0 font-black text-[#D7E2EA] leading-none"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
        >
          {column.number}
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
          <h3
            className="font-medium uppercase text-[#D7E2EA] leading-tight"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
          >
            {column.label}
          </h3>
          <p
            className="font-light leading-relaxed text-[#D7E2EA]/70 max-w-2xl"
            style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
          >
            {column.tagline}
          </p>
        </div>
        <div
          className="hidden sm:flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center border border-[#D7E2EA]/25 bg-[#0C0C0C]"
          style={{ borderRadius: '8px' }}
        >
          <Icon size={26} strokeWidth={1.4} className="text-[#D7E2EA]" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 pr-1">
        <ul className="flex flex-col">
          {column.items.map((item, i) => {
            const icon =
              column.label === 'Certifications'
                ? certIcon(item)
                : showItemIcons
                  ? <ItemIcon name={item} />
                  : null;
            return (
              <li
                key={item}
                className="group flex items-baseline gap-4 sm:gap-6 border-t border-[#D7E2EA]/10 py-3 sm:py-4 last:border-b transition-colors duration-300 hover:border-[#D7E2EA]/40"
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/35 w-8 shrink-0 transition-colors duration-300 group-hover:text-[#D7E2EA]/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-light text-[#D7E2EA]/85 leading-snug transition-colors duration-300 group-hover:text-[#D7E2EA] flex items-center gap-2.5"
                  style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
                >
                  {icon}
                  <span>{item}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.article>
  );
};

const ProfessionalHighlightsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Translate the horizontal track based on vertical scroll progress.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);
  // Smooth momentum for both desktop wheel and mobile touch.
  const xSmooth = useSpring(x, { damping: 32, stiffness: 110, mass: 0.4 });

  // Reorder so card "05" appears in the second slot and card "02" appears at the end.
  const orderedColumns = [
    COLUMNS[0],
    COLUMNS[4],
    COLUMNS[2],
    COLUMNS[3],
    COLUMNS[1],
  ];

  return (
    <section
      id="highlights"
      ref={containerRef}
      className="relative z-10 w-full bg-[#0C0C0C]"
      style={{ height: `${COLUMNS.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        <div className="px-4 sm:px-6 md:px-10 pt-10 sm:pt-12 md:pt-16">
          <FadeIn y={40}>
            <h2
              className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-6 sm:mb-8 md:mb-10"
              style={{ fontSize: 'clamp(2rem, 6vw, 88px)' }}
            >
              Highlights
            </h2>
          </FadeIn>
        </div>

        <div className="flex-1 flex items-center min-h-0 overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x: xSmooth, touchAction: 'pan-y' }}
            className="flex gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 will-change-transform"
          >
            {orderedColumns.map((column, i) => (
              <HighlightCard key={column.number} column={column} index={i} />
            ))}
            <div className="shrink-0 w-4 sm:w-6 md:w-10" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHighlightsSection;

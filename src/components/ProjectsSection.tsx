import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  caseStudyUrl: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Lead Generation · Performance Marketing',
    name: 'Real Estate Lead Generation System',
    description:
      'Built a structured lead generation system using Google Ads and conversion-focused funnels to attract high-intent buyers, improve lead quality, and guide prospects from initial interest to final conversion.',
    col1Image1: '/realestate-ads.jpg',
    col1Image2: '/realestate-funnel.jpg',
    col2Image: '/realestate-hero.jpg',
    caseStudyUrl: '/case-studies/real-estate.pdf',
  },
  {
    number: '02',
    category: 'Lead Generation · Conversion Funnels',
    name: 'Gym Lead Generation & Conversion System',
    description:
      'Developed a complete lead generation and conversion funnel focused on audience acquisition, offer positioning, lead qualification, follow-up systems, and membership conversion optimization.',
    col1Image1: '/gym-dashboard.jpg',
    col1Image2: '/gym-funnel.jpg',
    col2Image: '/gym-hero.jpg',
    caseStudyUrl: '/case-studies/gym.pdf',
  },
  {
    number: '03',
    category: 'Influencer Marketing · Partnerships',
    name: 'Influencer Outreach Campaign',
    description:
      'Developed influencer outreach strategies focused on identifying relevant creators, building partnerships, managing communication, and increasing brand visibility through collaboration campaigns.',
    col1Image1: '/influencer-dashboard.jpg',
    col1Image2: '/influencer-workflow.jpg',
    col2Image: '/influencer-hero.jpg',
    caseStudyUrl: '/case-studies/influencer.pdf',
  },
  {
    number: '04',
    category: 'SEO · Content Strategy',
    name: 'SEO Blog Strategy',
    description:
      'Created SEO-focused content strategies including keyword research, content planning, blog optimization, internal linking structure, and organic traffic growth planning.',
    col1Image1: '/seo-dashboard.jpg',
    col1Image2: '/seo-strategy.jpg',
    col2Image: '/seo-hero.jpg',
    caseStudyUrl: '/case-studies/seo.pdf',
  },
  {
    number: '05',
    category: 'Email Marketing · Automation',
    name: 'Email Marketing System',
    description:
      'Built structured email marketing workflows focused on lead nurturing, audience engagement, follow-up automation, and conversion-focused communication strategies.',
    col1Image1: '/email-workflow.jpg',
    col1Image2: '/email-analytics.jpg',
    col2Image: '/email-hero.jpg',
    caseStudyUrl: '/case-studies/email.pdf',
  },
  {
    number: '06',
    category: 'Content Marketing · Audience Growth · Brand Awareness',
    name: 'Content Marketing Strategy',
    description:
      'Built a content marketing strategy focused on audience growth, brand awareness, content planning across social channels, and performance analysis to drive consistent engagement.',
    col1Image1: '/content-dashboard.jpg',
    col1Image2: '/content-strategy.jpg',
    col2Image: '/content-hero.jpg',
    caseStudyUrl: '/case-studies/content.pdf',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="font-light leading-relaxed text-[#D7E2EA]/70 max-w-2xl mt-1 sm:mt-2"
                style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
              >
                {project.description}
              </p>
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 px-5 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition hover:bg-[#D7E2EA]/15 hover:scale-[1.03]"
              >
                Explore Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[40%_60%] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0">
            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div
              className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-0">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

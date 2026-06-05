import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const ABOUT_PARAGRAPHS = [
  "I'm a Digital Marketing Specialist passionate about building growth-focused marketing systems that help businesses attract, engage, and convert the right audience.",
  'Currently, I work as a Digital Marketing Intern at Humanity Founder, where I create content, manage campaigns, support influencer collaborations, and contribute to brand growth initiatives.',
  'My experience includes lead generation, performance marketing, conversion-focused funnels, and digital strategies designed to drive measurable business results.',
  'I believe successful marketing combines creativity, strategy, and analytics. My goal is to help brands grow through impactful campaigns, stronger customer connections, and sustainable digital growth.',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading whitespace-nowrap text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1rem, 12vw, 140px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex w-full flex-col gap-5 sm:gap-6"
        >
          <motion.span
            variants={paragraphVariants}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/50"
          >
            Who I am
          </motion.span>
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              variants={paragraphVariants}
              className="font-light leading-relaxed text-[#D7E2EA]/85"
              style={{ fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)' }}
            >
              {p}
            </motion.p>
          ))}
          <motion.div variants={paragraphVariants} className="pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D7E2EA] backdrop-blur-md transition hover:bg-[#D7E2EA]/10 hover:scale-[1.03]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

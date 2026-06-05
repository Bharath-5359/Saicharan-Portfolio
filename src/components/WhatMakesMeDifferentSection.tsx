import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const PARAGRAPHS = [
  'I focus on combining performance marketing, lead generation, content strategy, and influencer outreach to create growth-focused marketing systems that drive measurable business results.',
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

const WhatMakesMeDifferentSection = () => {
  return (
    <section
      id="what-makes-me-different"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 9vw, 100px)' }}
          >
            What Makes Me Different
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
            className="text-xs sm:text-sm uppercase tracking-[1em] text-[#D7E2EA]/50"
          >
            My Edge
          </motion.span>
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              variants={paragraphVariants}
              className="font-light leading-relaxed text-[#D7E2EA]/85"
              style={{ fontSize: 'clamp(1.7rem, 1.25vw, 1.15rem)' }}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesMeDifferentSection;
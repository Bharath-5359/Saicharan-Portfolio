import FadeIn from './FadeIn';

const RESPONSIBILITIES = [
  {
    number: '01',
    title: 'Social Media Management',
    description:
      'Planning content calendars, managing brand pages, and engaging communities to grow reach and consistent presence across platforms.',
  },
  {
    number: '02',
    title: 'Content Creation',
    description:
      'Producing on-brand creatives, short-form copy, and campaign assets that connect with the target audience and drive engagement.',
  },
  {
    number: '03',
    title: 'Google Ads Campaign Management',
    description:
      'Setting up, optimizing, and scaling Search, Display, and Video campaigns to deliver qualified traffic and improve ROAS.',
  },
  {
    number: '04',
    title: 'Meta Ads Campaign Management',
    description:
      'Running performance campaigns on Facebook and Instagram — audience targeting, creative testing, and full-funnel optimization.',
  },
  {
    number: '05',
    title: 'Influencer Outreach',
    description:
      'Identifying aligned creators, managing communications, and coordinating collaborations that expand brand visibility and trust.',
  },
  {
    number: '06',
    title: 'Brand Partnerships',
    description:
      'Supporting collaboration opportunities with creators and partners to amplify campaigns and unlock new audience segments.',
  },
  {
    number: '07',
    title: 'Strategic Outreach',
    description:
      'Building structured outbound and engagement strategies that nurture leads and convert interest into long-term relationships.',
  },
  {
    number: '08',
    title: 'Audience Growth Initiatives',
    description:
      'Launching growth-focused initiatives across organic and paid channels to consistently expand the right audience and improve retention.',
  },
];

const ServicesSection = () => {
  return (
    <section
  id="services"
  style={{ backgroundColor: "#D7E2EA" }}
  className="relative w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20"
>
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-6 sm:mb-8 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 100px)' }}
        >
          Experience
        </h2>
      </FadeIn>


      <div className="mx-auto max-w-5xl">
        {RESPONSIBILITIES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === RESPONSIBILITIES.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;
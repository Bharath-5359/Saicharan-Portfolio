import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "saicharan5359@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=saicharan5359@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect With Me",
    href: "https://www.linkedin.com/in/chandra-sai-charan142936",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "https://www.google.com/maps/place/Hyderabad",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Get In Touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)" }}
        >
          Pick whichever channel suits you
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {CONTACT_METHODS.map((method, i) => {
          const Icon = method.icon;

          return (
            <FadeIn key={method.label} delay={i * 0.1} y={30}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col justify-between gap-8 sm:gap-10 border-2 border-[#D7E2EA]/20 bg-[#111111] p-6 sm:p-8 transition-all duration-300 hover:border-[#D7E2EA] cursor-pointer"
                style={{ borderRadius: "6px" }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="border border-[#D7E2EA]/20 p-3 sm:p-3.5 transition-colors duration-300 group-hover:border-[#D7E2EA]"
                    style={{ borderRadius: "4px" }}
                  >
                    <Icon
                      className="text-[#D7E2EA]"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>

                  <ArrowUpRight
                    className="text-[#D7E2EA]/40 transition-all duration-300 group-hover:text-[#D7E2EA] group-hover:-rotate-12"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <span
                    className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
                    style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" }}
                  >
                    {method.label}
                  </span>

                  <span
                    className="font-medium text-[#D7E2EA] break-all"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
                  >
                    {method.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" }}
          >
            © 2026 Chandra Sai Charan Ramagiri
          </span>

          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)" }}
          >
            Based in Hyderabad, India
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
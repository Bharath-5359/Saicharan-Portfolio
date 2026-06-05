import ContactButton from './ContactButton';

const CtaGroup = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
      <ContactButton label="Let's Build Growth Together" href="#contact" />
      <ContactButton
        label="Download Resume"
        href="/resume.pdf"
        variant="secondary"
        newTab
      />
    </div>
  );
};

export default CtaGroup;

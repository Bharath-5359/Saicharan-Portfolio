interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  download?: boolean;
  newTab?: boolean;
}

const ContactButton = ({
  label = "Let's Build Growth Together",
  href = '#contact',
  onClick,
  className = '',
  variant = 'primary',
  download = false,
  newTab = false,
}: ContactButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={href}
      onClick={onClick}
      download={download || undefined}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest whitespace-nowrap transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${
        isPrimary ? 'text-white' : 'text-[#D7E2EA]'
      } ${className}`}
      style={
        isPrimary
          ? {
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow:
                '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid #FFFFFF',
              outlineOffset: '-3px',
            }
          : {
              background: 'transparent',
              outline: '2px solid rgba(215, 226, 234, 0.6)',
              outlineOffset: '-3px',
            }
      }
    >
      {label}
    </a>
  );
};

export default ContactButton;

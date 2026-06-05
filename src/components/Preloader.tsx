import { useEffect, useState } from "react";

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setShowWelcome(true);
          }, 300);

          setTimeout(() => {
            setFadeOut(true);
          }, 1800);

          setTimeout(() => {
            onFinish();
          }, 2500);

          return 100;
        }

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {!showWelcome && (
        <>
          {/* Bottom Left */}
          <div className="absolute bottom-8 left-8">
            <h2 className="text-white text-xl font-medium tracking-wider">
              CSC
            </h2>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-6 right-8 text-right">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-2">
              Digital Marketing Specialist
            </p>

            <h1
              className="text-white font-extralight leading-none"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
              }}
            >
              {progress}
            </h1>
          </div>

          {/* Bottom Progress Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </>
      )}

      {/* Welcome Screen */}
      {showWelcome && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="text-white font-black uppercase animate-pulse"
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              letterSpacing: "-0.04em",
            }}
          >
            WELCOME
          </h1>

          <p className="mt-6 text-white/60 uppercase tracking-[0.4em] text-sm">
            Chandra Sai Charan Ramagiri
          </p>

          <p className="mt-2 text-[#D7E2EA] uppercase tracking-[0.4em] text-xs">
            Digital Marketing Specialist
          </p>
        </div>
      )}
    </div>
  );
}
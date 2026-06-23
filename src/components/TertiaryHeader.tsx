import { useState } from "react";
import logo from "../assets/cf-logo.png";

const PLANS_URL = "https://connect-and-funda.vercel.app/#plans";

// Replace this later with the final main-domain About URL.
const ABOUT_URL = "https://www.connectandfunda.co.za/about";

function TertiaryHeader({
  onPartnerClick,
  onLogoClick,
}: {
  onPartnerClick: () => void;
  onLogoClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  const navClass =
    "font-display font-semibold text-[.92rem] text-cf-navy hover:text-cf-orange transition-colors";

  function handlePartnerClick() {
    setOpen(false);
    onPartnerClick();
  }

  function handleLogoClick() {
    setOpen(false);
    onLogoClick();
  }

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-cf-line">
      <div className="mx-auto max-w-[1180px] px-6 h-[74px] flex items-center justify-between">
        <button
          type="button"
          onClick={handleLogoClick}
          className="shrink-0 cursor-pointer"
          aria-label="Back to top"
        >
          <img src={logo} alt="Connect+Funda Mobile" className="h-[34px]" />
        </button>

        <nav className="hidden md:flex items-center gap-7">
          <a href={ABOUT_URL} className={navClass}>
            About
          </a>

          <a
            href={PLANS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navClass}
          >
            Plans
          </a>

          <span className="font-display font-semibold text-[.92rem] text-cf-orange">
            Tertiary
          </span>
        </nav>

        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={handlePartnerClick}
            className="btn-primary !px-5 !py-2.5"
          >
            Partner with us
          </button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((current) => !current)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3645"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cf-line bg-white px-6 py-4">
          <a
            href={ABOUT_URL}
            onClick={() => setOpen(false)}
            className="block py-2.5 font-display font-semibold text-cf-navy"
          >
            About
          </a>

          <a
            href={PLANS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block py-2.5 font-display font-semibold text-cf-navy"
          >
            Plans
          </a>

          <span className="block py-2.5 font-display font-semibold text-cf-orange">
            Tertiary
          </span>

          <button
            type="button"
            onClick={handlePartnerClick}
            className="btn-primary mt-3 w-full justify-center"
          >
            Partner with us
          </button>
        </div>
      )}
    </header>
  );
}

export default TertiaryHeader;

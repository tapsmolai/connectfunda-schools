import aboutImg from "../assets/corp-about.jpg";
import { Icon } from "./Icon";
import type { IconName } from "../config/types";
import AudienceHeader from "./AudienceHeader";

type AboutPageProps = {
  onLogoClick: () => void;
  onAboutClick: () => void;
  onPlansClick: () => void;
  onPartnerClick: () => void;
};

export default function AboutPage({
  onLogoClick,
  onAboutClick,
  onPlansClick,
  onPartnerClick,
}: AboutPageProps) {
  const missionVision: {
    icon: IconName;
    title: string;
    body: string;
  }[] = [
    {
      icon: "heart",
      title: "Our mission",
      body: "To make quality learning affordable and accessible by bundling connectivity, content, safety and rewards into one platform — distributed through the institutions learners already trust.",
    },
    {
      icon: "growth",
      title: "Our vision",
      body: "To become Africa's leading education-first network — the default way families, schools and partners connect learners to opportunity.",
    },
  ];

  const why = [
    {
      number: "01",
      title: "The cost barrier",
      body: "Open-market data prices millions of learners out of online learning. Affordable, education-friendly bundles remove that barrier.",
    },
    {
      number: "02",
      title: "The adoption gap",
      body: "Stand-alone learning apps are easily uninstalled. Anchoring them to the SIM turns downloads into daily, engaged use.",
    },
    {
      number: "03",
      title: "The trust gap",
      body: "Parents need visibility and safety. Built-in parental controls and content filtering protect younger learners online.",
    },
    {
      number: "04",
      title: "The moment",
      body: "High smartphone penetration, a pro-MVNO regulatory framework and viable AI tutoring make an education-first network possible today.",
    },
  ];

  const team = [
    {
      initials: "NM",
      founder: true,
      name: "Ndaba Moyo",
      role: "Co-founder & CEO",
      bio: "Chartered accountant with 20+ years in investment banking and corporate leadership. Drives strategy, partnerships and capital raising.",
      linkedin: "https://www.linkedin.com/in/ndaba-n-moyo-01a72b1b/",
    },
    {
      initials: "GM",
      name: "Godfrey Marange",
      role: "Co-founder & CTO",
      bio: "Microsoft-certified technologist leading platform architecture, scalable systems and MVNO integration via the MVN-X platform on Microsoft Azure.",
      linkedin: "https://www.linkedin.com/in/godfrey-marange-4ba60737/",
    },
    {
      initials: "GW",
      name: "Garth Walker",
      role: "Chief Sales Officer",
      bio: "25+ years in sales leadership across B2B and B2C, building institutional channel partnerships and structuring CSR / B-BBEE deals.",
      linkedin: "https://www.linkedin.com/in/garth-walker-62164426/",
    },
    {
      initials: "RM",
      name: "Renee Martin",
      role: "Director",
      bio: "Finance and accounting professional with deep experience in the education sector, including The British International School.",
      linkedin: "https://www.linkedin.com/in/renee-martin-marange/",
    },
  ];

  const compliance = [
    {
      title: "ICASA",
      status: "Active",
      body: "MVNO operations on Cell C's licences, via the MVN-X platform. Product configuration is ICASA-compliant.",
    },
    {
      title: "POPIA",
      status: "Active",
      body: "Information Officer registered with the Information Regulator. Parental-consent flows protect minor data.",
    },
    {
      title: "FICA",
      status: "Active",
      body: "FICA-ready KYC for SIM activation through verified-ID services. No deposit-taking.",
    },
    {
      title: "Companies Act",
      status: "Active",
      body: "Enthucate Tech (Pty) Ltd in good standing; CIPC filings and statutory registers maintained.",
    },
    {
      title: "Consumer (CPA)",
      status: "Active",
      body: "CPA-aligned terms, truth-in-advertising and cooling-off periods.",
    },
    {
      title: "B-BBEE",
      status: "In progress",
      body: "Majority Black-owned (92.5%); formal scorecard targeted at first-year close.",
    },
  ];

  const partners = [
    "Cell C",
    "MVN-X",
    "Microsoft Azure",
    "Matific",
    "Readability",
    "FundaGuide AI",
    "Pargo",
    "Axiz",
    "Extreme Lifestyle",
  ];

  return (
    <>
      <AudienceHeader
        audienceLabel="Schools"
        activePage="about"
        onLogoClick={onLogoClick}
        onAboutClick={onAboutClick}
        onPlansClick={onPlansClick}
        onPartnerClick={onPartnerClick}
      />
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(100deg,rgba(27,34,44,.97),rgba(34,42,54,.8)),url(${aboutImg}) center/cover`,
          }}
        />

        <div className="relative mx-auto max-w-[1180px] px-6 py-[84px] md:pb-[88px] max-w-[60ch]">
          <div className="font-display font-bold uppercase tracking-[.16em] text-[.74rem] text-[#FFB892]">
            About Connect+Funda Mobile
          </div>

          <h1 className="font-display font-extrabold leading-[1.12] tracking-tight text-[clamp(2.1rem,4.8vw,3.2rem)] mt-3.5">
            Connectivity and education{" "}
            <span className="text-cf-orange">belong together.</span>
          </h1>

          <p className="mt-4.5 text-[#D7DEE8] text-[1.1rem]">
            We&apos;re South Africa&apos;s first education-first mobile network
            — an MVNO built so that every rand spent on data does double duty as
            an investment in learning.
          </p>
        </div>
      </section>

      <section className="py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6 grid gap-6 md:grid-cols-2">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="bg-cf-bgSoft border border-cf-line rounded-[18px] p-[30px]"
            >
              <div className="w-[46px] h-[46px] rounded-[12px] bg-cf-orange/10 flex items-center justify-center mb-4 text-cf-orange">
                <Icon name={item.icon} className="w-6 h-6" />
              </div>

              <h2 className="font-display font-extrabold text-cf-navy text-[1.2rem]">
                {item.title}
              </h2>

              <p className="mt-2.5 text-cf-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[78px] bg-cf-bgSoft">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              Our story
            </div>

            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              Why we built an education-first network
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-cf-muted">
                Connect+Funda Mobile began with a problem we kept seeing in
                South African education: connectivity and learning were treated
                as two separate purchases, and millions of learners could not
                afford both. Open-market data made online learning a luxury, and
                the EdTech apps meant to help were one tap away from being
                deleted.
              </p>

              <p className="text-cf-muted mt-3.5">
                Traditional networks were not built for the classroom. Students
                struggled with the cost of data, parents had no visibility into
                their children&apos;s digital learning, and schools had no
                affordable way to put tools in learners&apos; hands.
              </p>
            </div>

            <div>
              <p className="text-cf-muted">
                So we anchored learning to the SIM. As a mobile virtual network
                operator on the Cell C network, we bundle affordable,
                education-friendly data with zero-rated learning content, an AI
                tutor, safety controls and a rewards programme — all in one app.
              </p>

              <p className="text-cf-muted mt-3.5">
                Rather than chase expensive advertising, we reach learners
                through the schools, colleges, CSR partners and student bodies
                they already belong to. Every rand spent on connectivity
                contributes directly to a learning outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              Why now
            </div>

            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              The gap we&apos;re closing
            </h2>
          </div>

          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-cf-line rounded-[16px] p-6"
              >
                <div className="font-display font-extrabold text-cf-orange text-[1.4rem] mb-1.5">
                  {item.number}
                </div>

                <h3 className="font-display font-extrabold text-cf-navy text-[1rem]">
                  {item.title}
                </h3>

                <p className="mt-2 text-cf-muted text-[.88rem]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[78px] bg-cf-bgSoft">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[640px] mb-[42px]">
            <div className="font-display font-bold text-cf-orange uppercase tracking-[.16em] text-[.74rem]">
              Leadership
            </div>

            <h2 className="font-display font-extrabold text-cf-navy text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              The team behind the network
            </h2>

            <p className="mt-3.5 text-cf-muted text-[1.05rem]">
              Experience across corporate finance, scalable platform engineering
              and institutional sales — the three disciplines an MVNO and EdTech
              business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-[22px]">
            {team.map((person) => (
              <div
                key={person.initials}
                className="flex gap-[18px] bg-white border border-cf-line rounded-[18px] p-6 shadow-[0_18px_44px_-38px_rgba(27,34,44,.5)]"
              >
                <div
                  className={`w-[74px] h-[74px] flex-[0_0_74px] rounded-[16px] flex items-center justify-center font-display font-extrabold text-white text-[1.4rem] ${
                    person.founder ? "bg-cf-orange" : "bg-cf-navy"
                  }`}
                >
                  {person.initials}
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-cf-navy text-[1.08rem]">
                    {person.name}
                  </h3>

                  <div className="font-display font-bold text-cf-orange text-[.82rem] my-[3px]">
                    {person.role}
                  </div>

                  <p className="text-cf-muted text-[.88rem]">{person.bio}</p>

                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2.5 font-display font-bold text-[.8rem] text-cf-navy hover:text-cf-orange"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[78px] bg-cf-navyDeep text-white">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[640px] mb-[42px]">
            <div className="font-display font-bold uppercase tracking-[.16em] text-[.74rem] text-[#FFB892]">
              Governance & compliance
            </div>

            <h2 className="font-display font-extrabold text-white text-[clamp(1.7rem,3.4vw,2.4rem)] mt-3">
              Built to operate responsibly
            </h2>

            <p className="mt-3.5 text-[#C2CBD8] text-[1.05rem]">
              Serving under-18 learners on a regulated network means compliance
              is not optional. We are compliant or compliant-by-design across
              every regime that applies to us.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {compliance.map((item) => (
              <div
                key={item.title}
                className="bg-cf-navyInk border border-white/8 rounded-[16px] p-[22px]"
              >
                <span className="font-display font-extrabold text-white text-[.95rem]">
                  {item.title}
                </span>

                <span
                  className={`float-right font-display font-bold text-[.62rem] tracking-[.1em] uppercase px-2.5 py-1 rounded-full text-[#0f1620] ${
                    item.status === "Active" ? "bg-[#7FD49B]" : "bg-[#FFC98A]"
                  }`}
                >
                  {item.status}
                </span>

                <p className="clear-both mt-3 text-[#AEB8C7] text-[.84rem]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[60px] border-y border-cf-line">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="text-center text-cf-muted font-display font-semibold text-[.82rem] tracking-[.05em]">
            Our signed partners &amp; platform
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-display font-bold text-[.86rem] text-cf-navy bg-cf-bgSoft border border-cf-line px-[1.05rem] py-2.5 rounded-full"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="text-white text-center py-[66px]"
        style={{ background: "linear-gradient(135deg,#F2682A,#D9531A)" }}
      >
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className="font-display font-extrabold text-white text-[clamp(1.7rem,3.6vw,2.5rem)] max-w-[20ch] mx-auto">
            Let&apos;s connect learning to opportunity.
          </h2>

          <p className="mt-3.5 max-w-[54ch] mx-auto text-[#FFE6D8]">
            Tell us about your institution and the students you serve. We will
            recommend the partnership model that fits.
          </p>

          <button
            type="button"
            onClick={onPartnerClick}
            className="inline-flex items-center gap-2 font-display font-bold text-[.95rem] px-6 py-[.95rem] rounded-full mt-7 bg-white text-cf-orangeDk hover:bg-[#FFF1E8] transition-colors"
          >
            Partner with us →
          </button>
        </div>
      </section>
    </>
  );
}

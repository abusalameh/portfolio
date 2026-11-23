import {
  Database,
  Devices,
  MagnifyingGlass,
  Stack,
} from "@phosphor-icons/react/ssr";
import { Fragment } from "react";
import {
  CV_URL,
  dict,
  EMAIL,
  experience,
  featured,
  GITHUB,
  LINKEDIN,
  type Locale,
  logos,
  moreProjects,
  other,
  PHONE,
  PHONE_TEL,
  WHATSAPP,
} from "@/lib/content";
import Effects from "./Effects";
import LangLink from "./LangLink";
import Shot from "./Shot";
import Showcase from "./Showcase";

const SERVICE_ICONS = [Stack, Devices, Database, MagnifyingGlass];

function Arrow() {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
    </svg>
  );
}

/** "I build web apps that *perform.*" → word spans that rise in, starred words in the accent colour. */
function Headline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1>
      {words.map((w, i) => {
        const accent = w.startsWith("*") || w.endsWith("*");
        const clean = w.replace(/\*/g, "");
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: static word list
          <Fragment key={i}>
            {/* the accented phrase always starts its own line */}
            {w.startsWith("*") && i > 0 ? <br /> : null}
            <span className="w">
              <span>{accent ? <em>{clean}</em> : clean}</span>
            </span>
            {i < words.length - 1 && !words[i + 1].startsWith("*") ? " " : null}
          </Fragment>
        );
      })}
    </h1>
  );
}

export default function Site({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const to = other(locale);
  const ext = { target: "_blank", rel: "noopener" } as const;

  return (
    <>
      <a className="skip" href="#top">
        {t.skip}
      </a>
      <header className="site">
        <div className="wrap bar">
          <a className="logo" href="#top">
            {t.logo}
          </a>
          <nav
            className="nav"
            aria-label={locale === "ar" ? "الأقسام" : "Sections"}
          >
            {t.nav.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="end">
            <LangLink to={to} label={t.langName} />
            <a className="btn mag" href="#contact">
              {t.ctaTop}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <div className="hero-top rv">
            {/* biome-ignore lint/performance/noImgElement: static export */}
            <img
              className="avatar"
              src="/media/me-160.jpg"
              alt=""
              width={40}
              height={40}
            />
            <span className="who">{t.name}</span>
          </div>
          <Headline text={t.h1} />
          <p className="sub rv">{t.sub}</p>
          <div className="chips rv" dir="ltr">
            <span>React</span>
            <span>Next.js</span>
            <span>Vue</span>
            <span>Laravel</span>
          </div>
          <div className="ctas rv">
            <a className="btn mag" href="#work">
              {t.cta1}
            </a>
            <a className="btn line mag" href={CV_URL} download>
              {t.cta2}
            </a>
          </div>
          <Showcase
            locale={locale}
            labels={{ pause: t.pause, play: t.play, visit: t.visit }}
          />
        </section>

        <div className="wrap nums">
          {t.nums.map(([n, label]) => (
            <div className="num rv" key={label}>
              <b>
                <bdi dir="ltr" data-n={n}>
                  {n}
                </bdi>
              </b>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="wrap logos rv">
          <p>{t.workedWith}</p>
          <ul>
            {logos.map((l) => (
              <li key={l.name}>
                {/* biome-ignore lint/performance/noImgElement: static export */}
                <img
                  src={l.src}
                  alt=""
                  className={"wide" in l && l.wide ? "wide" : undefined}
                  width={28}
                  height={28}
                  loading="lazy"
                />
                <span className="ltr">{l.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <section className="wrap block" id="work">
          <div className="head rv">
            <h2>{t.wT}</h2>
            <p>{t.wP}</p>
          </div>
          <div className="bento">
            {featured.map((p) => (
              <a
                key={p.key}
                className={`tile t-${p.key}`}
                href={p.url}
                {...ext}
              >
                {p.shot ? (
                  <Shot name={p.shot} sizes="(max-width: 860px) 100vw, 60vw" />
                ) : (
                  // biome-ignore lint/performance/noImgElement: static export
                  <img src={p.image} alt={p.name[locale]} loading="lazy" />
                )}
                <span className={`chip${p.founder ? " red" : ""}`}>
                  {p.chip[locale]}
                </span>
                <span className="go">
                  <Arrow />
                </span>
                <div className="meta">
                  <b>{p.name[locale]}</b>
                  <span>{p.type[locale]}</span>
                </div>
              </a>
            ))}
            <a className="tile t-all" href="#more">
              <b>{t.allTile}</b>
              <span className="go">
                <Arrow />
              </span>
            </a>
          </div>
          <div id="more">
            <div className="head rv more-head">
              <h3 className="sub-h">{t.moreH}</h3>
              <p>{t.moreP}</p>
            </div>
            <div className="plist">
              {moreProjects.map((p) => (
                <div className="prow nolink" data-img={p.image} key={p.name}>
                  <b>{p.name}</b>
                  <span>
                    {p.type[locale]} · {p.year}
                  </span>
                  <span className="go dark ghost">
                    <Arrow />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap block" id="services">
          <div className="head rv">
            <h2>{t.sT}</h2>
            <p>{t.sP}</p>
          </div>
          <div className="svc">
            {t.svc.map(([title, line, body, stack], i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <article className="s" key={title}>
                  <Icon className="ic" weight="duotone" aria-hidden="true" />
                  <span className="k ltr">{`0${i + 1} / 04`}</span>
                  <div className="top">
                    <h3>{title}</h3>
                    <div className="tl">{line}</div>
                  </div>
                  <div className="bot">
                    <ul className="incl">
                      {body.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <div className="stack">
                      {stack.map((x) => (
                        <span className="ltr" key={x}>
                          {x}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="svc-end rv">
            <p>{t.svcNote}</p>
            <a className="btn mag" href="#contact">
              {t.svcBtn}
            </a>
          </div>
        </section>

        <section className="wrap block" id="experience">
          <div className="head rv">
            <h2>{t.xT}</h2>
            <p>{t.xP}</p>
          </div>
          <div className="xp">
            {experience.map((j) => (
              <div className="job" key={j.company.en + j.dates.en}>
                <div className="when">
                  {j.dates[locale]}
                  {j.current ? <i>{t.now}</i> : null}
                </div>
                <div>
                  <b>{j.company[locale]}</b>
                  <span className="t">{j.title[locale]}</span>
                </div>
                <div>
                  <p>{j.summary[locale]}</p>
                  <div className="tags">
                    {j.tags.map((x) => (
                      <span className="ltr" key={x}>
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="foot" id="contact">
        <div className="wrap">
          <div className="f-cta">
            <div>
              {/* biome-ignore lint/performance/noImgElement: static export */}
              <img
                className="avatar lg"
                src="/media/me-160.jpg"
                alt=""
                width={64}
                height={64}
                loading="lazy"
              />
              <h2>{t.cT}</h2>
              <p>{t.cP}</p>
            </div>
            <a className="btn red mag" href={`mailto:${EMAIL}`}>
              {t.cBtn}
            </a>
          </div>
          <div className="reach">
            <a href={`mailto:${EMAIL}`}>
              <small>{t.lEmail}</small>
              <b className="ltr">{EMAIL}</b>
            </a>
            <a href={`tel:${PHONE_TEL}`}>
              <small>{t.lPhone}</small>
              <b className="ltr">{PHONE}</b>
            </a>
            <a href={WHATSAPP} {...ext}>
              <small>{t.lWa}</small>
              <b>{t.lWaV}</b>
            </a>
          </div>
          <div className="f-cols">
            <div>
              <b>{t.fProj}</b>
              <a href="https://salmasoft.com" {...ext}>
                {t.pSalma}
              </a>
              <a href="https://uqhoan.com" {...ext}>
                {t.pUq}
              </a>
              <a href="https://doprint.ps" {...ext}>
                {t.pDo}
              </a>
              <a href="https://rosaline.pro" {...ext}>
                {t.pRosa}
              </a>
            </div>
            <div>
              <b>{t.fPages}</b>
              <a href="#work">{t.nW1}</a>
              <a href="#services">{t.nS1}</a>
              <a href="#experience">{t.nX1}</a>
              <a href={CV_URL} download>
                {t.cta2}
              </a>
            </div>
            <div>
              <b>{t.fFollow}</b>
              <a href={LINKEDIN} {...ext}>
                LinkedIn
              </a>
              <a href={GITHUB} {...ext}>
                GitHub
              </a>
            </div>
            <div>
              <b>{t.lLoc}</b>
              <span>{t.loc}</span>
              <span>{t.tz}</span>
            </div>
          </div>
          <div className="mark" aria-hidden="true">
            <span>{t.logo}</span>
            <i />
          </div>
          <div className="legal">
            <span>{t.foot}</span>
            <a href="#top" className="totop">
              {t.toTop}
            </a>
          </div>
        </div>
      </footer>
      <div className="float" aria-hidden="true">
        {/* biome-ignore lint/performance/noImgElement: static export */}
        <img alt="" />
      </div>
      <Effects />
    </>
  );
}

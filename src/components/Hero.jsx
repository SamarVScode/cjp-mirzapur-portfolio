"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { posterImage } from "../lib/assets";
import { fetchStats } from "../lib/firebase";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const [signerCount, setSignerCount] = useState(null);
  const [stats, setStats] = useState({ memberCount: 0, complaintCount: 0 });

  useEffect(() => {
    fetch("https://petition.cockroachjantaparty.org/api/count", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        const count = d.count || d.total || d.signatures;
        if (count) {
          setSignerCount(count);
        }
      })
      .catch(() => {
        // silently fail
      });

    const loadStats = async () => {
      try {
        const data = await fetchStats();
        if (data) {
          setStats(data);
        }
      } catch (err) {
        console.error("Error loading stats:", err);
      }
    };
    loadStats();
  }, []);

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-kicker">
            <span className="live-dot"></span>
            <span>{language === "en" ? "Party Launch · Volume 1" : "पार्टी लॉन्च · संस्करण १"}</span>
          </div>

          <h1 className="hero-title">
            {t("hero_title_1")}<br />
            {language === "en" ? (
              <>
                <span className="t-saffron">Lazy</span> &amp;<br />
                <span className="t-green t-italic">Unemployed.</span>
              </>
            ) : (
              <span className="t-green t-italic">{t("hero_title_italic")}</span>
            )}
          </h1>

          <p className="hero-sub">
            {t("hero_desc")}
          </p>

          <div className="hero-ctas">
            <Link href="/join" className="btn-primary">
              {t("nav_join")}
              <span className="arr">→</span>
            </Link>
            <a
              href="https://petition.cockroachjantaparty.org/sack"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-petition"
            >
              <span className="btn-petition-dot"></span>
              <span className="btn-petition-text">
                <span className="btn-petition-main">
                  {language === "en" ? "Sack The Education Minister" : "शिक्षा मंत्री को बर्खास्त करो"}
                </span>
                <span className="btn-petition-sub">
                  {language === "en" ? "File the petition! →" : "याचिका दायर करें! →"}
                </span>
              </span>
              {signerCount !== null && (
                <span className="btn-petition-badge" id="petition-count">
                  {signerCount}
                </span>
              )}
            </a>
            <Link href="#manifesto" className="btn-link">{t("nav_manifesto")}</Link>
          </div>

          <div className="hero-strip">
            <div>
              <strong>{stats.memberCount.toLocaleString(language === "en" ? "en-IN" : "hi-IN")}</strong>
              <span>{t("stat_members_val")}</span>
            </div>
            <div>
              <strong>{stats.complaintCount.toLocaleString(language === "en" ? "en-IN" : "hi-IN")}</strong>
              <span>{t("stat_complaints_val")}</span>
            </div>
          </div>
        </div>

        <div className="hero-poster">
          <div className="poster-frame">
            <div className="poster-band-top">
              <span>{language === "en" ? "Official Poster · No. 001" : "आधिकारिक पोस्टर · संख्या ००१"}</span>
              <span>★ ★ ★</span>
            </div>
            <img
              decoding="async"
              fetchPriority="high"
              src={posterImage}
              alt={language === "en" ? "The Founder addresses the swarm" : "संस्थापक झुंड को संबोधित करते हुए"}
            />
            <div className="poster-band-bottom">
              <p className="pbb-sup">
                {language === "en" ? "Together · Resilient · Unstoppable" : "एकता · जुझारू · अटूट"}
              </p>
              <p className="pbb-main">
                {language === "en" ? (
                  <>They tried to step on us.<br />We came back.</>
                ) : (
                  <>उन्होंने हमें कुचलने की कोशिश की।<br />हम फिर वापस आ गए।</>
                )}
              </p>
            </div>
            <span className="poster-stamp">{t("wall_approved")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

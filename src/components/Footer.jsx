"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="foot-brand">
          <div className="brand">
            <span className="brand-logo">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="32" cy="32" r="29" fill="none" stroke="#E0651E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                <circle cx="32" cy="32" r="29" fill="none" stroke="#1F5A2E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                <ellipse cx="32" cy="36" rx="11" ry="16" fill="#F0E5D0"></ellipse>
                <ellipse cx="32" cy="25" rx="7" ry="6" fill="#F0E5D0"></ellipse>
                <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#1a1410"></rect>
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">COCKROACH<br />JANTA PARTY</span>
              <span className="brand-tag">{t("footer_party") === "The Party" ? "कॉकरोच जनता पार्टी" : "कॉकरोच जनता पार्टी"}</span>
            </span>
          </div>
          <p className="foot-blurb">
            {t("footer_blurb")}
          </p>
        </div>

        <div className="foot-cols">
          <div className="foot-col">
            <h4>{t("footer_party")}</h4>
            <ul>
              <li><Link href="/vision">{t("nav_vision")}</Link></li>
              <li><Link href="/manifesto">{t("nav_manifesto")}</Link></li>
              <li><Link href="/contact">{t("contact_founder_title")}</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{t("footer_get_involved")}</h4>
            <ul>
              <li><Link href="/eligibility">{t("nav_eligibility")}</Link></li>
              <li><Link href="/join">{t("nav_join")}</Link></li>
              <li><Link href="/contact">{t("footer_volunteer")}</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{t("footer_follow")}</h4>
            <ul>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container fb-inner">
          <span>{t("footer_copyright")}</span>
          <span className="satire">{t("footer_satire")}</span>
          <span className="foot-links">
            <Link href="/contact">{t("footer_privacy")}</Link> · <Link href="/contact">{t("footer_press")}</Link> · <Link href="/contact">{t("nav_contact")}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

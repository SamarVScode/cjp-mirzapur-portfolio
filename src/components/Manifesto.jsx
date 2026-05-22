"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Manifesto() {
  const { t } = useLanguage();

  return (
    <section className="manifesto" id="manifesto" data-screen-label="03 Manifesto">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow on-dark">{t("manifesto_eyebrow")}</span>
          <h2 className="display on-dark">{t("manifesto_title")}</h2>
          <p className="lead on-dark">{t("manifesto_desc")}</p>
        </header>

        <ol className="demands">
          <li className="demand">
            <span className="d-num">01</span>
            <p className="d-text">
              {t("manifesto_d1")}
            </p>
          </li>

          <li className="demand">
            <span className="d-num">02</span>
            <p className="d-text">
              {t("manifesto_d2")}
            </p>
          </li>

          <li className="demand">
            <span className="d-num">03</span>
            <p className="d-text">
              {t("manifesto_d3")}
            </p>
          </li>

          <li className="demand">
            <span className="d-num">04</span>
            <p className="d-text">
              {t("manifesto_d4")}
            </p>
          </li>

          <li className="demand">
            <span className="d-num">05</span>
            <p className="d-text">
              {t("manifesto_d5")}
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

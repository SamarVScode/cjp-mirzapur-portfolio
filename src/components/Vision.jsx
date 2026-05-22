"use client";

import React from "react";
import { visionImage } from "../lib/assets";
import { useLanguage } from "@/context/LanguageContext";

export default function Vision() {
  const { t, language } = useLanguage();

  return (
    <section className="vision" id="vision" data-screen-label="02 Vision">
      <div className="container">
        <div className="vision-grid">
          <div className="vision-side">
            <span className="eyebrow">{t("vision_eyebrow")}</span>
            <h2 className="display">
              {language === "en" ? (
                <>Our Movement's<br /><em>Vision.</em></>
              ) : (
                t("vision_title")
              )}
            </h2>
            <p className="lead">
              {t("vision_desc")}
            </p>

            <div className="mission-card">
              <span className="mc-label">{t("vision_mission_label")}</span>
              <p>
                {t("vision_mission_desc")}
              </p>
            </div>
          </div>

          <aside className="vision-image">
            <img
              loading="lazy"
              decoding="async"
              src={visionImage}
              alt="Cockroach Janta Party banner with the crowd raising fists"
            />
            <div className="vi-caption">
              <span>{t("vision_caption_title")}</span>
              <span>16 . 05 . 2026</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

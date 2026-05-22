"use client";

import React from "react";
import { visionImage } from "../lib/assets";

export default function Vision() {
  return (
    <section className="vision" id="vision" data-screen-label="02 Vision">
      <div className="container">
        <div className="vision-grid">
          <div className="vision-side">
            <span className="eyebrow">Chapter One</span>
            <h2 className="display">Our Movement's<br /><em>Vision.</em></h2>
            <p className="lead">
              We are not here to set up another PM CARES, holiday in Davos on the taxpayer's salary slip, or rebrand corruption as "strategic spending." We are here to ask — loudly, repeatedly, in writing — where the money went.
            </p>

            <div className="mission-card">
              <span className="mc-label">Our Mission</span>
              <p>
                Build a party for the young people who keep getting called lazy, chronically online, and — most recently — cockroaches. That's it. That's the mission. The rest is satire.
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
              <span>Rally · The People's Banner</span>
              <span>16 . 05 . 2026</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

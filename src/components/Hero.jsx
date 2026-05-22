"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { posterImage } from "../lib/assets";
import { fetchStats } from "../lib/firebase";

export default function Hero() {
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
            <span>Party Launch · Live since yesterday</span>
          </div>

          <h1 className="hero-title">
            Voice of the<br />
            <span className="t-saffron">Lazy</span> &amp;<br />
            <span className="t-green t-italic">Unemployed.</span>
          </h1>

          <p className="hero-sub">
            A political party for the people the system forgot to count.
            Five demands. Zero sponsors. One large, stubborn swarm.
          </p>

          <div className="hero-ctas">
            <Link href="/join" className="btn-primary">
              Join the Party
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
                <span className="btn-petition-main">Sack The Education Minister</span>
                <span className="btn-petition-sub">File the petition! →</span>
              </span>
              {signerCount !== null && (
                <span className="btn-petition-badge" id="petition-count">
                  {signerCount}
                </span>
              )}
            </a>
            <Link href="#manifesto" className="btn-link">Read the Manifesto</Link>
          </div>

          <div className="hero-strip">
            <div><strong>{stats.memberCount.toLocaleString("en-IN")}</strong><span>Swarm Members</span></div>
            <div><strong>{stats.complaintCount.toLocaleString("en-IN")}</strong><span>Complaints Filed</span></div>
          </div>
        </div>

        <div className="hero-poster">
          <div className="poster-frame">
            <div className="poster-band-top">
              <span>Official Poster · No. 001</span>
              <span>★ ★ ★</span>
            </div>
            <img
              decoding="async"
              fetchPriority="high"
              src={posterImage}
              alt="The Founder addresses the swarm at the inaugural rally"
            />
            <div className="poster-band-bottom">
              <p className="pbb-sup">Together · Resilient · Unstoppable</p>
              <p className="pbb-main">"They tried to step on us.<br />We came back."</p>
            </div>
            <span className="poster-stamp">Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}

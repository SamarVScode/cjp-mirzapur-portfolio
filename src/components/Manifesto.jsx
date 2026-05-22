"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto" data-screen-label="03 Manifesto">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow on-dark">The Five Demands</span>
          <h2 className="display on-dark">The Manifesto.</h2>
          <p className="lead on-dark">Read it once. Read it twice. Then send it to someone who needs to read it.</p>
        </header>

        <ol className="demands">
          <li className="demand">
            <span className="d-num">01</span>
            <p className="d-text">
              If the CJP comes in power, <strong>no Chief Justice shall be granted a Rajya Sabha seat</strong> as a post-retirement reward.
            </p>
          </li>

          <li className="demand">
            <span className="d-num">02</span>
            <p className="d-text">
              If any legit vote is deleted, whether in a CJP or opposition-ruled state, the <strong>CEC shall be arrested under UAPA</strong>, as taking away voting rights of citizens is no less than terrorism.
            </p>
          </li>

          <li className="demand">
            <span className="d-num">03</span>
            <p className="d-text">
              <strong>Women shall receive 50% reservation, not 33%</strong>, without increasing the strength of Parliament. Additionally, <strong>50% of all Cabinet positions</strong> shall be reserved for women.
            </p>
          </li>

          <li className="demand">
            <span className="d-num">04</span>
            <p className="d-text">
              All media houses owned by <strong>Ambani and Adani shall have their licences cancelled</strong> to make way for truly independent media. Bank accounts of Godi media anchors shall be investigated.
            </p>
          </li>

          <li className="demand">
            <span className="d-num">05</span>
            <p className="d-text">
              Any MLA or MP who defects from one party to another shall be <strong>barred from contesting elections — and from holding any public office — for a period of 20 years</strong>.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

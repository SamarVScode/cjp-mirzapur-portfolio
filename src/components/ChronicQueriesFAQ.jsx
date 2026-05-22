"use client";

import React, { useState } from "react";

export default function ChronicQueriesFAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How lazy do I need to be to qualify for CJP membership?",
      a: "If you got out of bed, navigated to this site, and read this query, you are already borderline overqualified. Do not worry—our wing provides remedial laziness classes. As long as you can delay chores and scroll memes for 4 hours daily, you qualify."
    },
    {
      q: "Where do my CJP membership fees and donations go?",
      a: "Primarily to fund high-speed mobile internet packs for our core committee so they can scroll Twitter (X) and make political memes. The remainder is strictly allocated to the 'Chai & Samosa' reserve at local tea stalls in Mirzapur."
    },
    {
      q: "Why is the party symbol a Cockroach?",
      a: "Because just like the common Indian citizen, cockroaches can survive absolutely anything—nuclear fallout, massive administrative delays, high tax slabs, and economic crushes—all while receiving zero help from the top. We are resilient, unstoppable, and extremely stubborn."
    },
    {
      q: "Does CJP have a corporate sponsor?",
      a: "No corporation has a budget lazy enough to sponsor us. We are proud to declare a total corporate funding of exactly 0.00 INR. We are funded purely by the raw, mathematical, unedited frustration of the common public."
    },
    {
      q: "Is CJP an officially registered political party?",
      a: "We would have registered it, but the registration clerk's office was on a tea break when we went, and going back there felt like too much physical labor. We'll try again next season, or probably never."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{
      background: "var(--paper)",
      padding: "80px 0 76px",
      borderBottom: "3px solid var(--ink)"
    }} id="faq" data-screen-label="05 FAQ">
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Notice Slip Header */}
        <div style={{
          background: "var(--paper-2)",
          border: "3px solid var(--ink)",
          boxShadow: "6px 6px 0 var(--ink)",
          padding: "32px 24px",
          textAlign: "center",
          marginBottom: "44px"
        }}>
          <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "4px" }}>Grievance Support</span>
          <h2 className="display" style={{ fontSize: "38px", margin: "6px 0 12px", textTransform: "uppercase" }}>
            Chronic <em>Queries</em>
          </h2>
          <p className="lead" style={{ fontSize: "14.5px", maxWidth: "600px", margin: "0 auto", color: "var(--ink-2)" }}>
            Clear answers to questions you never asked. Read carefully—we will not repeat them during our tea breaks.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "var(--paper-2)",
                  border: "3px solid var(--ink)",
                  boxShadow: "4px 4px 0 var(--ink)",
                  transition: "transform 0.2s"
                }}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    background: isOpen ? "var(--paper-3)" : "transparent",
                    transition: "background 0.2s"
                  }}
                >
                  <span style={{
                    fontFamily: "var(--condensed)",
                    fontSize: "17px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "var(--ink)",
                    paddingRight: "16px"
                  }}>
                    {idx + 1}. {faq.q}
                  </span>
                  
                  <span style={{
                    fontFamily: "var(--mono)",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: isOpen ? "var(--blood)" : "var(--ink)"
                  }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div style={{
                    padding: "20px 24px",
                    borderTop: "3px solid var(--ink)",
                    background: "var(--paper)",
                    fontSize: "14.5px",
                    lineHeight: "1.6",
                    color: "var(--ink-2)",
                    animation: "slideDown 0.2s ease-out"
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

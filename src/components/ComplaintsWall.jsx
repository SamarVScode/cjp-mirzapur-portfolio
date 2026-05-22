"use client";

import React, { useState, useEffect } from "react";
import { fetchComplaints } from "@/lib/firebase";

export default function ComplaintsWall({ refetchTrigger, limit }) {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadComplaints = async () => {
    setLoading(true);
    try {
      const data = await fetchComplaints();
      if (limit) {
        setComplaints(data.slice(0, limit));
      } else {
        setComplaints(data);
      }
    } catch (err) {
      console.error("Error loading complaints:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, [refetchTrigger]);

  // Mask name: Show first letter, mask everything else (e.g. G******)
  const maskName = (name) => {
    if (!name) return "ANONYMOUS SWARMER";
    const trimmed = name.trim().toUpperCase();
    if (trimmed.length === 0) return "ANONYMOUS SWARMER";
    if (trimmed.length <= 2) return `${trimmed.charAt(0)}*`;
    const firstLetter = trimmed.charAt(0);
    return `${firstLetter}*****`;
  };

  // Human-readable date converter
  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "JUST NOW";
    }
  };

  // Assign distinct stickynote colors and rotations
  const getColorClass = (idx) => {
    const classes = ["color-1", "color-2", "color-3", "color-4", "color-5"];
    return classes[idx % classes.length];
  };

  const getRotationClass = (idx) => {
    const classes = ["rotate-1", "rotate-2", "rotate-3", "rotate-4"];
    return classes[idx % classes.length];
  };

  return (
    <div className="bulletin-board" id="swarm-wall" style={{ animation: "fadeIn 0.5s ease-out" }}>
      <div className="board-title-box">
        <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "4px" }}>Mirzapur Division Bulletin</span>
        <h3 className="display" style={{ fontSize: "36px", margin: "6px 0 12px" }}>Swarm Wall of <em>Complaints</em></h3>
        <p className="lead" style={{ fontSize: "15px", maxWidth: "680px", margin: "0 auto", color: "var(--ink-2)" }}>
          Every grievance is filed anonymously. Below lies the raw, unedited, mathematical frustration of the citizens of Mirzapur against administrative lethargy.
        </p>
      </div>

      <div className="board-grid">
        {loading ? (
          <div className="board-loading">
            <span className="live-dot" style={{ display: "inline-block", marginRight: "10px" }}></span>
            LOADING VAULT ENTRIES...
          </div>
        ) : complaints.length === 0 ? (
          <div className="board-empty">
            THE SWARM IS SILENT. NO COMPLAINTS FILED YET. BE THE FIRST TO VENT!
          </div>
        ) : (
          complaints.map((c, idx) => (
            <div
              key={c.id || idx}
              className={`complaint-card ${getRotationClass(idx)} ${getColorClass(idx)}`}
            >
              <div className="card-pin">📌</div>
              
              <div className="card-meta">
                <span className="card-author">{maskName(c.name)}</span>
                <span className="card-date">{formatDate(c.createdAt)}</span>
              </div>
              
              <p className="card-text">"{c.complaint}"</p>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", borderTop: "1px dashed rgba(26,17,8,0.1)", paddingTop: "8px" }}>
                <span className="card-stamp">CJP APPROVED</span>
                {c.ticketId && <span className="card-ticket-id">{c.ticketId}</span>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

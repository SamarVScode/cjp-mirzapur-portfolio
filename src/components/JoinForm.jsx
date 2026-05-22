"use client";

import React, { useState, useRef, useEffect } from "react";
import { saveMemberToDb } from "../lib/firebase";

export default function JoinForm({ onMemberAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [memberInfo, setMemberInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMemberId = () => {
    const year = 2026;
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // 4 random digits
    return `CJP-M-${year}-${randomDigits}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid Gmail / Email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    
    setIsSubmitting(true);
    const generatedId = generateMemberId();
    
    const memberPayload = {
      name: formData.name.trim().toUpperCase(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      memberId: generatedId
    };
    
    const result = await saveMemberToDb(memberPayload);
    
    if (result.success) {
      setMemberInfo(memberPayload);
      setIsSuccess(true);
      if (onMemberAdded) {
        onMemberAdded();
      }
    } else {
      setErrorMessage("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  // Draw the Member Card Banner on Canvas
  useEffect(() => {
    if (isSuccess && memberInfo && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      
      // Canvas dimensions 1080x1080 (1:1 Ratio high-res PNG)
      canvas.width = 1080;
      canvas.height = 1080;
      
      // 1. Draw Background
      ctx.fillStyle = "#FDF5E6"; // Cream background
      ctx.fillRect(0, 0, 1080, 1080);
      
      // 2. Draw Retro Paper Grain Texture Overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      for (let i = 0; i < 1080; i += 4) {
        for (let j = 0; j < 1080; j += 4) {
          if (Math.random() > 0.5) {
            ctx.fillRect(i, j, 2, 2);
          }
        }
      }
      
      // 3. Draw Outer Thick Brutalist Border
      ctx.strokeStyle = "#000000"; // black
      ctx.lineWidth = 32;
      ctx.strokeRect(16, 16, 1048, 1048);
      
      // 4. Header Orange Banner Section
      ctx.fillStyle = "#F58220"; // orange
      ctx.fillRect(32, 32, 1016, 200);
      
      ctx.fillStyle = "#000000"; // divider line
      ctx.fillRect(32, 232, 1016, 6);
      
      // Header Text
      ctx.fillStyle = "#000000"; // black text
      ctx.font = "bold 82px var(--font-condensed), 'Oswald', sans-serif";
      ctx.letterSpacing = "2px";
      ctx.textAlign = "center";
      ctx.fillText("COCKROACH JANTA PARTY", 540, 130);
      
      ctx.font = "bold 32px var(--font-mono), monospace";
      ctx.letterSpacing = "8px";
      ctx.fillText("OFFICIAL SWARM CARD", 540, 190);
      
      // 5. Draw Vertical Divider
      ctx.fillStyle = "#000000";
      ctx.fillRect(480, 238, 4, 614);
      
      // 6. Draw Cockroach Emblem (Left Side)
      const cx = 256;
      const cy = 540;
      
      // Outer logo circle
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.stroke();
      
      // Cockroach body illustration
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      
      // Antennae
      ctx.beginPath();
      ctx.moveTo(cx - 10, cy - 80);
      ctx.quadraticCurveTo(cx - 40, cy - 120, cx - 60, cy - 150);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(cx + 10, cy - 80);
      ctx.quadraticCurveTo(cx + 40, cy - 120, cx + 60, cy - 150);
      ctx.stroke();
      
      // Legs
      ctx.lineWidth = 4;
      // Left legs
      ctx.beginPath(); ctx.moveTo(cx - 20, cy - 30); ctx.lineTo(cx - 70, cy - 40); ctx.lineTo(cx - 90, cy - 70); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 25, cy + 10); ctx.lineTo(cx - 80, cy + 10); ctx.lineTo(cx - 100, cy);   ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 20, cy + 50); ctx.lineTo(cx - 70, cy + 60); ctx.lineTo(cx - 90, cy + 80); ctx.stroke();
      // Right legs
      ctx.beginPath(); ctx.moveTo(cx + 20, cy - 30); ctx.lineTo(cx + 70, cy - 40); ctx.lineTo(cx + 90, cy - 70); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 25, cy + 10); ctx.lineTo(cx + 80, cy + 10); ctx.lineTo(cx + 100, cy);   ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 20, cy + 50); ctx.lineTo(cx + 70, cy + 60); ctx.lineTo(cx + 90, cy + 80); ctx.stroke();
      
      // Body Core
      ctx.fillStyle = "#000000";
      // Head
      ctx.beginPath(); ctx.ellipse(cx, cy - 70, 22, 18, 0, 0, Math.PI * 2); ctx.fill();
      // Abdomen
      ctx.beginPath(); ctx.ellipse(cx, cy, 40, 65, 0, 0, Math.PI * 2); ctx.fill();
      
      // Wing highlights
      ctx.fillStyle = "#F58220";
      ctx.beginPath(); ctx.ellipse(cx - 16, cy + 5, 14, 52, 0.05, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx + 16, cy + 5, 14, 52, -0.05, 0, Math.PI * 2); ctx.fill();
      
      // 7. Render Member Details (Right Side)
      ctx.textAlign = "left";
      ctx.fillStyle = "#000000";
      
      const detailsX = 530;
      
      // Label
      ctx.font = "bold 20px var(--font-mono), monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText("MEMBER NAME:", detailsX, 350);
      
      // Name
      ctx.font = "bold 64px var(--font-condensed), 'Oswald', sans-serif";
      ctx.fillText(memberInfo.name, detailsX, 420);
      
      // ID Label
      ctx.font = "bold 20px var(--font-mono), monospace";
      ctx.fillText("UNIQUE SWARM ID:", detailsX, 510);
      
      // ID Box
      ctx.fillStyle = "#000000";
      ctx.fillRect(detailsX, 530, 480, 100);
      
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 42px var(--font-mono), monospace";
      ctx.textAlign = "center";
      ctx.fillText(memberInfo.memberId, detailsX + 240, 595);
      
      // ── 7.5. DRAW STAMP ────────────────────────────────────────
      ctx.save();
      ctx.translate(detailsX + 300, 740);
      ctx.rotate(-15 * Math.PI / 180);
      
      ctx.strokeStyle = "rgba(165, 42, 42, 0.8)"; // red
      ctx.lineWidth = 6;
      ctx.beginPath(); ctx.arc(0, 0, 90, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, 80, 0, Math.PI * 2); ctx.stroke();
      
      ctx.fillStyle = "rgba(165, 42, 42, 0.8)";
      ctx.textAlign = "center";
      ctx.font = "bold 14px var(--font-mono), monospace";
      ctx.fillText("MIRZAPUR DISTRICT WING", 0, -40);
      ctx.font = "bold 32px var(--font-condensed), 'Oswald', sans-serif";
      ctx.fillText("OFFICIAL", 0, 10);
      ctx.font = "bold 14px var(--font-mono), monospace";
      ctx.fillText("★ CERTIFIED ★", 0, 45);
      
      // Distress effect
      ctx.fillStyle = "#FDF5E6";
      for (let i = 0; i < 30; i++) {
        const rx = -100 + Math.random() * 200;
        const ry = -100 + Math.random() * 200;
        if (rx*rx + ry*ry < 100*100) {
          ctx.fillRect(rx, ry, 3, 3);
        }
      }
      ctx.restore();

      // ── 8. Green bottom bar ────────────────────────────────────
      const barY = 852;
      ctx.fillStyle = "#000000";
      ctx.fillRect(32, barY, 1016, 8);

      ctx.fillStyle = "#0D6B32"; // green
      ctx.fillRect(32, barY + 8, 1016, 188);

      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.font = "bold 68px var(--font-condensed), 'Oswald', sans-serif";
      ctx.fillText("YOU CANNOT SQUASH A SWARM", 540, barY + 120);
    }
  }, [isSuccess, memberInfo]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    
    // Custom formatted filename matching name and ID
    const sanitizedName = memberInfo.name.toLowerCase().replace(/\s+/g, "_");
    link.download = `cjp_mirzapur_member_${sanitizedName}_${memberInfo.memberId}.png`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "" });
    setIsSuccess(false);
    setMemberInfo(null);
    setErrorMessage("");
  };

  if (isSuccess && memberInfo) {
    return (
      <div className="contact-form" style={{ gap: "26px", animation: "fadeIn 0.4s ease-out" }}>
        <div style={{ textAlign: "center", borderBottom: "1px solid rgba(26, 17, 8, 0.15)", paddingBottom: "18px" }}>
          <span className="eyebrow" style={{ marginBottom: "8px", color: "var(--green)" }}>Success! Registration Complete</span>
          <h3 className="display" style={{ fontSize: "28px", lineHeight: "1.1", margin: "8px 0" }}>Welcome to the <em>Swarm!</em></h3>
          <p className="lead" style={{ fontSize: "14.5px", margin: "8px auto 0", maxWidth: "420px", color: "var(--ink-2)" }}>
            Your details are successfully stored. Your custom 1:1 Swarm Member Card has been generated below.
          </p>
        </div>

        {/* Dynamic Canvas preview rendered reactively */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div style={{ 
            width: "100%", 
            maxWidth: "480px", 
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12), 8px 8px 0px var(--ink)",
            border: "3px solid var(--ink)",
            background: "#F4EBD7",
            position: "relative",
            overflow: "hidden",
            lineHeight: "0"
          }}>
            <canvas 
              ref={canvasRef} 
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                aspectRatio: "1/1"
              }} 
            />
          </div>

          <div style={{ display: "flex", gap: "16px", width: "100%", maxWidth: "480px" }}>
            <button 
              onClick={handleDownload} 
              className="btn-primary" 
              style={{ flex: "1", justifyContent: "center", display: "inline-flex" }}
            >
              Download Card (PNG)
              <span className="arr">↓</span>
            </button>
            <button 
              onClick={handleReset} 
              className="btn-link"
              style={{ borderBottom: "2px dashed var(--ink)", paddingBottom: "2px", fontWeight: "600" }}
            >
              Register Another Member
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" style={{ animation: "fadeIn 0.3s ease-out" }}>
      <div style={{ borderBottom: "1px solid rgba(26, 17, 8, 0.12)", paddingBottom: "14px", marginBottom: "4px" }}>
        <span className="eyebrow" style={{ color: "var(--saffron-deep)" }}>Join The Swarm</span>
        <h3 className="display" style={{ fontSize: "28px", marginTop: "4px" }}>Request swarmer status.</h3>
      </div>

      {errorMessage && (
        <div style={{ 
          background: "rgba(139, 26, 26, 0.08)", 
          color: "var(--blood)", 
          border: "2px solid var(--blood)",
          padding: "10px 14px",
          fontFamily: "var(--mono)",
          fontSize: "12px",
          letterSpacing: "0.5px"
        }}>
          ⚠ ERROR: {errorMessage}
        </div>
      )}

      <label>
        <span>Full Name / नाम *</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Abhijeet Dipke"
          disabled={isSubmitting}
          required
        />
      </label>

      <div className="row-2">
        <label>
          <span>Gmail Address *</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. swarm@gmail.com"
            disabled={isSubmitting}
            required
          />
        </label>

        <label>
          <span>Phone / मोबाइल नंबर *</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            maxLength="14"
            disabled={isSubmitting}
            required
          />
        </label>
      </div>

      <button 
        type="submit" 
        className="btn-primary" 
        style={{ marginTop: "12px", width: "100%", justifyContent: "center" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "STORING RECORD & GENERATING..." : "GENERATE MEMBER CARD & REGISTER"}
        <span className="arr">→</span>
      </button>

      <p className="form-fine" style={{ marginTop: "4px", fontSize: "11px", color: "var(--ink-3)" }}>
        * Fields are strictly required. By submitting this form, you certify under oath that you are indeed lazy, chronically online, and disgruntled. LocalStorage fallback ensures 100% server-offline availability.
      </p>
    </form>
  );
}

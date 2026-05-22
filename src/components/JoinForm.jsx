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
      ctx.fillStyle = "#F4EBD7"; // retro paper color
      ctx.fillRect(0, 0, 1080, 1080);
      
      // 2. Draw Retro Paper Grain Texture Overlay
      ctx.fillStyle = "rgba(26, 17, 8, 0.03)";
      for (let i = 0; i < 1080; i += 4) {
        for (let j = 0; j < 1080; j += 4) {
          if (Math.random() > 0.5) {
            ctx.fillRect(i, j, 2, 2);
          }
        }
      }
      
      // Draw grid lines for brutalist architectural grid
      ctx.strokeStyle = "rgba(26, 17, 8, 0.06)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < 1080; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 1080);
        ctx.stroke();
      }
      for (let y = 0; y < 1080; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1080, y);
        ctx.stroke();
      }
      
      // 3. Draw Outer Thick Brutalist Border
      ctx.strokeStyle = "#1A1108"; // deep ink color
      ctx.lineWidth = 16;
      ctx.strokeRect(8, 8, 1064, 1064);
      
      // Inner thin border
      ctx.strokeStyle = "#1A1108";
      ctx.lineWidth = 3;
      ctx.strokeRect(28, 28, 1024, 1024);
      
      // 4. Header Saffron Banner Section
      ctx.fillStyle = "#B84915"; // saffron deep
      ctx.fillRect(30, 30, 1020, 130);
      
      ctx.fillStyle = "#1A1108"; // divider line
      ctx.fillRect(30, 160, 1020, 4);
      
      // Header Text
      ctx.fillStyle = "#F4EBD7"; // paper color text
      ctx.font = "bold 56px var(--font-condensed), 'Oswald', 'Arial Narrow', sans-serif";
      ctx.letterSpacing = "6px";
      ctx.textAlign = "center";
      ctx.fillText("COCKROACH JANTA PARTY", 540, 92);
      
      ctx.font = "bold 24px var(--font-mono), 'JetBrains Mono', monospace";
      ctx.letterSpacing = "4px";
      ctx.fillStyle = "#F0823A"; // saffron active accent
      ctx.fillText("★ MIRZAPUR DISTRICT WING · OFFICIAL SWARM CARD ★", 540, 132);
      
      // 5. Draw Vertical Inset Divider between Illustration and Details
      ctx.fillStyle = "#1A1108";
      ctx.fillRect(450, 164, 4, 766);
      
      // 6. Draw Vector Cockroach Emblem (Left Side)
      const cx = 240;
      const cy = 547;
      
      // Dashed circle around logo
      ctx.strokeStyle = "#1A1108";
      ctx.lineWidth = 3;
      ctx.setLineDash([12, 12]);
      ctx.beginPath();
      ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]); // Reset dashed line
      
      // Solid outer logo circle
      ctx.strokeStyle = "#E0651E"; // saffron border
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.strokeStyle = "#1F5A2E"; // green inner border
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, 132, 0, Math.PI * 2);
      ctx.stroke();
      
      // Cockroach body illustration drawn inside the circle
      // Antennae
      ctx.strokeStyle = "#1A1108";
      ctx.lineWidth = 4.5;
      ctx.lineCap = "round";
      
      // Left Antenna
      ctx.beginPath();
      ctx.moveTo(cx - 8, cy - 64);
      ctx.quadraticCurveTo(cx - 36, cy - 100, cx - 48, cy - 120);
      ctx.stroke();
      
      // Right Antenna
      ctx.beginPath();
      ctx.moveTo(cx + 8, cy - 64);
      ctx.quadraticCurveTo(cx + 36, cy - 100, cx + 48, cy - 120);
      ctx.stroke();
      
      // Legs
      ctx.lineWidth = 3.5;
      // Left legs
      ctx.beginPath(); ctx.moveTo(cx - 16, cy - 20); ctx.lineTo(cx - 48, cy - 28); ctx.lineTo(cx - 64, cy - 44); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 20, cy + 8);  ctx.lineTo(cx - 56, cy + 8);  ctx.lineTo(cx - 72, cy);   ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 16, cy + 36); ctx.lineTo(cx - 48, cy + 44); ctx.lineTo(cx - 60, cy + 56); ctx.stroke();
      // Right legs
      ctx.beginPath(); ctx.moveTo(cx + 16, cy - 20); ctx.lineTo(cx + 48, cy - 28); ctx.lineTo(cx + 64, cy - 44); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 20, cy + 8);  ctx.lineTo(cx + 56, cy + 8);  ctx.lineTo(cx + 72, cy);   ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 16, cy + 36); ctx.lineTo(cx + 48, cy + 44); ctx.lineTo(cx + 60, cy + 56); ctx.stroke();
      
      // Body Core
      ctx.fillStyle = "#1A1108";
      // Thorax (head)
      ctx.beginPath();
      ctx.ellipse(cx, cy - 54, 18, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Abdomen
      ctx.beginPath();
      ctx.ellipse(cx, cy, 34, 52, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Wing highlights
      ctx.fillStyle = "#E0651E";
      ctx.beginPath();
      ctx.ellipse(cx - 14, cy + 4, 12, 42, 0.05, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.ellipse(cx + 14, cy + 4, 12, 42, -0.05, 0, Math.PI * 2);
      ctx.fill();
      
      // Eyes / Details
      ctx.fillStyle = "#F4EBD7";
      ctx.beginPath(); ctx.arc(cx - 7, cy - 58, 3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 7, cy - 58, 3, 0, Math.PI * 2); ctx.fill();
      
      // Badge text inside emblem
      ctx.fillStyle = "#1A1108";
      ctx.fillRect(cx - 70, cy + 78, 140, 28);
      ctx.fillStyle = "#F4EBD7";
      ctx.font = "bold 13px var(--font-mono), monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText("SWARM HQ", cx, cy + 97);
      
      // 7. Render Member Details (Right Side)
      ctx.textAlign = "left";
      ctx.fillStyle = "#1A1108";
      
      const detailsX = 490;
      
      // Card Title Header
      ctx.font = "bold 32px var(--font-condensed), 'Oswald', sans-serif";
      ctx.letterSpacing = "4px";
      ctx.fillStyle = "#1F5A2E"; // green accent
      ctx.fillText("OFFICIAL LAZY MEMBERSHIP RECORD", detailsX, 220);
      
      // Inset horizontal divider
      ctx.fillStyle = "rgba(26, 17, 8, 0.15)";
      ctx.fillRect(detailsX, 240, 520, 2);
      
      // Helper function to draw dynamic record fields
      const drawField = (label, value, startY, isBoldVal = false) => {
        ctx.fillStyle = "#6A5440"; // brown/ink-3 labels
        ctx.font = "bold 13px var(--font-mono), 'JetBrains Mono', monospace";
        ctx.letterSpacing = "2px";
        ctx.fillText(label, detailsX, startY);
        
        ctx.fillStyle = "#1A1108"; // main ink
        if (isBoldVal) {
          ctx.font = "bold 36px var(--font-condensed), 'Oswald', sans-serif";
          ctx.letterSpacing = "1.5px";
        } else {
          ctx.font = "500 21px var(--font-sans), 'Inter', sans-serif";
          ctx.letterSpacing = "0px";
        }
        ctx.fillText(value, detailsX, startY + 36);
      };
      
      drawField("MEMBER NAME (सत्यवादी)", memberInfo.name, 285, true);
      
      // Draw Member ID Box (highly highlighted)
      ctx.fillStyle = "#6A5440";
      ctx.font = "bold 13px var(--font-mono), 'JetBrains Mono', monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText("UNIQUE REGISTERED SWARM ID", detailsX, 425);
      
      // Draw a brutalist box for the ID
      ctx.fillStyle = "#1A1108";
      ctx.fillRect(detailsX, 441, 520, 72);
      ctx.strokeStyle = "#E0651E";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(detailsX + 4, 445, 512, 64);
      
      ctx.fillStyle = "#F4EBD7";
      ctx.font = "bold 32px var(--font-mono), 'JetBrains Mono', monospace";
      ctx.letterSpacing = "3px";
      ctx.textAlign = "center";
      ctx.fillText(memberInfo.memberId, detailsX + 260, 488);
      
      // ============ 7.5. DRAW OFFICIAL DISTRESSED MIRZAPUR RUBBER STAMP ============
      ctx.save();
      ctx.translate(detailsX + 260, 720);
      ctx.rotate(-14 * Math.PI / 180); // slight left tilt for realistic hand-stamp look
      
      // Outer stamp double rings
      ctx.strokeStyle = "rgba(139, 26, 26, 0.82)"; // rich red ink
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.arc(0, 0, 75, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 67, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inside details text
      ctx.fillStyle = "rgba(139, 26, 26, 0.82)";
      ctx.textAlign = "center";
      
      ctx.font = "bold 11px var(--font-mono), monospace";
      ctx.letterSpacing = "1px";
      ctx.fillText("DISTRICT WING", 0, -32);
      
      ctx.font = "bold 26px var(--font-condensed), 'Oswald', sans-serif";
      ctx.letterSpacing = "2px";
      ctx.fillText("MIRZAPUR", 0, 3);
      
      ctx.font = "bold 12px var(--font-mono), monospace";
      ctx.letterSpacing = "1.5px";
      ctx.fillText("★ OFFICIAL ★", 0, 33);
      
      // Draw distressing ink artifacts (retro stamp speckles)
      ctx.fillStyle = "#F4EBD7"; // matches card paper color to act as stamp distresser
      for (let i = 0; i < 24; i++) {
        const rx = -72 + Math.random() * 144;
        const ry = -72 + Math.random() * 144;
        if (rx*rx + ry*ry < 72*72) {
          ctx.fillRect(rx, ry, 2 + Math.random() * 3, 2 + Math.random() * 3);
        }
      }
      
      ctx.restore();
      
      // Signatures
      ctx.textAlign = "left";
      ctx.fillStyle = "#6A5440";
      ctx.font = "8px var(--font-mono), monospace";
      ctx.fillText("CONVENOR SIGNATURE", detailsX + 340, 874);
      ctx.fillStyle = "#1A1108";
      ctx.font = "12px var(--font-mono), monospace";
      ctx.fillText("Abhijeet Dipke", detailsX + 340, 862);
      
      // 8. Bottom Green Slogan Section
      ctx.fillStyle = "#1A1108"; // divider line
      ctx.fillRect(30, 930, 1020, 4);
      
      ctx.fillStyle = "#1F5A2E"; // green background
      ctx.fillRect(30, 934, 1020, 116);
      
      // Bottom Slogan text
      ctx.fillStyle = "#F4EBD7";
      ctx.textAlign = "center";
      ctx.font = "bold 38px var(--font-condensed), 'Oswald', sans-serif";
      ctx.letterSpacing = "4px";
      ctx.fillText("YOU CANNOT SQUASH A SWARM. WE WILL SURVIVE.", 540, 986);
      
      ctx.font = "bold 15px var(--font-mono), 'JetBrains Mono', monospace";
      ctx.fillStyle = "#2D7A45"; // bright green accent
      ctx.letterSpacing = "6px";
      ctx.fillText("कॉकरोच जनता पार्टी · मिर्ज़ापुर · EST. 2026", 540, 1024);
    }
  }, [isSuccess, memberInfo]);

  const handleDownload = () => {
    if (!canvasRef.current || !memberInfo) return;
    
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

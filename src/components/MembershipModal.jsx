"use client";

import React, { useState, useRef } from "react";
import { saveMember } from "@/lib/firebase";

export default function MembershipModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = Form, 2 = Card Generated
  const [formData, setFormData] = useState({ name: "", gmail: "", phone: "" });
  const [memberId, setMemberId] = useState("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.gmail || !formData.phone) return;

    setLoading(true);
    try {
      const generatedId = await saveMember(formData.name, formData.gmail, formData.phone);
      setMemberId(generatedId);
      setStep(2);
      // Trigger canvas drawing on next tick
      setTimeout(() => drawCard(formData.name, generatedId), 100);
    } catch (err) {
      console.error("Error creating membership:", err);
    } finally {
      setLoading(false);
    }
  };

  // Render Card layout onto standard HTML5 Canvas for download
  const drawCard = (name, mId) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    // Set Dimensions (Standard ID card ratio: 450x600)
    canvas.width = 450;
    canvas.height = 600;

    // 1. Draw Paper background
    ctx.fillStyle = "#F4EBD7";
    ctx.fillRect(0, 0, 450, 600);

    // 2. Draw border
    ctx.strokeStyle = "#1A1108";
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, 440, 590);

    // 3. Header stripe (Saffron)
    ctx.fillStyle = "#E0651E";
    ctx.fillRect(10, 10, 430, 120);
    ctx.fillStyle = "#1A1108";
    ctx.fillRect(10, 126, 430, 6); // border below header stripe

    // 4. Logo circle
    ctx.beginPath();
    ctx.arc(225, 200, 50, 0, Math.PI * 2);
    ctx.fillStyle = "#1A1108";
    ctx.fill();

    // Draw little bug eyes inside circle for branding
    ctx.fillStyle = "#F4EBD7";
    ctx.beginPath();
    ctx.arc(210, 195, 4, 0, Math.PI * 2);
    ctx.arc(240, 195, 4, 0, Math.PI * 2);
    ctx.fill();

    // Antennae on logo
    ctx.strokeStyle = "#F4EBD7";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(215, 180);
    ctx.quadraticCurveTo(205, 160, 200, 150);
    ctx.moveTo(235, 180);
    ctx.quadraticCurveTo(245, 160, 250, 150);
    ctx.stroke();

    // 5. Header text (Bowlby style)
    ctx.fillStyle = "#F4EBD7";
    ctx.textAlign = "center";
    ctx.font = "bold 28px 'Impact', sans-serif";
    ctx.fillText("COCKROACH JANTA PARTY", 225, 58);
    ctx.font = "bold 13px 'Courier New', monospace";
    ctx.fillText("OFFICIAL DISTRICT MEMBERSHIP • MIRZAPUR", 225, 96);

    // 6. Member ID section
    ctx.fillStyle = "#8B1A1A";
    ctx.font = "bold 15px 'Courier New', monospace";
    ctx.fillText(`ID: ${mId}`, 225, 290);

    // 7. Member Name
    ctx.fillStyle = "#1A1108";
    ctx.font = "bold 32px 'Impact', sans-serif";
    ctx.fillText(name.toUpperCase(), 225, 360);

    // Divider line
    ctx.strokeStyle = "#1A1108";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 390);
    ctx.lineTo(370, 390);
    ctx.stroke();

    // 8. Satirical Designation
    ctx.fillStyle = "#1F5A2E";
    ctx.font = "italic 18px 'Georgia', serif";
    ctx.fillText("Chief Patron of Purvanchal Procrastination", 225, 430);

    // 9. Footer stamp
    ctx.fillStyle = "#1A1108";
    ctx.font = "bold 11px 'Courier New', monospace";
    ctx.fillText("★ REGISTERED SWARM MEMBER ★", 225, 510);
    ctx.font = "9px 'Courier New', monospace";
    ctx.fillText("CJP Swarm HQ, Mirzapur, Uttar Pradesh", 225, 535);

    // Saffron/Green dual stripes at bottom
    ctx.fillStyle = "#E0651E";
    ctx.fillRect(10, 560, 215, 30);
    ctx.fillStyle = "#1F5A2E";
    ctx.fillRect(225, 560, 215, 30);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `CJP_Mirzapur_Member_${formData.name.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const resetForm = () => {
    setFormData({ name: "", gmail: "", phone: "" });
    setStep(1);
    setMemberId("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        {/* CLOSE BUTTON */}
        <button onClick={resetForm} className="modal-close">×</button>

        {step === 1 ? (
          /* ============ STEP 1: REGISTRATION FORM ============ */
          <div className="modal-body">
            <h2 className="modal-title">Join the Swarm!</h2>
            <p className="modal-subtitle">
              Enter your details to generate your official, downloadable Mirzapur Cockroach Janta Party membership card.
            </p>

            <form onSubmit={handleSubmit} className="brutalist-form">
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Munna Bhaiya"
                  maxLength={24}
                />
              </label>

              <label>
                <span>Gmail Address</span>
                <input
                  type="email"
                  name="gmail"
                  value={formData.gmail}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. munna@gmail.com"
                />
              </label>

              <label>
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 98765XXXXX"
                  maxLength={15}
                />
              </label>

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                {loading ? "Registering..." : "Generate Membership Card →"}
              </button>
            </form>
          </div>
        ) : (
          /* ============ STEP 2: MEMBERSHIP CARD DOWNLOAD ============ */
          <div className="modal-body text-center flex flex-col items-center">
            <h2 className="modal-title">Registration Successful!</h2>
            <p className="modal-subtitle mb-4">
              Here is your official Swarm Card. Download it, print it, and show it at the local loom tea stalls.
            </p>

            {/* Hidden Canvas used for generating download image */}
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

            {/* Visual Card Replica with rich HTML/CSS styling */}
            <div className="visual-card">
              <div className="card-top">
                <h3>COCKROACH JANTA PARTY</h3>
                <span>OFFICIAL DISTRICT MEMBERSHIP • MIRZAPUR</span>
              </div>
              <div className="card-body">
                <div className="card-logo">🐞</div>
                <div className="card-id">{memberId}</div>
                <div className="card-name">{formData.name}</div>
                <div className="card-divider"></div>
                <div className="card-designation">
                  Chief Patron of Purvanchal Procrastination
                </div>
              </div>
              <div className="card-foot">
                <span>★ REGISTERED SWARM MEMBER ★</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button onClick={handleDownload} className="btn-primary">
                Download Card (.PNG)
              </button>
              <button onClick={resetForm} className="btn-link">
                Close Modal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { saveMemberToDb } from "../lib/firebase";
import { CardCanvas } from "./CardCanvas";
import { useLanguage } from "@/context/LanguageContext";

export default function JoinForm({ onMemberAdded }) {
  const { t, language } = useLanguage();
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
    const randomDigits = Math.floor(1000 + Math.random() * 9000); 
    return `CJP-M-${year}-${randomDigits}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!formData.name.trim()) {
      setErrorMessage(t("form_error_name"));
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage(t("form_error_email"));
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage(t("form_error_phone"));
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
      setErrorMessage(t("form_error_submit"));
    }
    setIsSubmitting(false);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
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
      <div key="success-card" className="contact-form" style={{ 
        gap: "26px", opacity: 0, animation: "fadeIn 0.6s ease-out forwards", position: "relative", zIndex: 1,
        width: "100%", boxSizing: "border-box"
      }}>
        <div style={{ textAlign: "center", borderBottom: "1px solid rgba(26, 17, 8, 0.15)", paddingBottom: "18px" }}>
          <span className="eyebrow" style={{ marginBottom: "8px", color: "var(--green)" }}>{t("join_success_eyebrow")}</span>
          <h3 className="display" style={{ fontSize: "28px", lineHeight: "1.1", margin: "8px 0" }}>
            {language === "en" ? (
              <>Welcome to the <em>Swarm!</em></>
            ) : (
              t("join_success_title")
            )}
          </h3>
          <p className="lead" style={{ fontSize: "14.5px", margin: "8px auto 0", maxWidth: "420px", color: "var(--ink-2)" }}>
            {t("join_success_desc")}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
          <CardCanvas
            memberName={memberInfo.name}
            memberId={memberInfo.memberId}
            onCanvasRef={(el) => {
              canvasRef.current = el;
            }}
          />
          <div className="success-actions" style={{ display: "flex", gap: "16px", width: "100%", maxWidth: "480px" }}>
            <button onClick={handleDownload} className="btn-primary" style={{ flex: "1", justifyContent: "center", display: "inline-flex" }}>
              {t("join_success_btn")} <span className="arr">↓</span>
            </button>
            <button onClick={handleReset} className="btn-link" style={{ borderBottom: "2px dashed var(--ink)", paddingBottom: "2px", fontWeight: "600" }}>
              {t("join_success_another")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form key="join-form" onSubmit={handleSubmit} className="contact-form" style={{ 
      opacity: 0, animation: "fadeIn 0.6s ease-out forwards", position: "relative", zIndex: 1
    }}>
      <div style={{ borderBottom: "1px solid rgba(26, 17, 8, 0.12)", paddingBottom: "14px", marginBottom: "4px" }}>
        <span className="eyebrow" style={{ color: "var(--saffron-deep)" }}>
          {language === "en" ? "Join The Swarm" : "झुंड में शामिल हों"}
        </span>
        <h3 className="display" style={{ fontSize: "28px", marginTop: "4px" }}>
          {t("join_form_title")}
        </h3>
      </div>
      {errorMessage && (
        <div style={{ background: "rgba(139, 26, 26, 0.08)", color: "var(--blood)", border: "2px solid var(--blood)", padding: "10px 14px", fontFamily: "var(--mono)", fontSize: "12px" }}>
          ⚠ ERROR: {errorMessage}
        </div>
      )}
      <label>
        <span>{language === "en" ? "Full Name / नाम *" : "आपका पूरा नाम *"}</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t("form_placeholder_name")} disabled={isSubmitting} required />
      </label>
      <div className="row-2">
        <label>
          <span>{language === "en" ? "Gmail Address *" : "जीमेल पता *"}</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t("form_placeholder_email")} disabled={isSubmitting} required />
        </label>
        <label>
          <span>{language === "en" ? "Phone / मोबाइल नंबर *" : "मोबाइल नंबर *"}</span>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t("form_placeholder_phone")} maxLength="14" disabled={isSubmitting} required />
        </label>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: "12px", width: "100%", justifyContent: "center" }} disabled={isSubmitting}>
        {isSubmitting ? t("join_form_btn_loading") : t("join_form_btn")}
        <span className="arr">→</span>
      </button>
      <p className="form-fine" style={{ marginTop: "4px", fontSize: "11px", color: "var(--ink-3)" }}>
        {t("join_form_fine")}
      </p>
    </form>
  );
}

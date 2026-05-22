"use client";

import React, { useState } from "react";
import { saveComplaintToDb } from "../lib/firebase";
import { useLanguage } from "@/context/LanguageContext";

export default function ComplaintForm({ onComplaintAdded }) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [complaintTicket, setComplaintTicket] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateTicketId = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    return `CJP-COMP-2026-${randomDigits}`;
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
    if (!formData.complaint.trim() || formData.complaint.trim().length < 10) {
      setErrorMessage(t("form_error_complaint"));
      return;
    }

    setIsSubmitting(true);
    const generatedId = generateTicketId();

    const complaintPayload = {
      name: formData.name.trim().toUpperCase(),
      email: formData.email.trim(),
      complaint: formData.complaint.trim(),
      ticketId: generatedId
    };

    const result = await saveComplaintToDb(complaintPayload);

    if (result.success) {
      setComplaintTicket(complaintPayload);
      setIsSuccess(true);
      if (typeof onComplaintAdded === "function") {
        onComplaintAdded();
      }
    } else {
      setErrorMessage(t("form_error_submit"));
    }
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", complaint: "" });
    setIsSuccess(false);
    setComplaintTicket(null);
    setErrorMessage("");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  if (isSuccess && complaintTicket) {
    return (
      <div className="contact-form" style={{ gap: "24px", animation: "fadeIn 0.4s ease-out" }}>
        <div style={{ textAlign: "center", borderBottom: "1px dashed rgba(26, 17, 8, 0.2)", paddingBottom: "16px" }}>
          <span className="eyebrow" style={{ color: "var(--blood)", marginBottom: "4px" }}>{t("receipt_eyebrow")}</span>
          <h3 className="display" style={{ fontSize: "28px", margin: "4px 0" }}>
            {language === "en" ? (
              <>Frustration <em>Logged.</em></>
            ) : (
              t("receipt_title")
            )}
          </h3>
          <p className="lead" style={{ fontSize: "14px", margin: "6px 0 0", color: "var(--ink-2)" }}>
            {t("receipt_desc")}
          </p>
        </div>

        {/* ============ Retro Ticket Receipt ============ */}
        <div style={{ 
          background: "#EADFC4", // paper-2 accent background
          borderTop: "3px dashed var(--ink)",
          borderBottom: "3px dashed var(--ink)",
          padding: "24px 20px",
          fontFamily: "var(--mono), 'JetBrains Mono', monospace",
          color: "var(--ink)",
          fontSize: "13px",
          lineHeight: "1.6",
          position: "relative",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.04)"
        }}>
          {/* Saffron accent banner inside ticket */}
          <div style={{ 
            border: "1.5px solid var(--ink)",
            background: "#B84915",
            color: "#F4EBD7",
            padding: "4px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "11px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            marginBottom: "20px"
          }}>
            {t("receipt_header")}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", borderBottom: "1px dotted rgba(26,17,8,0.2)", paddingBottom: "6px" }}>
            <span style={{ fontWeight: "700" }}>{t("receipt_ticket_id")}</span>
            <span style={{ color: "var(--blood)", fontWeight: "700" }}>{complaintTicket.ticketId}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>{t("receipt_filed_by")}</span>
            <span style={{ fontWeight: "600" }}>{complaintTicket.name}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
            <span>{t("form_label_email").replace(" *", "")}:</span>
            <span>{complaintTicket.email}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>{t("receipt_target")}</span>
            <span style={{ fontWeight: "600", color: "var(--saffron-deep)" }}>{t("receipt_target_val")}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px", borderBottom: "1px dotted rgba(26,17,8,0.2)", paddingBottom: "8px" }}>
            <span>{t("receipt_date")}</span>
            <span>{new Date().toLocaleDateString(language === "hi" ? "hi-IN" : "en-IN")}</span>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontWeight: "700", marginBottom: "4px", color: "var(--green)" }}>
              {language === "en" ? "REGISTERED COMPLAINT:" : "पंजीकृत शिकायत:"}
            </div>
            <div style={{ 
               background: "rgba(244, 235, 215, 0.5)", 
               border: "1px solid rgba(26, 17, 8, 0.12)",
               padding: "10px 12px",
               fontStyle: "italic",
               fontSize: "12.5px",
               whiteSpace: "pre-wrap",
               maxHeight: "180px",
               overflowY: "auto",
               color: "var(--ink-2)"
            }}>
              "{complaintTicket.complaint}"
            </div>
          </div>

          <div style={{ 
            background: "var(--ink)", 
            color: "#F4EBD7", 
            padding: "8px 10px", 
            textAlign: "center",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1px"
          }}>
            {t("receipt_status")}
          </div>

          <p style={{ fontSize: "10.5px", textAlign: "center", color: "var(--ink-3)", marginTop: "16px", fontStyle: "italic", lineHeight: "1.4" }}>
            {t("receipt_fine")}
          </p>
        </div>

        <div style={{ display: "flex", gap: "16px", width: "100%" }}>
          <button 
            onClick={handlePrint} 
            className="btn-primary" 
            style={{ flex: "1", justifyContent: "center", display: "inline-flex" }}
          >
            {t("receipt_btn_print")}
            <span className="arr">⎙</span>
          </button>
          <button 
            onClick={handleReset} 
            className="btn-link"
            style={{ borderBottom: "2px dashed var(--ink)", paddingBottom: "2px", fontWeight: "600" }}
          >
            {t("receipt_btn_another")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" style={{ animation: "fadeIn 0.3s ease-out" }}>
      <div style={{ borderBottom: "1px solid rgba(26, 17, 8, 0.12)", paddingBottom: "14px", marginBottom: "4px" }}>
        <span className="eyebrow" style={{ color: "var(--blood)" }}>
          {language === "en" ? "Swarm Complaint Bureau" : "झुंड शिकायत ब्यूरो"}
        </span>
        <h3 className="display" style={{ fontSize: "28px", marginTop: "4px" }}>
          {language === "en" ? "File a Rant / Frustration" : "शिकायत या भड़ास दर्ज करें"}
        </h3>
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
        <span>{t("form_label_name")}</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("form_placeholder_name")}
          disabled={isSubmitting}
          required
        />
      </label>

      <label>
        <span>{t("form_label_email")}</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("form_placeholder_email")}
          disabled={isSubmitting}
          required
        />
      </label>

      <label>
        <span>{t("form_label_complaint")}</span>
        <textarea
          name="complaint"
          value={formData.complaint}
          onChange={handleChange}
          rows="6"
          placeholder={t("form_placeholder_complaint")}
          disabled={isSubmitting}
          style={{ resize: "vertical" }}
          required
        />
      </label>

      <button 
        type="submit" 
        className="btn-primary" 
        style={{ marginTop: "12px", width: "100%", justifyContent: "center", background: "var(--blood)", borderColor: "var(--ink)" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          language === "en" ? "LOGGING YOUR RANT..." : "आपकी भड़ास दर्ज हो रही है..."
        ) : (
          t("btn_submit_complaint")
        )}
        <span className="arr">→</span>
      </button>

      <p className="form-fine" style={{ marginTop: "4px", fontSize: "11px", color: "var(--ink-3)" }}>
        {language === "en" ? (
          "* By submitting this complaint, you authorize the Cockroach Janta Party to archive your disgruntlement into the official record. We read every word."
        ) : (
          "* इस शिकायत को प्रस्तुत करके, आप कॉकरोच जनता पार्टी को आधिकारिक रिकॉर्ड में अपनी नाराजगी दर्ज करने के लिए अधिकृत करते हैं। हम हर एक शब्द पढ़ते हैं।"
        )}
      </p>
    </form>
  );
}

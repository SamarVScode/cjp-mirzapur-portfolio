import React, { useEffect, useRef, useState } from "react";

export const CardCanvas = ({
  memberName,
  memberId,
  onCanvasRef,
}) => {
  const canvasRef = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [logoImage, setLogoImage] = useState(null);

  // Exact math-compiled vector SVG string representing the cockroach emblem
  const cockroachSvgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
  <!-- Symmetrical Legs -->
  <!-- Leg Pair 1 - Left -->
  <path d="M 104 95 L 76 78 L 51 108 L 65 138" stroke="#0E0D0B" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 104 95 L 76 78" stroke="#0E0D0B" stroke-width="5.6" stroke-linecap="round" fill="none" />
  <path d="M 69.75 85.5 L 77.816 88.317 M 63.5 93 L 71.566 95.817 M 57.25 100.5 L 65.316 103.317" stroke="#0E0D0B" stroke-width="1.6" stroke-linecap="round" fill="none" />
  <!-- Leg Pair 1 - Right -->
  <path d="M 136 95 L 164 78 L 189 108 L 175 138" stroke="#0E0D0B" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 136 95 L 164 78" stroke="#0E0D0B" stroke-width="5.6" stroke-linecap="round" fill="none" />
  <path d="M 170.25 85.5 L 162.184 88.317 M 176.5 93 L 168.434 95.817 M 182.75 100.5 L 174.684 103.317" stroke="#0E0D0B" stroke-width="1.6" stroke-linecap="round" fill="none" />
  <!-- Leg Pair 2 - Left -->
  <path d="M 98 125 L 65 130 L 42 159 L 58 188" stroke="#0E0D0B" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 98 125 L 65 130" stroke="#0E0D0B" stroke-width="5.6" stroke-linecap="round" fill="none" />
  <path d="M 60.4 135.8 L 68.532 138.421 M 55.8 141.6 L 63.932 144.221 M 51.2 147.4 L 59.332 150.021 M 46.6 153.2 L 54.732 155.821" stroke="#0E0D0B" stroke-width="1.6" stroke-linecap="round" fill="none" />
  <!-- Leg Pair 2 - Right -->
  <path d="M 142 125 L 175 130 L 198 159 L 182 188" stroke="#0E0D0B" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 142 125 L 175 130" stroke="#0E0D0B" stroke-width="5.6" stroke-linecap="round" fill="none" />
  <path d="M 179.6 135.8 L 171.468 138.421 M 184.2 141.6 L 176.068 144.221 M 188.8 147.4 L 180.668 150.021 M 193.4 153.2 L 185.268 155.821" stroke="#0E0D0B" stroke-width="1.6" stroke-linecap="round" fill="none" />
  <!-- Leg Pair 3 - Left -->
  <path d="M 100 155 L 68 178 L 64 225 L 84 245" stroke="#0E0D0B" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 100 155 L 68 178" stroke="#0E0D0B" stroke-width="5.6" stroke-linecap="round" fill="none" />
  <path d="M 67.333 185.833 L 75.559 183.523 M 66.667 193.667 L 74.892 191.356 M 66 201.5 L 74.226 199.189 M 65.333 209.333 L 73.559 207.023 M 64.667 217.167 L 72.892 214.856" stroke="#0E0D0B" stroke-width="1.6" stroke-linecap="round" fill="none" />
  <!-- Leg Pair 3 - Right -->
  <path d="M 140 155 L 172 178 L 176 225 L 156 245" stroke="#0E0D0B" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 140 155 L 172 178" stroke="#0E0D0B" stroke-width="5.6" stroke-linecap="round" fill="none" />
  <path d="M 172.667 185.833 L 164.441 183.523 M 173.333 193.667 L 165.108 191.356 M 174 201.5 L 165.774 199.189 M 174.667 209.333 L 166.441 207.023 M 175.333 217.167 L 167.108 214.856" stroke="#0E0D0B" stroke-width="1.6" stroke-linecap="round" fill="none" />

  <!-- Cerci -->
  <path d="M 113 187 Q 105 198, 98 205" stroke="#0E0D0B" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 127 187 Q 135 198, 142 205" stroke="#0E0D0B" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />

  <!-- Symmetrical Wings -->
  <!-- Left Wing -->
  <path d="M 98 82 C 88 130, 96 170, 116 188 L 119 188 L 119 82 Z" fill="#0E0D0B" />
  <!-- Right Wing -->
  <path d="M 142 82 C 152 130, 144 170, 124 188 L 121 188 L 121 82 Z" fill="#0E0D0B" />

  <!-- Center Wing Split Line -->
  <line x1="120" y1="82" x2="120" y2="188" stroke="#FAF6EE" stroke-width="2.5" />

  <!-- Pronotum Shield -->
  <path d="M 96 80 C 94 58, 146 58, 144 80 C 138 85, 102 85, 96 80 Z" fill="#0E0D0B" />

  <!-- Antennae -->
  <path d="M 115 52 C 105 28, 75 14, 35 28" stroke="#0E0D0B" stroke-width="1.8" stroke-linecap="round" fill="none" />
  <path d="M 125 52 C 135 28, 165 14, 205 28" stroke="#0E0D0B" stroke-width="1.8" stroke-linecap="round" fill="none" />

  <!-- Head -->
  <ellipse cx="120" cy="55" rx="11" ry="8" fill="#0E0D0B" />
</svg>`;

  useEffect(() => {
    const img = new Image();
    img.src = `data:image/svg+xml;utf8,${encodeURIComponent(cockroachSvgString)}`;
    img.onload = () => {
      setLogoImage(img);
    };
  }, []);

  // Constants to match the reference image exactly
  const saffronColor = "#F28C28"; // Vibrant official saffron orange
  const greenColor = "#0B6623"; // Authentic swarm forest green
  const middleColor = "#FAF6EE"; // Warm off-white paper cream
  const stampColor = "#111111"; // Black ink
  const districtName = "MIRZAPUR"; // Constant as shown in stamp
  const stampRotation = -18; // rotated -18 degrees as requested
  const stampScale = 1.15; // exact proportion size
  const stampOffsetX = 85; // placed back in the lower empty space on the right
  const stampOffsetY = 132; // placed below side near the white/green border!
  const grungeIntensity = 24; // realistic paper vintage filter grain

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (document.fonts) {
        document.fonts.ready.then(() => {
          setFontsLoaded(true);
        });
      } else {
        const timer = setTimeout(() => setFontsLoaded(true), 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    onCanvasRef(canvas);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset transform & clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;

    // Soft warm textured cream surrounding background
    ctx.fillStyle = "#F5EFEB";
    ctx.fillRect(0, 0, w, h);

    // Card frame coordinates: x=50, y=50, width=700, height=700
    const cardX = 50;
    const cardY = 50;
    const cardW = 700;
    const cardH = 700;
    const borderThickness = 14;

    // 1. Draw Card Bands inside borders
    // Orange top stripe (Height: 175)
    ctx.fillStyle = saffronColor;
    ctx.fillRect(cardX, cardY, cardW, 175);

    // Warm cream middle stripe (Height: 355)
    ctx.fillStyle = middleColor;
    ctx.fillRect(cardX, cardY + 175, cardW, 355);

    // Green bottom stripe (Height: 170)
    ctx.fillStyle = greenColor;
    ctx.fillRect(cardX, cardY + 175 + 355, cardW, 170);

    // 2. Wrapcard with Bold Black Border on top
    ctx.lineWidth = borderThickness;
    ctx.strokeStyle = "#0E0D0B";
    ctx.lineJoin = "miter";
    ctx.strokeRect(cardX, cardY, cardW, cardH);

    // 3. Draw Saffron Band Typography
    ctx.fillStyle = "#0E0D0B";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Set letter spacing if supported across browsers
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "3px";
    }

    // Header 1: COCKROACH JANTA PARTY
    ctx.font = "700 52px 'Oswald', sans-serif";
    ctx.fillText("COCKROACH JANTA PARTY", w / 2, cardY + 62);

    // Header 2: OFFICIAL SWARM CARD
    ctx.font = "700 37px 'Oswald', sans-serif";
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "2px";
    }
    ctx.fillText("OFFICIAL SWARM CARD", w / 2, cardY + 122);

    // 4. Draw Green Band Typography: "YOU CANNOT SQUASH A SWARM"
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "700 42px 'Oswald', sans-serif";
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "4px";
    }
    ctx.fillText("YOU CANNOT SQUASH A SWARM", w / 2, cardY + 175 + 355 + 85);

    // Reset baseline letter spacing
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "0px";
    }

    // 5. LEFT COLUMN: ROUNDED BADGE MEDALLION
    const logoX = cardX + 185; 
    const logoY = cardY + 175 + 177; // Perfectly centered in cream area
    const logoRadius = 120;

    // Circular borders
    ctx.beginPath();
    ctx.arc(logoX, logoY, logoRadius, 0, Math.PI * 2);
    ctx.lineWidth = 5.5;
    ctx.strokeStyle = "#0E0D0B";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(logoX, logoY, logoRadius - 6, 0, Math.PI * 2);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0E0D0B";
    ctx.stroke();

    // Draw the Cockroach Emblem Silhouette from loaded SVG Image
    if (logoImage) {
      ctx.drawImage(logoImage, logoX - logoRadius, logoY - logoRadius, logoRadius * 2, logoRadius * 2);
    }

    // 6. RIGHT COLUMN: DETAILS BLOCK
    const textStartX = cardX + 355; // aligned elegantly
    const textStartY = cardY + 175 + 65; // y=290

    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#0E0D0B";

    // "MEMBER NAME:"
    ctx.font = "800 24px 'Oswald', sans-serif";
    ctx.fillText("MEMBER NAME:", textStartX, textStartY);

    // Dynamic scaled name drawing matching the bold, heavy tall font
    const printScaledName = (nameStr, sx, sy, maxW) => {
      ctx.save();
      ctx.fillStyle = "#0E0D0B";
      let size = 46;
      ctx.font = `800 ${size}px 'Oswald', 'Arial Black', sans-serif`;
      let formatted = nameStr.trim().toUpperCase();
      let metrics = ctx.measureText(formatted);
      
      while (metrics.width > maxW && size > 22) {
        size -= 1.5;
        ctx.font = `800 ${size}px 'Oswald', 'Arial Black', sans-serif`;
        metrics = ctx.measureText(formatted);
      }
      ctx.fillText(formatted, sx, sy);
      ctx.restore();
    };

    printScaledName(memberName, textStartX, textStartY + 45, cardW - 375);

    // ID Container block
    const idBarY = textStartY + 76;
    const idBarW = 300;
    const idBarH = 60;

    // Solid ID Box
    ctx.fillStyle = "#0E0D0B";
    ctx.fillRect(textStartX, idBarY, idBarW, idBarH);

    // White Text inside box - matching the bold sans-serif design of the image
    const printIdCode = (idStr, bx, by, bw, bh) => {
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let size = 33;
      ctx.font = `800 ${size}px 'Oswald', 'Arial Black', sans-serif`;
      let formatted = idStr.trim().toUpperCase();
      let metrics = ctx.measureText(formatted);

      while (metrics.width > bw - 20 && size > 16) {
        size -= 1;
        ctx.font = `800 ${size}px 'Oswald', 'Arial Black', sans-serif`;
        metrics = ctx.measureText(formatted);
      }

      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(formatted, bx + bw / 2, by + bh / 2 + 1);
      ctx.restore();
    };

    printIdCode(memberId, textStartX, idBarY, idBarW, idBarH);

    // 7. DISTRICT STAMP (Moved lower on instruction)
    const stampX = cardX + 465 + stampOffsetX;
    const stampY = cardY + 175 + 235 + stampOffsetY; // Placed further down near the white/green border!
    const stampR = 86 * stampScale;

    const drawStampCurvedText = (txt, radius, centerAngle, isTop) => {
      ctx.save();
      ctx.font = "800 19px 'Arial', sans-serif";
      ctx.fillStyle = stampColor;

      const chars = txt.split("");
      let totalWidth = 0;
      const charWidths = chars.map(c => {
        const w = ctx.measureText(c).width;
        totalWidth += w;
        return w;
      });

      // Character circular angle coverage
      const angleSpan = totalWidth / radius;
      
      // Determine start angle
      // Top reads clockwise, bottom reads counter-clockwise for natural upright readable layout
      let curAngle = isTop 
        ? centerAngle - angleSpan / 2 
        : centerAngle + angleSpan / 2;

      chars.forEach((char, i) => {
        const charW = charWidths[i];
        const charAngle = charW / radius;
        
        const angle = isTop 
          ? curAngle + charAngle / 2 
          : curAngle - charAngle / 2;

        ctx.save();
        
        // Circular position vector translation
        const sx = radius * Math.cos(angle);
        const sy = radius * Math.sin(angle);
        ctx.translate(sx, sy);

        // Rotate characters to stand straight relative to curve
        if (isTop) {
          ctx.rotate(angle + Math.PI / 2);
        } else {
          ctx.rotate(angle - Math.PI / 2);
        }

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(char, 0, 0);
        ctx.restore();

        if (isTop) {
          curAngle += charAngle;
        } else {
          curAngle -= charAngle;
        }
      });

      ctx.restore();
    };

    const drawDistrictStamp = () => {
      ctx.save();
      ctx.translate(stampX, stampY);
      ctx.rotate((stampRotation * Math.PI) / 180);

      ctx.globalAlpha = 0.88;
      ctx.strokeStyle = stampColor;
      ctx.fillStyle = stampColor;

      // Outer thick / thin double rings
      ctx.beginPath();
      ctx.arc(0, 0, stampR, 0, Math.PI * 2);
      ctx.lineWidth = 4.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, stampR - 6, 0, Math.PI * 2);
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Top label "MIRZAPUR"
      drawStampCurvedText(districtName.toUpperCase(), stampR - 22, -Math.PI / 2, true);

      // Bottom label "★ OFFICIAL ★"
      drawStampCurvedText("★ OFFICIAL ★", stampR - 22, Math.PI / 2, false);

      // Central banner block background
      const rectW = 162 * stampScale;
      const rectH = 38 * stampScale;

      ctx.fillStyle = middleColor;
      ctx.fillRect(-rectW / 2, -rectH / 2, rectW, rectH);

      // Lines of floating banner
      ctx.beginPath();
      ctx.moveTo(-rectW / 2, -rectH / 2);
      ctx.lineTo(rectW / 2, -rectH / 2);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = stampColor;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-rectW / 2, rectH / 2);
      ctx.lineTo(rectW / 2, rectH / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-rectW / 2, -rectH / 2);
      ctx.lineTo(-rectW / 2, rectH / 2);
      ctx.moveTo(rectW / 2, -rectH / 2);
      ctx.lineTo(rectW / 2, rectH / 2);
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // "DISTRICT WING" Label inside stamp
      ctx.fillStyle = stampColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `900 ${22 * stampScale}px 'Oswald', sans-serif`;
      
      if ("letterSpacing" in ctx) {
        // @ts-ignore
        ctx.letterSpacing = "1px";
      }
      ctx.fillText("DISTRICT WING", 0, 1);
      if ("letterSpacing" in ctx) {
        // @ts-ignore
        ctx.letterSpacing = "0px";
      }

      // Scatter authentic stamp ink specks inside the stamp boundaries
      ctx.fillStyle = middleColor;
      ctx.globalAlpha = 0.55;
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        const rad = Math.random() * stampR;
        const fleckX = Math.cos(angle) * rad;
        const fleckY = Math.sin(angle) * rad;
        const size = 1 + Math.random() * 2;
        ctx.fillRect(fleckX, fleckY, size, size);
      }

      ctx.restore();
    };

    drawDistrictStamp();

    // 8. GRUNGE PAPER SCAN LINE & VINTAGE GRANULIZER
    if (grungeIntensity > 0) {
      ctx.save();
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const factor = grungeIntensity * 0.38;

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * factor;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imgData, 0, 0);

      // Subtle atmospheric vignette overlay
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = grungeIntensity / 180;
      
      const gradient = ctx.createRadialGradient(w / 2, h / 2, w * 0.3, w / 2, h / 2, w * 0.7);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.7, "rgba(180,165,145,0.4)");
      gradient.addColorStop(1, "rgba(110,85,60,0.8)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
      
      ctx.restore();
    }

  }, [memberName, memberId, fontsLoaded, logoImage, onCanvasRef]);

  return (
    <div
      className="relative p-3 bg-neutral-900/40 rounded-3xl flex justify-center items-center backdrop-blur-md shadow-2xl border border-white/5"
      style={{
        position: "relative",
        padding: "12px",
        backgroundColor: "rgba(23, 23, 23, 0.4)",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        width: "100%",
        maxWidth: "480px"
      }}
    >
      <canvas
        id="swarm-card-canvas"
        ref={canvasRef}
        width={800}
        height={800}
        className="w-full max-w-[500px] h-auto rounded-2xl shadow-3xl transition-transform duration-300 hover:scale-[1.01]"
        style={{
          width: "100%",
          maxWidth: "450px",
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.3s ease",
        }}
      />
      <div
        className="absolute top-5 right-5 pointer-events-none bg-black/80 text-amber-400 text-[10px] font-mono py-1 px-3 rounded-full backdrop-blur-md border border-amber-500/10 uppercase tracking-widest leading-none shadow-md"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          pointerEvents: "none",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#fbbf24", // amber-400
          fontSize: "10px",
          fontFamily: "var(--font-mono), monospace",
          padding: "4px 12px",
          borderRadius: "9999px",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(245, 158, 11, 0.1)", // amber-500/10
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          lineHeight: "1",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
      >
        800 x 800 HD Output
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";

interface CardCanvasProps {
  memberName: string;
  memberId: string;
  districtName: string;
  saffronColor: string;
  greenColor: string;
  middleColor: string;
  stampColor: string;
  stampRotation: number; // in degrees
  stampScale: number; // multiplier (0.8 to 1.5)
  stampOffsetY: number; // vertical adjustment (places stamp lower/higher)
  stampOffsetX: number; // horizontal adjustment
  grungeIntensity: number; // 0 to 100
  onCanvasRef: (canvas: HTMLCanvasElement | null) => void;
}

export const CardCanvas: React.FC<CardCanvasProps> = ({
  memberName,
  memberId,
  districtName,
  saffronColor,
  greenColor,
  middleColor,
  stampColor,
  stampRotation,
  stampScale,
  stampOffsetY,
  stampOffsetX,
  grungeIntensity,
  onCanvasRef,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Monitor font loading to trigger re-draw on full visual assets ready
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback
      const timer = setTimeout(() => setFontsLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    onCanvasRef(canvas);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset transform and clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Canvas sizes: 800 x 800
    const w = canvas.width;
    const h = canvas.height;

    // Fill overall background outside the card with a warm, elegant textured cream paper color
    ctx.fillStyle = "#F5EFEB";
    ctx.fillRect(0, 0, w, h);

    // Card boundary coordinates: x=50, y=50, width=700, height=700
    const cardX = 50;
    const cardY = 50;
    const cardW = 700;
    const cardH = 700;

    // Thick black outer card border
    const borderThickness = 14;
    
    // Draw card bands inside border
    // Orange top band
    ctx.fillStyle = saffronColor;
    ctx.fillRect(cardX, cardY, cardW, 165);

    // Off-white middle band
    ctx.fillStyle = middleColor;
    ctx.fillRect(cardX, cardY + 165, cardW, 365);

    // Green bottom band
    ctx.fillStyle = greenColor;
    ctx.fillRect(cardX, cardY + 165 + 365, cardW, 170);

    // Now draw the thick black border on top so it wraps cleanly
    ctx.lineWidth = borderThickness;
    ctx.strokeStyle = "#0B0B0B";
    ctx.lineJoin = "miter";
    ctx.strokeRect(cardX, cardY, cardW, cardH);

    // Draw Saffron Band Text
    ctx.fillStyle = "#0D0C0A";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Config letters spacing if supported by browser
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "2px";
    }

    // Line 1: COCKROACH JANTA PARTY
    ctx.font = "700 42px 'Oswald', 'Impact', sans-serif";
    ctx.fillText("COCKROACH JANTA PARTY", w / 2, cardY + 54);

    // Line 2: OFFICIAL SWARM CARD
    ctx.font = "700 31px 'Oswald', 'Impact', sans-serif";
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "1.5px";
    }
    ctx.fillText("OFFICIAL SWARM CARD", w / 2, cardY + 110);

    // Draw Green Band Text: "YOU CANNOT SQUASH A SWARM"
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "700 37px 'Oswald', 'Impact', sans-serif";
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "3px";
    }
    ctx.fillText("YOU CANNOT SQUASH A SWARM", w / 2, cardY + 165 + 365 + 85);

    // Reset letter-spacing for standard text
    if ("letterSpacing" in ctx) {
      // @ts-ignore
      ctx.letterSpacing = "0px";
    }

    // --- LEFT COLUMN: COCKROACH LOGO EMBLEM ---
    const logoX = cardX + 185; // x=235
    const logoY = cardY + 165 + 182; // y=397 (centered in of-white band)
    const logoRadius = 118;

    // Draw circular frame
    ctx.beginPath();
    ctx.arc(logoX, logoY, logoRadius, 0, Math.PI * 2);
    ctx.lineWidth = 5.5;
    ctx.strokeStyle = "#0D0C0A";
    ctx.stroke();

    // Secondary inner offset fine circle (creates vintage badge feel)
    ctx.beginPath();
    ctx.arc(logoX, logoY, logoRadius - 6, 0, Math.PI * 2);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0D0C0A";
    ctx.stroke();

    // Draw Cockroach Silhouette
    const drawCockroach = (cx: number, cy: number) => {
      ctx.save();
      ctx.fillStyle = "#0D0C0A";
      ctx.strokeStyle = "#0D0C0A";

      // 1. HEAD (Small oval triangle pointing under antennae)
      ctx.beginPath();
      ctx.ellipse(cx, cy - 65, 11, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. PRONOTUM / SHIELD (The broad plate above body, slightly overlapping head)
      ctx.beginPath();
      // Rounded plate
      ctx.moveTo(cx - 24, cy - 40);
      ctx.bezierCurveTo(cx - 26, cy - 62, cx + 26, cy - 62, cx + 24, cy - 40);
      ctx.bezierCurveTo(cx + 18, cy - 35, cx - 18, cy - 35, cx - 24, cy - 40);
      ctx.fill();

      // 3. ELYTRA / WINGS / SYMMETRICAL BODY
      // Draw left wing
      ctx.beginPath();
      ctx.moveTo(cx - 22, cy - 38);
      ctx.bezierCurveTo(cx - 32, cy + 10, cx - 24, cy + 50, cx - 4, cy + 68);
      ctx.lineTo(cx - 1, cy + 68);
      ctx.lineTo(cx - 1, cy - 38);
      ctx.closePath();
      ctx.fill();

      // Draw right wing
      ctx.beginPath();
      ctx.moveTo(cx + 22, cy - 38);
      ctx.bezierCurveTo(cx + 32, cy + 10, cx + 24, cy + 50, cx + 4, cy + 68);
      ctx.lineTo(cx + 1, cy + 68);
      ctx.lineTo(cx + 1, cy - 38);
      ctx.closePath();
      ctx.fill();

      // Highlight line splitting wings (fine background colored separation line)
      ctx.beginPath();
      ctx.moveTo(cx, cy - 38);
      ctx.lineTo(cx, cy + 68);
      ctx.strokeStyle = middleColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // 4. CERCI (Two tiny thin tails at the bottom pointing outward-down)
      ctx.fillStyle = "#0D0C0A";
      ctx.strokeStyle = "#0D0C0A";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      
      // Left cercus
      ctx.beginPath();
      ctx.moveTo(cx - 7, cy + 67);
      ctx.quadraticCurveTo(cx - 15, cy + 78, cx - 24, cy + 85);
      ctx.stroke();

      // Right cercus
      ctx.beginPath();
      ctx.moveTo(cx + 7, cy + 67);
      ctx.quadraticCurveTo(cx + 15, cy + 78, cx + 24, cy + 85);
      ctx.stroke();

      // 5. ANTENNAE (Extremely long elegant sweeps crossing boundaries)
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      
      // Left antenna
      ctx.beginPath();
      ctx.moveTo(cx - 6, cy - 69);
      // Sweep far over, up, out, and curl down, crossing the circular borders
      ctx.bezierCurveTo(cx - 50, cy - 130, cx - 140, cy - 40, cx - 110, cy + 45);
      ctx.stroke();

      // Right antenna
      ctx.beginPath();
      ctx.moveTo(cx + 6, cy - 69);
      // Mirror sweep
      ctx.bezierCurveTo(cx + 50, cy - 130, cx + 140, cy - 40, cx + 110, cy + 45);
      ctx.stroke();

      // 6. JOINTED COCKROACH LEGS (With authentic tiny sharp spikes!)
      // Helper function to draw jointed leg with spikes
      const drawLegWithSpikes = (
        joints: { x: number; y: number }[],
        isLeft: boolean,
        spikeCount: number
      ) => {
        if (joints.length < 3) return;
        const [pStart, pJoint, pAnkle, pTip] = joints;

        // Trace main leg shape
        ctx.beginPath();
        ctx.moveTo(pStart.x, pStart.y);
        ctx.lineTo(pJoint.x, pJoint.y);
        ctx.lineWidth = 4.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(pJoint.x, pJoint.y);
        ctx.lineTo(pAnkle.x, pAnkle.y);
        ctx.lineWidth = 3.0;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(pAnkle.x, pAnkle.y);
        if (pTip) {
          ctx.lineTo(pTip.x, pTip.y);
        }
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Draw spikes branching along the main tibia segment (pJoint -> pAnkle)
        for (let i = 1; i <= spikeCount; i++) {
          const t = i / (spikeCount + 1);
          // Position along segment
          const sx = pJoint.x + t * (pAnkle.x - pJoint.x);
          const sy = pJoint.y + t * (pAnkle.y - pJoint.y);

          // Get vector and its normal
          const dx = pAnkle.x - pJoint.x;
          const dy = pAnkle.y - pJoint.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          if (len === 0) continue;

          // Outward pointing normal depending on side
          const nx = -dy / len;
          const ny = dx / len;
          const dirFactor = isLeft ? -1 : 1;

          // Tiny spike length
          const spikeLength = 7;
          
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          // Angle backward and outward slightly
          ctx.lineTo(
            sx + (nx * dirFactor * spikeLength) - (dx / len * 3),
            sy + (ny * dirFactor * spikeLength) - (dy / len * 3)
          );
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      };

      // Define leg positions relative to cx, cy
      // Pair 1 (Top, pointing forward/upwards)
      drawLegWithSpikes([
        { x: cx - 16, y: cy - 25 },
        { x: cx - 44, y: cy - 42 },
        { x: cx - 69, y: cy - 12 },
        { x: cx - 55, y: cy + 18 }
      ], true, 3);

      drawLegWithSpikes([
        { x: cx + 16, y: cy - 25 },
        { x: cx + 44, y: cy - 42 },
        { x: cx + 69, y: cy - 12 },
        { x: cx + 55, y: cy + 18 }
      ], false, 3);

      // Pair 2 (Middle, pointing outward)
      drawLegWithSpikes([
        { x: cx - 22, y: cy + 5 },
        { x: cx - 55, y: cy + 10 },
        { x: cx - 78, y: cy + 39 },
        { x: cx - 62, y: cy + 68 }
      ], true, 4);

      drawLegWithSpikes([
        { x: cx + 22, y: cy + 5 },
        { x: cx + 55, y: cy + 10 },
        { x: cx + 78, y: cy + 39 },
        { x: cx + 62, y: cy + 68 }
      ], false, 4);

      // Pair 3 (Bottom, very long hind legs sweeping backwards/downwards)
      drawLegWithSpikes([
        { x: cx - 20, y: cy + 35 },
        { x: cx - 52, y: cy + 58 },
        { x: cx - 56, y: cy + 105 },
        { x: cx - 36, y: cy + 125 }
      ], true, 5);

      drawLegWithSpikes([
        { x: cx + 20, y: cy + 35 },
        { x: cx + 52, y: cy + 58 },
        { x: cx + 56, y: cy + 105 },
        { x: cx + 36, y: cy + 125 }
      ], false, 5);

      ctx.restore();
    };

    drawCockroach(logoX, logoY);


    // --- RIGHT COLUMN: MEMBER DETAILS ---
    const textStartX = cardX + 342; // x=392, plenty of space
    const textStartY = cardY + 165 + 68; // y=283

    ctx.textAlign = "left";
    ctx.fillStyle = "#0D0C0A";

    // "MEMBER NAME:" Label
    ctx.font = "800 21px 'Inter', sans-serif";
    ctx.fillText("MEMBER NAME:", textStartX, textStartY);

    // Variable Member Name (Auto-scales to prevent overflow bounds)
    const printMemberNameWithScaling = (
      nameStr: string,
      startX: number,
      startY: number,
      maxAllowedWidth: number
    ) => {
      ctx.save();
      ctx.fillStyle = "#0D0C0A";
      
      let baseSize = 39;
      ctx.font = `800 ${baseSize}px 'Arial Black', 'Inter', sans-serif`;
      
      let formattedName = nameStr.trim().toUpperCase();
      let textMetrics = ctx.measureText(formattedName);
      
      // Dynamic compression to fit ID columns perfectly
      while (textMetrics.width > maxAllowedWidth && baseSize > 20) {
        baseSize -= 1.5;
        ctx.font = `800 ${baseSize}px 'Arial Black', 'Inter', sans-serif`;
        textMetrics = ctx.measureText(formattedName);
      }

      ctx.fillText(formattedName, startX, startY);
      ctx.restore();
    };

    printMemberNameWithScaling(memberName, textStartX, textStartY + 42, cardW - 355);

    // Dynamic black bar enclosing ID Number
    const idBarY = textStartY + 68; // y=351
    const idBarW = cardW - 370; // 330px width
    const idBarH = 50;

    // Solid Black Rectangle
    ctx.fillStyle = "#0D0C0A";
    ctx.fillRect(textStartX - 3, idBarY, idBarW + 6, idBarH);

    // ID text inside the box (Centered in context)
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 28px 'JetBrains Mono', 'Courier New', monospace";
    
    // Auto-scale ID code
    const printIdWithScaling = (idStr: string, bx: number, by: number, bw: number, bh: number) => {
      ctx.save();
      let fid = idStr.trim().toUpperCase();
      let size = 26;
      ctx.font = `700 ${size}px 'JetBrains Mono', monospace`;
      let m = ctx.measureText(fid);
      
      while (m.width > bw - 20 && size > 14) {
        size -= 1;
        ctx.font = `700 ${size}px 'JetBrains Mono', monospace`;
        m = ctx.measureText(fid);
      }
      
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(fid, bx + bw / 2, by + bh / 2 + 1);
      ctx.restore();
    };

    printIdWithScaling(memberId, textStartX - 3, idBarY, idBarW + 6, idBarH);


    // --- DISTRICT WING STAMP (Placed lower as explicitly instructed) ---
    // Instead of being right on top of the ID bar, we move it lower down.
    // Default Y is offset downwards towards the bottom of the middle white band and slightly overlapping green band
    const stampX = cardX + 465 + stampOffsetX;
    const stampY = cardY + 165 + 235 + stampOffsetY; // Placed neatly around Y ~ 515-565 instead of Y=380
    const stampR = 86 * stampScale;

    const drawCurvedText = (
      txt: string,
      radius: number,
      centerAngle: number,
      isTop: boolean
    ) => {
      ctx.save();
      ctx.font = "800 16px 'Arial', 'Inter', sans-serif";
      ctx.fillStyle = stampColor;

      const characters = txt.split("");
      let totalWidth = 0;
      for (const char of characters) {
        totalWidth += ctx.measureText(char).width;
      }

      // Angle step based on radius
      const arcPadding = 12;
      const angleSpan = (totalWidth + arcPadding) / radius;
      
      // Determine starting angle to center text along centerAngle
      const direction = isTop ? 1 : -1;
      let currentAngle = centerAngle - (angleSpan / 2) * direction;

      for (const char of characters) {
        const charWidth = ctx.measureText(char).width;
        const charAngle = charWidth / radius;
        
        ctx.save();
        // Calculate point and orientation
        const angle = currentAngle + (charAngle / 2) * direction;
        ctx.rotate(angle);
        ctx.translate(0, -radius * direction);
        
        // Face text upright
        if (!isTop) {
          ctx.rotate(Math.PI);
        }
        
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(char, 0, 0);
        ctx.restore();

        currentAngle += charAngle * direction;
      }
      ctx.restore();
    };

    const drawStamp = () => {
      ctx.save();
      // Translate to stamp position, use compositing for authentic inked stamp feel
      ctx.translate(stampX, stampY);
      ctx.rotate((stampRotation * Math.PI) / 180);
      
      // Stamp Opacity / Composition Blend
      ctx.globalAlpha = 0.88;
      ctx.strokeStyle = stampColor;
      ctx.fillStyle = stampColor;

      // 1. Double Outer Rings
      // Thick ring
      ctx.beginPath();
      ctx.arc(0, 0, stampR, 0, Math.PI * 2);
      ctx.lineWidth = 4.5;
      ctx.stroke();

      // Fine inner ring
      ctx.beginPath();
      ctx.arc(0, 0, stampR - 6, 0, Math.PI * 2);
      ctx.lineWidth = 1.25;
      ctx.stroke();

      // 2. Curved Area Texts
      // Top curved text: District Name
      drawCurvedText(districtName.toUpperCase(), stampR - 19, -Math.PI / 2, true);
      // Bottom curved text: OFFICIAL with stars, angled beautifully
      drawCurvedText("★ OFFICIAL ★", stampR - 19, Math.PI / 2, false);

      // 3. Central Banner enclosing "DISTRICT WING"
      const rectW = 154 * stampScale;
      const rectH = 34 * stampScale;

      // Fill slightly with background middleColor to cover what is behind (ID bar, etc.)
      ctx.fillStyle = middleColor;
      ctx.fillRect(-rectW / 2, -rectH / 2, rectW, rectH);

      // Rectangle top and bottom boundaries (open on left/right as a floating banner)
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

      // Left-right bracket enclosing strokes in stamp format
      ctx.beginPath();
      ctx.moveTo(-rectW / 2, -rectH / 2);
      ctx.lineTo(-rectW / 2, rectH / 2);
      ctx.moveTo(rectW / 2, -rectH / 2);
      ctx.lineTo(rectW / 2, rectH / 2);
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // District Wing Inner Label
      ctx.fillStyle = stampColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `900 ${19 * stampScale}px 'Oswald', 'Arial Black', sans-serif`;
      
      if ("letterSpacing" in ctx) {
        // @ts-ignore
        ctx.letterSpacing = "1px";
      }
      ctx.fillText("DISTRICT WING", 0, 1);
      if ("letterSpacing" in ctx) {
        // @ts-ignore
        ctx.letterSpacing = "0px";
      }

      // 4. In-stamp Ink Distressing (grunge lines specifically applied inside the stamp path)
      // This gives the rubber stamp a highly realistic "patchy ink" look
      ctx.fillStyle = middleColor;
      ctx.globalAlpha = 0.55;
      // Scatter random white flecks specifically inside the stamp layout
      for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const rad = Math.random() * stampR;
        const fleckX = Math.cos(angle) * rad;
        const fleckY = Math.sin(angle) * rad;
        const size = 1 + Math.random() * 2;
        ctx.fillRect(fleckX, fleckY, size, size);
      }

      ctx.restore();
    };

    drawStamp();


    // --- CRITICAL RULE: "remove the warning stamp" ---
    // (We simply do not call any drawing routines for the "WARNING" stamp, keeping layout clean!)


    // --- REALISTIC GRUNGE FILTER ENGINE (Physical vintage specks and paper scan lines) ---
    if (grungeIntensity > 0) {
      ctx.save();
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const factor = grungeIntensity * 0.38; // fine scale factor

      for (let i = 0; i < data.length; i += 4) {
        // Generate noise grain per channel
        const noise = (Math.random() - 0.5) * factor;
        
        data[i] = Math.min(255, Math.max(0, data[i] + noise));     // Red
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // Green
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // Blue
      }
      ctx.putImageData(imgData, 0, 0);

      // Overlay a subtle dark vignette / old cardboard outline
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = grungeIntensity / 170; // highly calibrated
      
      const gradient = ctx.createRadialGradient(w / 2, h / 2, w * 0.3, w / 2, h / 2, w * 0.7);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.7, "rgba(180,165,145,0.45)");
      gradient.addColorStop(1, "rgba(110,85,60,0.85)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
      
      ctx.restore();
    }

  }, [
    memberName,
    memberId,
    districtName,
    saffronColor,
    greenColor,
    middleColor,
    stampColor,
    stampRotation,
    stampScale,
    stampOffsetY,
    stampOffsetX,
    grungeIntensity,
    fontsLoaded,
  ]);

  return (
    <div className="relative p-2 bg-neutral-900/30 rounded-2xl flex justify-center items-center backdrop-blur-sm shadow-inner">
      <canvas
        id="swarm-card-canvas"
        ref={canvasRef}
        width={800}
        height={800}
        className="w-full max-w-[480px] h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
      />
      <div className="absolute top-4 right-4 pointer-events-none bg-neutral-950/80 text-white text-[10px] font-mono py-1 px-2.5 rounded-full backdrop-blur border border-white/10 uppercase tracking-widest leading-none">
        800 x 800 HD PREVIEW
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  children?: React.ReactNode;
}

interface OverlayChildProps {
  scrollYProgress?: MotionValue<number>;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, 143], { clamp: true });

  // Preload images
  useEffect(() => {
    const totalFrames = 144;
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    // Use the explicit repository name for GitHub Pages basePath robustness
    const basePath = "/Portfolio_Website_Saiyam_Bajpai";

    for (let i = 0; i < totalFrames; i++) {
      const img = new window.Image();
      const frameNumber = String(i).padStart(3, "0");
      img.src = `${basePath}/ezgif-split/frame_${frameNumber}_delay-0.056s.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          imagesRef.current = imgArray;
          setIsLoaded(true);
          // Draw first frame immediately
          setTimeout(() => drawImage(0), 10);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          imagesRef.current = imgArray;
          setIsLoaded(true);
        }
      };
      imgArray.push(img);
    }
  }, []);

  const lastDrawnIndex = useRef<number>(-1);

  // Drawing logic
  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[index]) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    // Check if image is truly ready to draw
    if (!img.complete || img.naturalWidth === 0) {
      return; // Skip if not ready, but don't clear the last drawing yet
    }

    // Only redraw if it's a new index OR the canvas was cleared
    // Actually, always draw to ensure transparency/scaling is updated, but don't CLEAR unless we have a replacement
    
    const canvasW = canvas.width;
    const canvasH = canvas.height;

    // Drawing
    ctx.fillStyle = "#08080F";
    ctx.fillRect(0, 0, canvasW, canvasH);

    const scale = Math.max(canvasW / img.naturalWidth, canvasH / img.naturalHeight);
    const renderW = img.naturalWidth * scale;
    const renderH = img.naturalHeight * scale;
    const offsetX = (canvasW - renderW) / 2;
    const offsetY = (canvasH - renderH) / 2;

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    lastDrawnIndex.current = index;
  };

  useMotionValueEvent(currentFrame, "change", (latest) => {
    const index = Math.round(latest);
    if (isLoaded) {
      requestAnimationFrame(() => drawImage(Math.min(index, 143)));
    }
  });

  // Handle Resize setup
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
        canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;
        
        if (isLoaded) {
          drawImage(Math.round(currentFrame.get()));
        }
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-[#08080F] z-0">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden z-10">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#08080F]">
             <div className="flex flex-col items-center space-y-4">
                <div className="w-10 h-10 border-4 border-[#5B8DEF]/30 border-t-[#5B8DEF] rounded-full animate-spin"></div>
                <p className="text-[#F0F0F5] font-syne text-sm animate-pulse">Loading Experience...</p>
             </div>
          </div>
        )}
        <canvas ref={canvasRef} className="block w-full h-full" />
        
        {/* Pass down scroll progress to children (like Overlay) */}
        <div className="absolute inset-0 z-10">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<OverlayChildProps>(child)) {
              return React.cloneElement(child, { scrollYProgress } as OverlayChildProps);
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
}

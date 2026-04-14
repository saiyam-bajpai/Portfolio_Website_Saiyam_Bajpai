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
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, 143]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = 144;
    const imgArray: HTMLImageElement[] = [];

    const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

    const loadImages = async () => {
      for (let i = 0; i < totalFrames; i++) {
        const img = new window.Image();
        const frameNumber = String(i).padStart(3, "0");
        img.src = `${basePath}/ezgif-split/frame_${frameNumber}_delay-0.056s.webp`;

        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            setIsLoaded(true);
            setImages(imgArray);
          }
        };
        img.onerror = () => {
          // Count error as loaded to avoid infinite loading
          loadedCount++;
          if (loadedCount === totalFrames) {
            setIsLoaded(true);
            setImages(imgArray);
          }
        };
        imgArray.push(img);
      }
    };
    loadImages();
  }, []);

  // Drawing logic
  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img.naturalWidth) return; // Not yet loaded
    const canvasW = canvas.width;
    const canvasH = canvas.height;
    
    // Fill background to blend #08080F
    ctx.fillStyle = "#08080F";
    ctx.fillRect(0, 0, canvasW, canvasH);

    // object-fit: cover calc
    const scale = Math.max(canvasW / img.width, canvasH / img.height);
    const renderW = img.width * scale;
    const renderH = img.height * scale;
    const offsetX = (canvasW - renderW) / 2;
    const offsetY = (canvasH - renderH) / 2;

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  };

  useMotionValueEvent(currentFrame, "change", (latest) => {
    if (isLoaded) {
      const index = Math.round(latest);
      requestAnimationFrame(() => drawImage(Math.min(index, 143)));
    }
  });

  // Handle Resize setup
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        if (isLoaded) {
          drawImage(Math.round(currentFrame.get()));
        }
      }
    };
    handleResize(); // init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#08080F]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
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


"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from './components/ui/background-boxes';
import NavBar from "./components/NavBar";

export default function NotFound() {
  return (
    
    <div className="min-h-screen relative w-full overflow-hidden bg-neutral-900 flex flex-col items-center justify-center rounded-lg">
      
      <div className="absolute inset-0 w-full h-full bg-neutral-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-8xl text-6xl text-white relative z-20")}>
        404
      </h1>
      <p className="text-center text-4xl mt-2 text-neutral-300 relative z-20">
        Essa página não existe
      </p>
    </div>
  );
}

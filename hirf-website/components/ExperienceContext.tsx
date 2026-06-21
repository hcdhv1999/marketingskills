"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { BuildType } from "@/lib/content";

interface ExperienceState {
  buildType: BuildType | null;
  setBuildType: (t: BuildType) => void;
  entered: boolean;
  setEntered: (v: boolean) => void;
}

const Ctx = createContext<ExperienceState | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [buildType, setBuildType] = useState<BuildType | null>(null);
  const [entered, setEntered] = useState(false);
  return (
    <Ctx.Provider value={{ buildType, setBuildType, entered, setEntered }}>
      {children}
    </Ctx.Provider>
  );
}

export function useExperience() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useExperience must be used within ExperienceProvider");
  return ctx;
}

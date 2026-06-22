"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { BuildType } from "@/lib/content";

interface ExperienceState {
  buildType: BuildType | null;
  setBuildType: (t: BuildType) => void;
  entered: boolean;
  setEntered: (v: boolean) => void;
  // Package requested from the advisor — used to jump straight to it.
  requestedPackage: { name: string; nonce: number } | null;
  requestPackage: (name: string) => void;
}

const Ctx = createContext<ExperienceState | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [buildType, setBuildType] = useState<BuildType | null>(null);
  const [entered, setEntered] = useState(false);
  const [requestedPackage, setRequestedPackage] =
    useState<{ name: string; nonce: number } | null>(null);
  // New nonce each time so repeated requests for the same package re-trigger.
  const requestPackage = (name: string) => setRequestedPackage({ name, nonce: Date.now() });
  return (
    <Ctx.Provider
      value={{ buildType, setBuildType, entered, setEntered, requestedPackage, requestPackage }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useExperience() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useExperience must be used within ExperienceProvider");
  return ctx;
}

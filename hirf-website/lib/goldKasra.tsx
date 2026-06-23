import React from "react";

// Renders Arabic text with the kasra (ِ) that follows ح (so حِرف / حِرفة)
// colored in brand gold. Deterministic + React-native (no DOM hacking).
export function gk(text: string): React.ReactNode {
  if (!text || !text.includes("حِ")) return text;
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "ح" && text[i + 1] === "ِ") {
      parts.push(text.slice(last, i + 1)); // up to and including ح
      parts.push(
        <span key={i} className="kasra-gold" style={{ color: "#d88935" }}>
          {"ِ"}
        </span>
      );
      last = i + 2;
      i++;
    }
  }
  parts.push(text.slice(last));
  return parts;
}

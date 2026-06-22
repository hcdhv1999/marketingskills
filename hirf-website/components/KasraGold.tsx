"use client";

import { useEffect } from "react";

// Colors the kasra (ِ) that follows ح (so حِرف / حِرفة) in brand gold,
// across the whole site, including content swapped in dynamically.
export default function KasraGold() {
  useEffect(() => {
    const KASRA = "ِ";
    const HEH = "ح";
    const seq = HEH + KASRA;
    const GOLD = "var(--color-accent)";

    const processTextNode = (textNode: Text) => {
      const text = textNode.nodeValue;
      if (!text || !text.includes(seq)) return;
      const parent = textNode.parentElement;
      if (!parent) return;
      if (parent.classList.contains("kasra-gold")) return;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return;

      const frag = document.createDocumentFragment();
      let last = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] === HEH && text[i + 1] === KASRA) {
          frag.appendChild(document.createTextNode(text.slice(last, i + 1)));
          const span = document.createElement("span");
          span.className = "kasra-gold";
          span.style.color = GOLD;
          span.textContent = KASRA;
          frag.appendChild(span);
          last = i + 2;
          i++;
        }
      }
      if (last === 0) return;
      frag.appendChild(document.createTextNode(text.slice(last)));
      try {
        textNode.replaceWith(frag);
      } catch {
        /* node detached by React — ignore */
      }
    };

    const processRoot = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        processTextNode(root as Text);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const targets: Text[] = [];
      let n: Node | null;
      while ((n = walker.nextNode())) {
        if (n.nodeValue && n.nodeValue.includes(seq)) targets.push(n as Text);
      }
      targets.forEach(processTextNode);
    };

    const runAll = () => processRoot(document.body);

    runAll();
    // Re-run to catch late content (fonts, animations, client-only sections).
    const t1 = setTimeout(runAll, 300);
    const t2 = setTimeout(runAll, 1200);
    if (document.fonts?.ready) document.fonts.ready.then(runAll).catch(() => {});

    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => processRoot(node));
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      obs.disconnect();
    };
  }, []);

  return null;
}

"use client";

// Slowly drifting abstract shapes — built only from the brand palette.
// Used as a soft, luxurious background layer (purely decorative).
export default function AbstractShapes({ dense = false }: { dense?: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-24 -top-24 h-80 w-80 animate-float-slow rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 animate-float-slower rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-64 w-64 animate-float-slow rounded-full bg-gold/15 blur-3xl" />
      {dense && (
        <>
          <div className="absolute left-1/4 top-10 h-48 w-48 animate-float-slower rounded-full bg-teal/15 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-56 w-56 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
        </>
      )}
    </div>
  );
}

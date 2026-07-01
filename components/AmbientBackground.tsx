/**
 * Ambient section background: a dimmed, looping Ayurvedic macro video (honey on
 * leaves) with a theme-colored scrim over it so foreground text stays readable,
 * plus a soft drifting gradient tint. The video is hidden on mobile and under
 * prefers-reduced-motion, where the gradient tint alone carries the mood.
 */
export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      {/* REPLACE: swap for higher-res / .webm Ayurvedic footage when available */}
      <video
        className="ambient-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/ayurveda-hero.mp4" type="video/mp4" />
      </video>
      {/* Scrim dims the footage toward the theme background for contrast */}
      <div className="ambient-scrim" />
    </div>
  )
}

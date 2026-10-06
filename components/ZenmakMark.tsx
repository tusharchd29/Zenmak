// Simplified rendition of the Zenmak butterfly mark: four overlapping petals
// in navy, purple and lavender. Pure SVG so it stays crisp at any size.
export function ZenmakMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Zenmak"
    >
      <ellipse cx="37" cy="33" rx="27" ry="11" transform="rotate(38 37 33)" fill="#2e3350" />
      <ellipse cx="58" cy="40" rx="30" ry="12.5" transform="rotate(-38 58 40)" fill="#7b69b6" fillOpacity="0.92" />
      <ellipse cx="38" cy="68" rx="28" ry="12" transform="rotate(-38 38 68)" fill="#8f9bd0" fillOpacity="0.9" />
      <ellipse cx="66" cy="70" rx="24" ry="10" transform="rotate(38 66 70)" fill="#a3acdb" fillOpacity="0.85" />
    </svg>
  );
}

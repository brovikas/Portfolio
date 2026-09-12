export default function ToriiSilhouette({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path
        d="M0 380 L180 240 L340 340 L520 200 L720 360 L900 260 L1100 380 L1200 320 L1200 500 L0 500 Z"
        fill="#131313"
      />
      <path
        d="M0 430 L220 320 L420 400 L640 300 L880 420 L1080 350 L1200 410 L1200 500 L0 500 Z"
        fill="#1c1c1c"
      />
      <g stroke="#a1272e" strokeWidth="6" fill="none" opacity="0.55">
        <line x1="480" y1="220" x2="480" y2="420" />
        <line x1="720" y1="220" x2="720" y2="420" />
        <line x1="455" y1="230" x2="745" y2="230" />
        <line x1="440" y1="255" x2="760" y2="255" />
        <line x1="495" y1="270" x2="705" y2="270" />
      </g>
    </svg>
  );
}
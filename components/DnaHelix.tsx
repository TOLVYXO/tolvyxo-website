const points = Array.from({ length: 34 }, (_, i) => {
  const t = i / 33;
  const y = 30 + t * 500;
  const angle = t * Math.PI * 5.2;
  const x1 = 220 + Math.sin(angle) * 76;
  const x2 = 220 - Math.sin(angle) * 76;
  const depth = Math.cos(angle);
  return { y, x1, x2, depth, opacity: 0.34 + (depth + 1) * 0.3 };
});

const pathFor = (side: 1 | -1) => points.map((p, i) => `${i ? "L" : "M"}${220 + side * Math.sin((i / 33) * Math.PI * 5.2) * 76},${p.y}`).join(" ");

export default function DnaHelix() {
  return (
    <div className="dna-helix-wrap" aria-hidden="true">
      <svg className="dna-helix" viewBox="0 0 440 560" role="presentation">
        <defs>
          <linearGradient id="dnaBlue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2858e8"/><stop offset=".48" stopColor="#53b9ff"/><stop offset="1" stopColor="#8b65ef"/></linearGradient>
          <linearGradient id="dnaViolet" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9a70ff"/><stop offset=".5" stopColor="#4c8cff"/><stop offset="1" stopColor="#28c4d8"/></linearGradient>
          <filter id="dnaGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <g className="dna-rungs">
          {points.filter((_, i) => i % 2 === 0).map((p, i) => <line key={i} x1={p.x1} y1={p.y} x2={p.x2} y2={p.y} stroke="#75baff" strokeWidth="3" strokeLinecap="round" opacity={p.opacity * .72} />)}
        </g>
        <path d={pathFor(1)} fill="none" stroke="url(#dnaBlue)" strokeWidth="13" strokeLinecap="round" filter="url(#dnaGlow)" className="dna-strand dna-strand-a" />
        <path d={pathFor(-1)} fill="none" stroke="url(#dnaViolet)" strokeWidth="13" strokeLinecap="round" filter="url(#dnaGlow)" className="dna-strand dna-strand-b" />
        <g className="dna-beads">
          {points.filter((_, i) => i % 2 === 0).map((p, i) => <g key={i}><circle cx={p.x1} cy={p.y} r="7" fill="#a9d9ff" opacity={p.opacity}/><circle cx={p.x2} cy={p.y} r="7" fill="#b7a2ff" opacity={p.opacity}/></g>)}
        </g>
      </svg>
    </div>
  );
}

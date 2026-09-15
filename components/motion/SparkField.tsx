"use client";

const sparks = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 19 + 12) % 88}%`,
  top: `${40 + ((i * 13) % 50)}%`,
  delay: `${(i % 6) * 0.4}s`,
  duration: `${2.8 + (i % 4) * 0.4}s`,
  size: i % 3 === 0 ? 4 : 2,
}));

export function SparkField({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {sparks.map((spark, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.85)] animate-spark"
          style={{
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        />
      ))}
    </div>
  );
}

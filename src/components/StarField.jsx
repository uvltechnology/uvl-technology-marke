import { useMemo } from 'react'

export default function StarField({ count = 80 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() > 0.7 ? 2 : 1,
      isBright: Math.random() > 0.8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 3
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${
            star.isBright
              ? 'bg-soft-white shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]'
              : 'bg-soft-white/60'
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  )
}

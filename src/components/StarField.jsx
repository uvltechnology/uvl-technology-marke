import { useMemo } from 'react'

export default function StarField({ count = 100 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() > 0.85 ? 2.5 : Math.random() > 0.6 ? 1.5 : 1,
      isBright: Math.random() > 0.75,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2.5 + Math.random() * 4,
      delay: Math.random() * 4,
      // Add color variation
      color: Math.random() > 0.8 ? 'rgba(167, 139, 250, 0.9)' : Math.random() > 0.9 ? 'rgba(34, 211, 238, 0.8)' : 'rgba(255, 255, 255, 0.8)'
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            backgroundColor: star.color,
            boxShadow: star.isBright 
              ? `0 0 ${star.size * 3}px ${star.size}px ${star.color}` 
              : 'none',
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            opacity: star.isBright ? 1 : 0.6
          }}
        />
      ))}
    </div>
  )
}

import { ComponentPropsWithoutRef } from "react"

export default function FlowerSpinner({
  className,
  size = 40,
  color = "currentColor",
  ...rest
}: ComponentPropsWithoutRef<"span"> & { size?: number; color?: string }) {
  const petalCount = 12
  const angleStep = 360 / petalCount

  return (
    <span
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuetext="Loading"
      {...rest}
    >
      {Array.from({ length: petalCount }).map((_, i) => (
        <span
          key={i}
          className="absolute left-1/3 top-1/3 -translate-x-1/3 -translate-y-1/3 h-[20%] w-[8%] origin-[50%_150%]"
          style={{
            transform: `rotate(${angleStep * i}deg)`,
            animation: `flowerSpin 1.2s ease-in-out infinite`,
            animationDelay: `${-i * (1.2 / petalCount)}s`,
          }}
        >
          <span
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: color,
              opacity: 0.7,
            }}
          />
        </span>
      ))}
      <style jsx>{`
        @keyframes flowerSpin {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </span>
  )
}
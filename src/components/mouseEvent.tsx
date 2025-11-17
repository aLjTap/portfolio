import React, { type ReactNode, useState } from "react";

function MouseEvent({ children }: { children: ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMovement({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setMousePosition({ x, y });
  }
  return (
    <div
      onMouseMove={handleMouseMovement}
      className="w-[100%] h-[100%] "
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, hsl(var(--muted)) 1%, transparent 25%)`,
      }}
    >
      {children}
    </div>
  );
}

export default MouseEvent;

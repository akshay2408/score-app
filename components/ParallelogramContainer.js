import React from "react";

export default function ParallelogramContainer({
  height = "100px",
  width = "200px",
  transform = "skew(-20deg)",
  background = "#111",
  border = "none",
  borderRadius = "10px",
  children,
}) {
  return (
    <div style={{ width, height, transform, background, border, borderRadius }}>
      {children}
    </div>
  );
}

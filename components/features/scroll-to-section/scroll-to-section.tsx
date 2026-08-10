"use client";

import { ReactNode } from "react";

interface ScrollToSectionProps {
  targetId: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ScrollToSection({
  targetId,
  children,
  className,
  onClick,
}: ScrollToSectionProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    onClick?.();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

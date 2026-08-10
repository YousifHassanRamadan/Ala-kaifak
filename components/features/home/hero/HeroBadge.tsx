import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="w-fit flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
      <Sparkles className="h-4 w-4 text-brand-orange" />

      <span>Trusted Moving Company in UAE</span>
    </div>
  );
}

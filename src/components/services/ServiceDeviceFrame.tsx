import type { ReactNode } from "react";

export default function ServiceDeviceFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-zinc-200 bg-[#0b0d17] p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#f87171]" />
        <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
        <span className="h-2 w-2 rounded-full bg-[#34d399]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-zinc-100">
        {children}
      </div>
    </div>
  );
}

"use client";
import { Card } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="h-12 w-12 shrink-0 flex items-center justify-center !rounded-lg bg-gray-900 text-gray-50">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <div className="w-full font-semibold !text-gray-500">{children}</div>
    </div>
  );
}

export default ResumeItem;

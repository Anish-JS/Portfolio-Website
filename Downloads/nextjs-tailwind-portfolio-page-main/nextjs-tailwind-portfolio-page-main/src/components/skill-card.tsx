"use client";
import { Card, CardBody, Chip } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  types: string[];
}

export function SkillCard({ icon: Icon, title, types }: SkillCardProps) {
  return (
    <div className="bg-transparent shadow-sm text-gray-800">
      <div className="grid justify-center text-center ">
        <div className="flex flex-col">
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
            <Icon className="h-6 w-6" strokeWidth={2} />
          </div>
          <div className="mb-2 font-black text-xl">{title}</div>
        </div>
        <div className="px-8 font-normal !text-gray-500">
          {types.map((type) => (
            <Chip key={type} value={type} variant="ghost" className="m-3" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;

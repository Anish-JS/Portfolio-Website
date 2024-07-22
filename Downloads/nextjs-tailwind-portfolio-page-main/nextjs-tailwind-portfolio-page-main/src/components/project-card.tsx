"use client";

import { Card, CardBody, Button } from "@material-tailwind/react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  sourceUrl: string;
  LiveUrl: string;
}

export function ProjectCard({
  title,
  description,
  sourceUrl,
  LiveUrl,
}: ProjectCardProps) {
  return (
    <div className="p-4 m-4 bg-gray-200 rounded-xl shadow-sm">
      <div className="p-0">
        <div className="text-blue-gray-900 transition-colors hover:text-gray-800">
          <div className="mb-2 text-2xl">{title}</div>
        </div>
        <div className="mb-6 font-normal !text-gray-700 text-md">
          {description}
        </div>
        <Link href={LiveUrl} className="m-1">
          <button className="bg-gray-900 text-gray-50 px-4 py-2 text-sm rounded-md">
            Live Application
          </button>
        </Link>

        <Link href={sourceUrl} className="m-1">
          <button className="border border-blue-gray-900 text-gray-900 px-4 py-2 rounded-md text-sm">
            Source Code
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

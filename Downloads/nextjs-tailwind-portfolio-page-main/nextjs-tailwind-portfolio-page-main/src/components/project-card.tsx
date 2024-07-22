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
    <Card shadow={true} className="p-4 m-4 bg-gray-200">
      <CardBody className="p-0">
        <div className="text-blue-gray-900 transition-colors hover:text-gray-800">
          <div className="mb-2 text-3xl">{title}</div>
        </div>
        <div className="mb-6 font-normal !text-gray-700 text-lg">
          {description}
        </div>
        <Link href={LiveUrl} className="m-1">
          <Button color="gray" variant="gradient" size="sm">
            Live Application
          </Button>
        </Link>

        <Link href={sourceUrl} className="m-1">
          <Button color="gray" variant="outlined" size="sm">
            Source Code
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;

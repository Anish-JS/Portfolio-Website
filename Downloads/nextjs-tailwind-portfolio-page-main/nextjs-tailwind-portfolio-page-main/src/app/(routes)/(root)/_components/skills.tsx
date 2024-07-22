"use client";

import {
  CircleStackIcon,
  CloudIcon,
  SwatchIcon,
  DocumentTextIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: CodeBracketSquareIcon,
    title: "Programming Languages",
    types: [
      "TypeScript",
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "R Programming",
      "C/C++",
    ],
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    types: ["MERN (React)", "MEAN (Angular)", "Next.js"],
  },
  {
    icon: CircleStackIcon,
    title: "Databases",
    types: ["SQL", "SQLite", "PostgreSQL", "NoSQL", "MongoDB"],
  },
  {
    icon: CloudIcon,
    title: "Cloud",
    types: ["AWS", "Azure"],
  },
  {
    icon: DocumentTextIcon,
    title: "Code Version Control",
    types: ["Git", "GitHub"],
  },
];

export function Skills() {
  return (
    <section className="px-8 mt-2">
      <div className="container mx-auto mb-20 text-center  font-semibold">
        <div color="blue-gray" className="mb-4 text-2xl lg:text-4xl">
          My Skills
        </div>
        <div
          // variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m glad to have the privilege of experiencing various
          technologies and programming paradigms with a strong understanding of
          computer technology and a wholesome exposure to different areas of
          expertise. The follwing are few of the many skills that I possess and
          tirelessly work to become better and better day-by-day
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

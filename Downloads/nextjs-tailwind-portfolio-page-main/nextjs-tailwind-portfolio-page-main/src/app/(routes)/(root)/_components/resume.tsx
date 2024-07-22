"use client";

import { Button } from "@material-tailwind/react";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { Medal } from "lucide-react";
import Link from "next/link";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Technology in Computer Science and Business Systems",
  },
  {
    icon: Medal,
    children: "Gold Medalist in batch 2019-2023",
  },
];

export function Resume() {
  return (
    <section className="px-8 pt-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center  gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="lg:text-4xl text-2xl font-semibold">My Resume</div>
          <div className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Full Stack Developer with the zeal and
            enthusiasm to contribute and deliver value in alignment with
            business objectives. I am looking for a new challenging role in a
            dynamic environment where I can apply my skills and learn new ones.
          </div>
          <Link href="https://drive.google.com/file/d/1PTVviWzgMKntHhiqLPRYIovefSCIuFRc/view?usp=sharing">
            <Button
              variant="gradient"
              color="gray"
              className="flex items-center gap-2"
            >
              View
            </Button>
          </Link>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

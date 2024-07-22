"use client";

import Image from "next/image";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <div
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl font-semibold"
          >
            Welcome to my <br /> Portfolio!
          </div>
          <div className="mb-4 !text-gray-500 md:pr-16 xl:pr-28 text-lg">
            <p>
              I'm Anish Singaraiah, a passionate Software Developer. As a
              Computer Science and Business Systems graduate with a gold medal
              for academic excellence, I excel in JavaScript, TypeScript,
              Python, HTML, CSS, C/C++, ReactJS, AngularJS, Next.js and SQL
              databases. During my Software Engineer Internship at Tata
              Consultancy Services, I developed a dashboard for Level 3
              Autonomous vehicles using AngularJS and contributed to data
              annotation for LIDAR sensor images. I am seeking a challenging
              role in a dynamic environment to apply and expand my skills in
              cutting-edge technologies
            </p>
          </div>
        </div>
        <Image
          width={512}
          height={512}
          alt="team work"
          src="/image/image-10.jpg"
          className="h-[30rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;

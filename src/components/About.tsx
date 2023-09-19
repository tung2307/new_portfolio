import { useRouter } from "next/router";
import React from "react";

export default function About() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen pb-20 pt-28 md:pt-32">
      <section className="flex flex-col gap-5 px-10 md:px-40 ">
        <h1 className="w-36 rounded-lg border-2 p-1 text-center text-2xl shadow">
          ABOUT ME
        </h1>
        <p className="w-full text-2xl font-bold md:w-[70vw] md:text-4xl">
          A recent Computer Science graduate from SFSU,
        </p>
        <p className="w-full text-2xl font-bold md:w-[70vw] md:text-4xl">
          Currently residing in San Mateo, CA.
        </p>
        <div className="flex w-full flex-col gap-8 text-lg md:w-[50vw]">
          <p>
            Passionate about creating user-centric digital solutions, I am eager
            to contribute my skills in a dynamic environment.
          </p>
          <p>
            Self-projects allows me to explore innovative technologies, paving
            the way for seamless and enriching user experiences.
          </p>
        </div>
        <div
          className="w-40 cursor-pointer text-blue-300 underline"
          onClick={() => {
            void router.push("/about");
          }}
        >
          More About Me {">>>"}
        </div>
      </section>
    </div>
  );
}

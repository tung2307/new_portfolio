import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
type ListProjectProps = {
  name: string;
  description: string;
  link: string;
  stack: string[];
};

function ListProject({ name, description, link, stack }: ListProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasExpanded, setHasExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current && !hasExpanded) {
      const { top, height } = containerRef.current.getBoundingClientRect();
      const expansionPoint = window.innerWidth < 768 ? height / 5 : height / 5; // Check for md breakpoint
      if (top <= window.innerHeight / 2 - expansionPoint) {
        setIsExpanded(true);
        setHasExpanded(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasExpanded]);

  return (
    <div
      ref={containerRef}
      className={`flex  w-screen justify-center ${
        isExpanded ? "" : "justify-center"
      } md:items-center`}
    >
      <div className="flex w-full flex-col transition-all duration-[1500ms] md:flex-row">
        <div
          className={`transform px-5 transition-all duration-[1500ms] md:px-0 ${
            isExpanded ? "w-full md:w-[50vw]" : "w-full md:w-5/6"
          } flex items-center justify-center`}
        >
          <div className="relative h-40 w-full rounded-xl  md:h-60 md:w-96 lg:h-80 lg:w-[35rem] ">
            <Image
              alt=""
              src={"/" + name + ".png"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg border shadow transition-all duration-[1500ms]"
            />
          </div>
        </div>

        <div
          className={`transform transition-all duration-[1500ms] ${
            isExpanded
              ? "w-screen px-4 opacity-100 md:w-[50vw]"
              : "w-full px-4 opacity-0 md:w-[50vw]"
          }`}
        >
          <div className="proxima-nova flex w-full flex-col px-2 pt-5 md:w-96 md:pt-0 lg:w-[30rem]">
            <div className=" flex flex-wrap font-thin  md:text-lg lg:text-2xl">
              {description}
            </div>
            <div className="flex flex-row flex-wrap gap-5 pt-5 text-black">
              {stack.map((tech, index) => (
                <div
                  key={index}
                  className="rounded border bg-gray-300 px-2 py-1 text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="mt-5 flex h-8 w-16 cursor-pointer items-center justify-center rounded-2xl border text-base hover:bg-gray-500 hover:text-white md:h-10  md:w-20 md:text-lg">
              <Link href={link} target="_blank">
                Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProject;

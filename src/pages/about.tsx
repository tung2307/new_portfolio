import { UploadButton, UploadDropzone } from "@uploadthing/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Video from "~/components/Video";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import { OurFileRouter, ourFileRouter } from "~/server/uploadthing";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const section = ["/", "/about", "/#contact-section"];
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const router = useRouter();
  const general = [
    "Programming",
    "Problem Solving",
    "Software Development",
    "Googling",
    "Databases",
    "Figma",
    "Lightroom",
    "Version Control",
    "Research & Continuous Learning",
    "Soft Skills",
    "Web Development",
    "Computer Architecture",
  ];

  const engineer = [
    "HTML/CSS",
    "React",
    "NextJS",
    "TypeScript",
    "NodeJs",
    "ExpressJs",
    "REST API",
    "MySQL",
    "Prisma",
    "TRPC",
    "AWS",
    "Heroku",
    "Vercel",
    "PlanetScale",
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const introTimer = setTimeout(() => {
        setIsFadingOut(true);
        const fadeOutTimer = setTimeout(() => {
          setIsIntroDone(true);
        }, 1000); // This duration should match your fade-out animation duration

        return () => clearTimeout(fadeOutTimer);
      }, 1000); // Adjust the time to match your animation duration

      return () => clearTimeout(introTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (url: string, item: string) => {
    if (url) {
      if (item === "home") {
        void router.push(url, undefined, { scroll: true }).then(() => {
          location.reload();
        });
      } else {
        void router.push(url, undefined, { scroll: true });
      }
    }
  };

  return (
    <>
      <Head>
        <title>About Me - Tung Nguyen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link href="URL_TO_PROXIMA_NOVA_FONT_CSS" rel="stylesheet" />
        <style>
          {`
          .proxima-nova {
            font-family: 'Proxima Nova', sans-serif;
          }
          // other styles
        `}
        </style>
      </Head>

      {(isLoading || !isIntroDone) && (
        <div
          className={`intro-animation fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen items-center justify-center bg-gray-500 text-white ${
            isFadingOut
              ? "opacity-0 transition-opacity duration-1000"
              : "opacity-100"
          }`}
        >
          <div className="absolute left-0 flex h-full w-1/2 items-center justify-end">
            <span
              className={`pr-1 text-4xl duration-1000 sm:pr-2 ${
                isLoading ? "animate-slideInFromLeft" : "animate-slideOutUp"
              }`}
            >
              Tung
            </span>
          </div>
          <div className="absolute right-0 flex h-full w-1/2 items-center justify-start">
            <span
              className={`text-4xl duration-1000 md:pl-2 ${
                isLoading ? "animate-slideInFromRight" : "animate-slideOutDown"
              }`}
            >
              Nguyen
            </span>
          </div>
        </div>
      )}

      <div className="flex h-12 flex-row justify-center  border-b  text-lg sm:text-xl md:justify-between  ">
        <Link
          href={"/"}
          className=" proxima-nova hidden items-center px-20  text-3xl font-bold md:flex"
        >
          Tung Nguyen
        </Link>
        <div className="flex flex-row gap-10 px-5 md:gap-20 md:px-40">
          {["home", "about", "contact"].map((item, index) => (
            <div
              key={item}
              className="flex cursor-pointer items-center justify-center"
              onClick={() => handleNavigation(section[index] ?? "", item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
      </div>
      {/* <UploadDropzone<OurFileRouter>
        endpoint="videoUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}
      <div className="relative h-[50vh] w-screen overflow-hidden md:h-[60vh]">
        <Video />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center bg-black bg-opacity-60 px-5 md:px-40">
          <div className="flex flex-col text-white">
            <div className="flex flex-col gap-3 text-xl font-bold md:gap-6 md:text-4xl">
              <div>Greetings, I&apos;m Tung Nguyen. </div>
              <div>
                A budding software engineer and Computer Science graduate, now
                pursuing Business Administration in the vibrant landscapes of
                California, USA.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full justify-center pl-0 pt-16 md:pl-20 md:pt-24 ">
          <div className="relative h-80 w-80 lg:h-96 lg:w-96">
            <Image
              src="/Logo.png"
              alt=""
              layout="fill"
              objectFit="cover" // You can change this to "contain" if you don’t want to crop the image.
              objectPosition="center"
            />
          </div>
        </div>
        <div className="w-full px-10 pt-8 md:px-20 md:pt-16">
          <div
            className="proxima-nova flex flex-col gap-10 text-lg text-gray-700 md:text-xl"
            style={{
              lineHeight: "2em",
              fontWeight: "100",
            }}
          >
            <div>
              With a Bachelor&apos;s degree in Computer Science from San
              Francisco State University, I have transitioned from academia to
              hands-on experience in web development. My deep dive into backend
              technologies and cloud platforms has allowed me to craft seamless
              user experiences using modern tools like Next.js, Express, and
              Node.js.
            </div>

            <div>
              Starting at City College of San Francisco, my self-initiated
              projects have been a testament to my growing technical skills and
              problem-solving capabilities. While actively seeking software
              engineering roles during my OPT, I further developed my expertise
              in web development and backend technologies.
            </div>

            <div>
              Currently pursuing an Associate&apos;s degree in Business
              Administration at the College of San Mateo, I am expanding my
              knowledge in the business domain to complement my technical
              background. This unique combination of skills positions me to
              contribute effectively to forward-thinking teams, bridging the gap
              between technology and business.
            </div>

            <div>
              I am eager to apply my diverse skill set in a role that aligns
              with my passion for creating transformative digital solutions.
              Please don&apos;t hesitate to reach out if you&apos;re looking for
              someone dedicated to driving positive global change through
              innovative technology.
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-screen flex-col gap-6 px-10 pt-10 md:px-20 md:pt-20">
        <div className="text-2xl font-bold md:text-4xl">Education</div>
        <div className="flex flex-col">
          <div className="proxima-nova text-lg font-bold md:text-xl">
            City College of San Francisco | 2017-2020
          </div>
          <div className="proxima-nova text-base md:text-lg">
            Computer Science Associate degrees - Transfer to SFSU
          </div>
        </div>
        <div className="flex flex-col">
          <div className="proxima-nova text-lg font-bold md:text-xl">
            San Francisco State University | 2020-2023
          </div>
          <div className="proxima-nova text-base md:text-lg">
            Bachelor of Science in Computer Science - Graduated
          </div>
        </div>
        <div className="flex flex-col">
          <div className="proxima-nova text-lg font-bold md:text-xl">
            San Mateo Community College | 2024-Current
          </div>
          <div className="proxima-nova text-base md:text-lg">
            Associate in Business Administration
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-10 pt-10 md:flex-row md:gap-0 md:px-20 md:pb-0 md:pt-20">
        <div className=" proxima-nova flex flex-col gap-10">
          <div className="w-[50vw] text-2xl font-bold md:text-4xl">
            Experience
          </div>
          <div>
            <div className=" text-lg md:text-xl">Web Developer</div>
            <div className="text-thin text-gray-600">
              Freelance Designer, Developer | May 2023 - June 2024
            </div>
          </div>
          <div>
            <div className="text-lg  md:text-xl ">
              CSC600 Programming Paradigms and Languages SFSU
            </div>
            <div className="text-thin text-gray-600">
              Project Assistant, Developer | Feb 2023 - May 2023
            </div>
          </div>
          <div>
            <div className="text-lg  md:text-xl">
              CSC648 Software Engineneering SFSU
            </div>
            <div className="text-thin text-gray-600">
              Backend Developer | Sep 2022 - Dec 2022
            </div>
          </div>
          <div>
            <div className="text-lg  md:text-xl">
              CSC642 Human-Computer Interaction SFSU
            </div>
            <div className="text-thin text-gray-600">
              Developer | Sep 2022 - Dec 2023
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold md:text-4xl">Skills</div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-lg font-semibold md:text-xl">General</div>
              <div className="w-62 flex flex-row flex-wrap gap-2 sm:w-80 md:w-96">
                {general.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border bg-gray-600 px-2 py-1 text-sm text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-lg font-semibold md:text-xl">
                Engineering
              </div>
              <div className="w-62 flex flex-row flex-wrap gap-2 sm:w-80 md:w-96">
                {engineer.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border bg-gray-600 px-2 py-1 text-sm text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pt-10 md:px-20">
        <div className="relative h-10 w-20 cursor-pointer after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-black after:transition-all after:duration-500 after:ease-in-out hover:after:h-[15px] md:h-12 md:w-24">
          <div
            className="h-8 text-center text-xl md:text-2xl"
            onClick={() => {
              window.open("/Resume.pdf", "_blank");
            }}
          >
            Resume
          </div>
        </div>
      </div>
      <div className="flex w-screen items-center justify-center py-20 md:py-40">
        <div className="flex w-full flex-col gap-5">
          <div className="text-center text-4xl font-bold md:text-6xl">
            STAY IN TOUCH
          </div>
          <div className="text-center">
            <Link
              href="mailto:tung.nguyen23797@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold transition hover:text-gray-500 sm:text-2xl md:text-4xl"
            >
              tung.nguyen23797@gmail.com
            </Link>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-row gap-10">
              <Link
                href="https://www.linkedin.com/in/tung-nguyen-413171146/"
                target="_blank"
                className="cursor-pointer"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="https://github.com/tung2307"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 md:px-20 md:py-10">
        <div>Copyright © Tung Nguyen.</div>
        <div>
          Video courtesy of{" "}
          <Link
            href="https://www.pexels.com/videos/"
            className="text-blue-600 underline"
          >
            Pexels
          </Link>
        </div>
      </div>
    </>
  );
}

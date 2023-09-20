import { UploadButton, UploadDropzone } from "@uploadthing/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Video from "~/components/Video";
import "@uploadthing/react/styles.css";
import { OurFileRouter, ourFileRouter } from "~/server/uploadthing";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const section = ["/", "/about", "/#contact-section"];
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        setIsLoading(false);
      }
      setIsLoading(false);
      const introTimer = setTimeout(() => {
        setIsFadingOut(true);
        const fadeOutTimer = setTimeout(() => {
          setIsIntroDone(true);
        }, 1000); // Duration of the fade-out animation

        return () => clearTimeout(fadeOutTimer);
      }, 1000); // Adjust the time to match your animation duration

      return () => clearTimeout(introTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setIsLoading(false);
  };

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
              className={`pr-2 text-4xl duration-1000 ${
                isLoading ? "animate-slideInFromLeft" : "animate-slideOutUp"
              }`}
            >
              Tung
            </span>
          </div>
          <div className="absolute right-0 flex h-full w-1/2 items-center justify-start">
            <span
              className={`pl-2 text-4xl duration-1000 ${
                isLoading ? "animate-slideInFromRight" : "animate-slideOutDown"
              }`}
            >
              Nguyen
            </span>
          </div>
        </div>
      )}

      <div className="flex h-12 flex-row justify-end gap-20 border-b px-40 text-xl ">
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
      <div className="relative h-[60vh] w-screen overflow-hidden">
        <Video onLoad={handleVideoLoad} />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-60 px-40">
          <div className="flex flex-col text-white">
            <div className="flex flex-col gap-6 text-4xl font-bold">
              <div>Greetings, I&apos;m Tung Nguyen. </div>
              <div>
                A budding software engineer nestled in the vibrant landscapes of
                California, USA.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div>
        Greetings, I am Tung Nguyen, a budding software engineer nestled in the
        vibrant landscapes of California, USA. Having honed my craft through a
        robust educational journey culminating in a Computer Science degree from
        SFSU, I stand on the cusp of translating academic knowledge into
        real-world innovations. Currently engrossed in a self-initiated role as
        a Web Developer, I find myself delving deep into the intricate web of
        backend technologies and cloud platforms, constantly nurturing my
        passion for creating seamless and impactful user experiences. From
        conceptualization to deployment, I have been hands-on, integrating and
        experimenting with cutting-edge technologies such as Next.js, Express,
        and Node. Apart from my educational journey that began at the City
        College of San Francisco, my self-driven projects have been my playing
        field, enabling me to showcase my technical acumen and problem-solving
        prowess. I pride myself on being proficient with a host of programming
        languages and frameworks, all while mastering the art of effective
        googling, a skill that has steered me through many coding challenges. As
        I venture forth, seeking opportunities to intern as a software engineer,
        I am eager to bring my dynamic blend of skills and passion to a
        forward-thinking team. With a knack for both web development and backend
        technologies, I am well-prepared to contribute my bit towards crafting
        digital solutions that resonate with users on a global scale. Feel free
        to reach out to me at tung.nguyen23797@gmail.com, as I keenly look
        forward to embarking on a journey where I can channel my enthusiasm and
        knowledge towards creating products that not only facilitate seamless
        information transition but also possess the potential to transform lives
        positively.

        Video by KEHN HERMANO: https://www.pexels.com/video/sunrise-at-golden-gate-bridge-6657004/
      </div> */
}

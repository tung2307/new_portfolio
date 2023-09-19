import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Video from "~/components/ Video";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const section = ["/", "/about", "/#contact-section"];
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>About Me - Tung Nguyen</title>
      </Head>

      <div className="flex h-12 flex-row justify-end gap-20 border-b px-40 text-xl ">
        {["home", "about", "contact"].map((item, index) => (
          <div
            key={item}
            className="flex cursor-pointer items-center justify-center"
            onClick={() => {
              const url = section[index];
              if (url) {
                void router.push(url, undefined, { scroll: true });
              }
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </div>
        ))}
      </div>
      <div className="relative h-[60vh] w-screen overflow-hidden">
        <Video />
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

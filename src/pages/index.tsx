import { useEffect, useState } from "react";
import Head from "next/head";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import ReorderIcon from "@mui/icons-material/Reorder";
import NavBar from "~/components/NavBar";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from "@mui/icons-material/Send";
import About from "~/components/About";
import Contact from "~/components/Contact";
import Project from "~/components/Project";
import Image from "next/image";
export default function Home() {
  const [lightMode, setLightMode] = useState(true);
  const [bounce, setBounce] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLight() {
    setBounce(true);
    setTimeout(() => setBounce(false), 1000); // Reset bounce state after 1 second
    setLightMode((prevMode) => !prevMode);
  }
  const sections = [
    { id: "home-section", icon: <HomeIcon />, name: "Home" },
    { id: "project-section", icon: <AssignmentIcon />, name: "Project" },
    { id: "about-section", icon: <PersonIcon />, name: "About" },
    { id: "contact-section", icon: <SendIcon />, name: "Contact" },
  ];
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project-section");
      const homeSection = document.getElementById("home-section");

      if (projectSection && homeSection) {
        const projectSectionTop = projectSection.offsetTop - 10;
        const homeSectionHalf = homeSection.offsetHeight / 2;

        if (window.scrollY > projectSectionTop) {
          setNavVisible(true);
        } else if (window.scrollY < homeSectionHalf) {
          setNavVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Tung Nguyen Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden">
        <Image src="/Logo.png" alt="" fill />
      </div>
      <div
        className={`fixed left-0 right-0 top-0 z-50 px-4 py-2 transition-all duration-1000 ${
          navVisible ? "visible opacity-100" : "invisible opacity-0"
        } ${!lightMode ? "bg-white text-black" : "bg-[#09092e] text-white"}`}
      >
        <div className="flex w-full justify-center">
          <NavBar />
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed top-0 z-10 h-screen w-full border bg-white text-black transition-transform duration-500 ease-in-out"
          style={{ transform: "translateX(0%)" }}
        >
          <div className="px-10 py-40 text-xl">
            <div
              className="mb-4 cursor-pointer"
              onClick={() => {
                const element = document.getElementById("home-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              <span className="flex items-center">
                <HomeIcon />
                &nbsp; Home
              </span>
            </div>
            <div
              className="mb-4 cursor-pointer"
              onClick={() => {
                const element = document.getElementById("work-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              <span className="flex items-center">
                <AssignmentIcon />
                &nbsp; Projects
              </span>
            </div>
            <div
              className="mb-4 cursor-pointer"
              onClick={() => {
                const element = document.getElementById("about-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              <span className="flex items-center">
                <PersonIcon />
                &nbsp; About
              </span>
            </div>
            <div
              className="mb-4 cursor-pointer"
              onClick={() => {
                const element = document.getElementById("contact-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              <span className="flex items-center">
                <SendIcon />
                &nbsp; Contact
              </span>
            </div>
          </div>
        </div>
      )}
      <div
        className={`select-none ${
          lightMode ? "bg-white text-black" : "bg-[#09092e] text-white"
        }`}
      >
        <div
          id="home-section"
          className={`mx-auto h-screen w-screen p-10 transition-colors duration-500 md:p-20 `}
        >
          <div className="flex h-full w-full flex-col">
            <div className="flex flex-row items-center justify-between md:hidden">
              <div
                className={
                  menuOpen
                    ? "z-20 cursor-pointer text-black"
                    : "z-20 cursor-pointer"
                }
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <ReorderIcon fontSize="large" />
              </div>
              <div
                className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border bg-gray-100 p-4 text-gray-500 shadow ${
                  bounce ? "animate-bounce" : ""
                }`}
                onClick={handleLight}
              >
                {lightMode ? (
                  <LightModeIcon fontSize="medium" />
                ) : (
                  <NightlightRoundIcon fontSize="medium" />
                )}
              </div>
            </div>
            <div className="flex h-full flex-row justify-between">
              <div className="flex select-none items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-5xl md:text-7xl">
                    Hi there, my name is{" "}
                    <strong
                      className={
                        lightMode ? "text-[#1178ded1]" : "text-[#e65d74]"
                      }
                    >
                      Tung Nguyen
                    </strong>
                    .
                  </p>
                  <p className="text-xl md:text-3xl">
                    A Web Developer with a Computer Science degree and currently
                    pursuing Business Administration in San Mateo, California.
                  </p>
                  <div className="pt-10">
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
                </div>
              </div>
              <div className="hidden w-40 flex-col items-end gap-20  md:flex">
                <div
                  className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border bg-gray-100 p-4 text-gray-500 shadow ${
                    bounce ? "animate-bounce" : ""
                  }`}
                  onClick={handleLight}
                >
                  {lightMode ? (
                    <LightModeIcon fontSize="large" />
                  ) : (
                    <NightlightRoundIcon fontSize="large" />
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  {sections.map(({ id, icon }) => (
                    <div
                      key={id}
                      className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border shadow ${
                        !lightMode
                          ? "hover:bg-white hover:text-black"
                          : "hover:bg-[#09092e] hover:text-white"
                      }`}
                      onClick={() => {
                        const element = document.getElementById(id);
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="project-section" className="section min-h-screen">
          <Project />
        </div>
        <div
          id="about-section"
          className={`section flex min-h-screen justify-start `}
        >
          <About />
        </div>
        <div
          id="contact-section"
          className="section flex min-h-[60vh]  md:min-h-[50vh]"
        >
          <Contact />
        </div>
      </div>
    </>
  );
}

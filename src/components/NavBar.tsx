import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project-section");
      const aboutSection = document.getElementById("about-section");
      const contactSection = document.getElementById("contact-section");

      const sections = [
        { id: "project", element: projectSection },
        { id: "about", element: aboutSection },
        { id: "contact", element: contactSection },
      ];

      for (const { id, element } of sections) {
        if (
          element &&
          window.scrollY >= element.offsetTop &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          setCurrentSection(id);
          break;
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
      <div className="flex flex-row gap-2 md:gap-6">
        {["home", "project", "about", "contact"].map((section) => (
          <div
            key={section}
            className={`transform cursor-pointer items-center justify-center border-gray-300 px-2 py-1 transition-transform duration-200 hover:-translate-y-1 hover:rounded hover:bg-gray-100 hover:text-black hover:shadow-md md:px-4 md:py-2 ${
              currentSection === section
                ? "rounded bg-[#e65d74] text-white "
                : null
            }`}
            onClick={() => {
              const element = document.getElementById(`${section}-section`);
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>
    </>
  );
}

import ListProject from "./ListProject";

export default function Project() {
  const projects = [
    {
      name: "Wildwes",
      description:
        "Wild Wes Saltwater Sportfishing offers unforgettable fishing experiences, led by Captain Wes and his skilled crew. Operating out of the Bay Area, the company provides guided trips for enthusiasts looking to catch salmon, halibut, and more, while fostering a passion for sustainable sportfishing.",
      link: "https://wildwes.vercel.app/",
      stack: ["NextJs"],
    },
    {
      name: "Classwhisper",
      description:
        "Classwhisper is a platform where students can review and rate their professors based on teaching performance. It provides insights to help students make informed class decisions and promotes academic transparency in Vietnam.",
      link: "https://classwhisper.vercel.app/",
      stack: ["NextJs", "Prisma", "tRPC"],
    },
    {
      name: "Portfolio",
      description:
        "A website portfolio showcases an my work, highlighting my skills and achievements in web development or design. It serves as a digital resume, allowing professionals to demonstrate my expertise and attract potential employers or clients.",
      link: "https://new-portfolio-drab-alpha.vercel.app/",
      stack: ["NextJs", "tRPC"],
    },
    {
      name: "SFSU Study Partner",
      description:
        "SFSU Study Partner enhances learning through collaborative study sessions. Create, schedule, and invite friends to your personalized study room.",
      link: "https://sfsu-study-partner.vercel.app/",
      stack: ["React", "FireBase"],
    },
  ];

  return (
    <>
      <div>
        <div>
          <div className=" proxima-nova w-full px-10 text-xl font-bold md:px-20 md:text-2xl">
            Feature Projects
          </div>
          <div className="flex flex-col gap-40 pt-10">
            {projects.map((project, index) => (
              <div key={index}>
                <ListProject
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  stack={project.stack}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

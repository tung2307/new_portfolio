import ListProject from "./ListProject";

export default function Project() {
  const projects = [
    {
      name: "Skillspoke",
      description:
        "Skillspoke is a global platform connecting customers with service providers, from plumbers to tutors. Targeting the rapidly advancing Vietnamese tech market, the company aims to meet the growing demand for efficient and cost-effective service solutions.",
      link: "https://skillspokev2.vercel.app/",
      stack: ["NextJs", "Prisma", "tRPC", "NodeJs", "ExpressJS"],
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
    {
      name: "EzRent",
      description:
        "EzRent promotes transparency in rentals by allowing tenants to share experiences and rate properties. Landlords can boost their reputation through positive reviews, benefiting both renters and property owners.",
      link: "http://13.57.15.24:8080/",
      stack: ["MySQL", "ExpressJs", "NodeJs", "HTML/CSS"],
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

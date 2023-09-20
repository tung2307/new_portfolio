import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row gap-2 md:gap-6">
        {["home", "project", "about", "contact"].map((section) => (
          <div
            key={section}
            className="transform cursor-pointer items-center justify-center border-gray-300 px-2 py-1 transition-transform duration-200 hover:-translate-y-1 hover:rounded hover:bg-gray-100 hover:text-black hover:shadow-md md:px-4 md:py-2"
            onClick={() => {
              if (section === "about") {
                void router.push("/about");
              } else {
                const element = document.getElementById(`${section}-section`);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>
    </>
  );
}

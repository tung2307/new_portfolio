import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col gap-5 px-5 pt-10 md:px-32 md:pt-0 lg:px-40">
          <Link
            href="mailto:tung.nguyen23797@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold transition hover:text-gray-500 sm:text-2xl md:text-4xl"
          >
            tung.nguyen23797@gmail.com
          </Link>
          <div className="w-full text-lg font-thin md:w-[40rem]">
            Always eager to explore new ventures when my schedule allows. My aim
            is to redefine the boundaries of digital innovation. Excited to
            connect and see where our synergies lie. Cheers!
          </div>
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
          <div>
            <div>Copyright © Tung Nguyen. </div>
            <div>Icons courtesy of Material UI</div>
          </div>
        </div>
      </div>
    </>
  );
}

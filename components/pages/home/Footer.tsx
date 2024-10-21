import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} AI Toolkit. All rights reserved.
        </p>

        <div className="flex justify-center items-center ">
          <Link
            href="https://www.linkedin.com/in/numanjvd82"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <LinkedInLogoIcon />
          </Link>
          <Link
            href="https://github.com/numanjvd82"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <GitHubLogoIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}

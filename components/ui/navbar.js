import Link from "next/link";
import { ModeToggle } from "./theme-btn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 backdrop-blur-3xl z-10 flex justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-white shadow-md">
      <div>
        <Link href="/" className="text-2xl font-bold text-purple-600 hover:underline">
          Adeel Tahir
        </Link>
      </div>
      <ul className="flex space-x-6 list-none items-center">
        <li>
          <Link href="/AboutMe" className="hover:underline font-semibold ">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/Services" className="hover:underline font-semibold  ">
            Services
          </Link>
        </li>
        <li>
          <Link href="/Projects" className="hover:underline font-semibold " >
            Projects
          </Link>
        </li>
        <li>
          <Link href="/ContactMe" className="hover:underline font-semibold ">
            Contact Me
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}

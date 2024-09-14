import Link from "next/link";
import { ModeToggle } from "./theme-btn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 backdrop-blur-3xl z-10 flex justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-white">
      <div>
        <Link href="/" className="hover:underline">
          Adeel Tahir
        </Link>
      </div>
      <ul className="flex space-x-4 list-none items-center">
        <li>
          <Link href="/AboutMe" className="hover:underline">
           About Me
          </Link>
        </li>
        <li>
          <Link href="/Services" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="/Projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/ContactMe" className="hover:underline">
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

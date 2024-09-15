import Link from 'next/link';
import {  FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 realtive bottom-0 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Navigation Links */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/AboutMe" className="hover:underline">
                    About me
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/Services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/Projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/ContactMe" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Follow me</h2>
              <div className="flex space-x-4">
                
                <a href="https://github.com/AdeelTahir-SE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com/adeeltahir150/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/adeel-tahir-fullstackdeveoper/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Contact me</h2>
              <p className="mb-2">Islamabad, Nust</p>
              <p className="mb-2">Email: adeeltahir6a@gmail.com</p>
              <p>Phone: 03001124769</p>
              <p>Phone: 03334062285</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; 2024 . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-2">1234 Street Name</p>
              <p className="mb-2">City, State, 12345</p>
              <p className="mb-2">Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

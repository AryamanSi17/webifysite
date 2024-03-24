import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:flex">
        <div className="mb-4 lg:mb-0 lg:mr-8"> {/* Add margin to separate the sections on large screens */}
          <h3 className="text-md font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-neutral-300" />
              <a href="mailto:aryamansi1712@gmail.com" className="text-neutral-300 hover:text-white">aryamansi1712@gmail.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-neutral-300" />
              <span className="text-neutral-300">+91 8630756879</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Address</h3>
          <p className="text-neutral-300">
            Dr BR Ambedkar National Institute of Technology, Jalandhar
          </p>
        </div>
      </div>
      <div className="mt-4 lg:mt-0"> {/* Ensure this is aligned at the bottom or to the right on larger screens */}
        <p className="text-neutral-300 text-sm">
          © 2024 Webify Business. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

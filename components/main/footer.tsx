import React from 'react';
import { Socials } from '@/constants';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-50 text-[#ff545d] py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Social Media Links */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <h2 className="text-lg font-semibold">| &nbsp; &nbsp;Follow Me &nbsp; &nbsp; | </h2>
          <div className="flex space-x-4">
            {Socials.map((social) => {
              let IconComponent = null;
              switch (social.name.toLowerCase()) {
                case 'facebook':
                  IconComponent = FaFacebookF;
                  break;
                case 'instagram':
                  IconComponent = FaInstagram;
                  break;
                case 'linkedin':
                  IconComponent = FaLinkedinIn;
                  break;
                default:
                  break;
              }
              return IconComponent ? (
                <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" className="text-white">
                  <IconComponent className="w-6 h-6" />
                </a>
              ) : null;
            })}
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-4 lg:mt-0 text-center text-[#ff545d]">
          &copy; {new Date().getFullYear()} At-Sin. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

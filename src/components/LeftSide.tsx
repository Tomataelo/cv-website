import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Ikony z react-icons

const LeftSide: React.FC = () => {
    return (
        <div className="flex flex-col justify-between p-8 w-70% max-w-md mt-8">
            <div className="mb-8">
                <h1 className="text-[2.25rem] font-bold text-white">Mateusz Tomaszewski</h1>
                <h2 className="text-[1.15rem] font-medium mb-7 lg:text-[20px]">
                    Junior Backend Developer
                </h2>
                <p className="text-lg text-[rgb(130,146,170)] mt-4">
                    Z pasją do tworzenia nowoczesnych aplikacji internetowych.
                </p>
            </div>

            <div className="flex gap-x-3">
                <a href="https://github.com/Tomataelo">
                    <FaGithub size={24} className="text-gray-400 hover:text-gray-600 transition-colors duration-300"/>
                </a>
                <a href="https://www.linkedin.com/in/mateusz-tomaszewski-6861ba273/">
                    <FaLinkedin size={24} className="text-gray-400 w-16 h-16 hover:text-gray-600 transition-colors duration-300"/>
                </a>
                <a href="https://www.facebook.com/mateusz.tomaszewski.7186/">
                    <FaFacebook size={24} className="text-gray-400 w-16 h-16 hover:text-gray-600 transition-colors duration-300"/>
                </a>
            </div>


        </div>
    );
};

export default LeftSide;

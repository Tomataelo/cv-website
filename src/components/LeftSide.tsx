import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const LeftSide: React.FC = () => {
    return (
        <div className="flex flex-col justify-between p-8 w-70% max-w-[70%] mt-8">
            <div className="mb-8">
                <h1 className="text-[2.25rem] font-bold text-white">Mateusz Tomaszewski</h1>
                <h2 className="text-[1.15rem] font-medium mb-7 lg:text-[20px]">
                    Backend Developer
                </h2>
                <p className="text-lg text-[rgb(130,146,170)] mt-4">
                    Jestem ambitnym programistą, który lubi poszerzać swoje horyzonty. Moim "konikiem" jest backend, ale frontend nie jest mi straszny.</p>
            </div>

            <div className="text-left" style={{marginBottom: '0.4rem'}}>
                <a href="/cv.pdf" download>
                    Pobierz CV
                </a>
            </div>

            <div className="flex gap-x-3">
                <a href="https://github.com/Tomataelo" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-gray-400 hover:text-gray-600 transition-colors duration-300"/>
                </a>
                <a href="https://www.linkedin.com/in/mateusz-tomaszewski-6861ba273/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-gray-400 w-16 h-16 hover:text-gray-600 transition-colors duration-300"/>
                </a>
                <a href="https://www.facebook.com/mateusz.tomaszewski.7186/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} className="text-gray-400 w-16 h-16 hover:text-gray-600 transition-colors duration-300"/>
                </a>
            </div>


        </div>
    );
};

export default LeftSide;

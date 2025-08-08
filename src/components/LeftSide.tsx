import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const LeftSide: React.FC = () => {
    return (
        <div className="flex flex-col justify-between p-4 lg:p-8 w-full max-w-[90%] lg:max-w-[70%] mt-4 lg:mt-8">
            <div className="mb-6 lg:mb-8 text-center lg:text-left">
                <h1 className="text-2xl lg:text-[2.25rem] font-bold text-white">Mateusz Tomaszewski</h1>
                <h2 className="text-lg lg:text-[1.15rem] font-medium mb-4 lg:mb-7">
                    Backend Developer
                </h2>
                <p className="text-base lg:text-lg text-[rgb(130,146,170)] mt-4">
                    Jestem ambitnym programistą, który lubi poszerzać swoje horyzonty. Moim "konikiem" jest backend, ale frontend nie jest mi straszny.
                </p>
            </div>

            {/*<div id={'downloadCv'} className="text-center lg:text-left mb-4" style={{marginBottom: '0.4rem'}}>*/}
            {/*    <a href="/cv.pdf" download className="text-white hover:text-gray-300 transition-colors">*/}
            {/*        Pobierz CV*/}
            {/*    </a>*/}
            {/*</div>*/}

            <div className="flex gap-x-3 justify-center lg:justify-start">
                <a href="https://github.com/Tomataelo" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-gray-400 hover:text-gray-600 transition-colors duration-300"/>
                </a>
                <a href="https://www.linkedin.com/in/mateusz-tomaszewski-6861ba273/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-gray-400 hover:text-gray-600 transition-colors duration-300"/>
                </a>
                <a href="https://www.facebook.com/mateusz.tomaszewski.7186/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} className="text-gray-400 hover:text-gray-600 transition-colors duration-300"/>
                </a>
            </div>
        </div>
    );
};

export default LeftSide;

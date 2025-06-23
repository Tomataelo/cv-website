import React from "react";
import { Link } from 'react-router-dom';
import {FaGraduationCap, FaUser} from 'react-icons/fa';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const Cards: React.FC = () => {
    return (
        <div className="flex flex-nowrap gap-[3rem] h-[40%] w-[95%] mx-auto">
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <AiOutlineProject size={120}/>
                    </div>
                    <div className="card-back flex justify-center items-center">
                        <Link to="/projects" className="cursor-pointer px-6 py-3 rounded-xl text-[#8292aa] hover:text-[#4E5DF3] transition">
                            Projekty
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <BsFillBriefcaseFill size={120}/>
                    </div>
                    <div className="card-back flex justify-center items-center">
                        <Link to="/experience" className="cursor-pointer px-6 py-3 rounded-xl text-[#8292aa] hover:text-[#4E5DF33] transition">
                            Doświadczenie
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <FaGraduationCap size={120}/>
                    </div>
                    <div className="card-back flex justify-center items-center">
                        <Link to="/education" className="cursor-pointer px-6 py-3 rounded-xl text-[#8292aa] hover:text-[#4E5DF3] transition">
                            Edukacja
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <FaUser size={120}/>
                    </div>
                    <div className="card-back flex justify-center items-center">
                        <Link to="/aboutme" className="cursor-pointer px-6 py-3 rounded-xl text-[#8292aa] hover:text-[#4E5DF3] transition">
                            O mnie
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

import React from "react";
import {FaGraduationCap, FaUser} from 'react-icons/fa';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const Cards: React.FC = () => {
    return (
        <div className="flex flex-nowrap gap-[3rem] h-[35%] w-[95%] mx-auto">
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <AiOutlineProject size={120} />
                    </div>
                    <div className="card-back">
                        Projekty
                    </div>
                </div>
            </div>
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <BsFillBriefcaseFill size={120} />
                    </div>
                    <div className="card-back">
                        Doświadczenie
                    </div>
                </div>
            </div>
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <FaGraduationCap size={120} />
                    </div>
                    <div className="card-back">
                        Edukacja
                    </div>
                </div>
            </div>
            <div className="card-container w-1/4">
                <div className="card-inner border-3 border-[#8292aa]">
                    <div className="card-front">
                        <FaUser size={120} />
                    </div>
                    <div className="card-back">
                        O mnie
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;

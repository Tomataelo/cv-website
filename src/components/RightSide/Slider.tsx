import React from "react";
import Marquee from "react-fast-marquee";
import { FaJava, FaPhp, FaJsSquare, FaDatabase, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";

const icons = [
    { icon: <FaJava size={60} color="#f7b731" /> },
    { icon: <FaPhp size={60} color="#777bb3" /> },
    { icon: <FaDocker size={60} color="#2496ed" /> },
    { icon: <FaDatabase size={60} color="#2c3e50" /> },
    { icon: <FaJsSquare size={60} color="#f0db4f" /> },
    { icon: <FaReact size={60} color="#61dbfb" /> },
    { icon: <FaGitAlt size={60} color="#F35530" /> }
];

const Slider: React.FC = () => {
    return (
        <div className="slider mt-[10rem]">
            <h2 className="text-3xl font-bold text-white text-center" style={{ marginBottom: '1.5rem' }}>ZNANE TECHNOLOGIE</h2>

            <Marquee gradient={false} speed={50} pauseOnHover={false}>
                {icons.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex justify-center items-center"
                        style={{marginRight: "11rem"}}
                    >
                        {item.icon}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Slider;

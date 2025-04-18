import React from "react";
import { FaJava, FaPhp, FaJsSquare, FaDatabase, FaReact } from "react-icons/fa";

const TechStack: React.FC = () => {
    return (
        <div className="w-full p-8 h-full">
            <h2 className="text-3xl font-bold text-white text-center mb-8">TECH STACK</h2>

            <div className="tech-stack-container">
                <div className="tech-stack-slider">
                    {/* Zduplikowane slajdy */}
                    <div className="tech-stack-item">
                        <FaJava size={60} color="#f7b731" />
                    </div>
                    <div className="tech-stack-item">
                        <FaPhp size={60} color="#777bb3" />
                    </div>
                    <div className="tech-stack-item">
                        <FaJsSquare size={60} color="#f0db4f" />
                    </div>
                    <div className="tech-stack-item">
                        <FaDatabase size={60} color="#2c3e50" />
                    </div>
                    <div className="tech-stack-item">
                        <FaReact size={60} color="#61dbfb" />
                    </div>

                    {/* Zduplikowanie slajdów dla ciągłego przewijania */}
                    <div className="tech-stack-item">
                        <FaJava size={60} color="#f7b731" />
                    </div>
                    <div className="tech-stack-item">
                        <FaPhp size={60} color="#777bb3" />
                    </div>
                    <div className="tech-stack-item">
                        <FaJsSquare size={60} color="#f0db4f" />
                    </div>
                    <div className="tech-stack-item">
                        <FaDatabase size={60} color="#2c3e50" />
                    </div>
                    <div className="tech-stack-item">
                        <FaReact size={60} color="#61dbfb" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;

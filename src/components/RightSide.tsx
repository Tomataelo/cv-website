import React from "react";
import Slider from "./RightSide/Slider.tsx";
import Cards from "./RightSide/Cards.tsx";

const TechStack: React.FC = () => {
    return (
        <div className="w-full p-8 h-full">
            <Cards />
            <Slider />
        </div>
    );
};

export default TechStack;

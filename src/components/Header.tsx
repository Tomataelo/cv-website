import { useEffect, useState } from "react";

export const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const formattedDate = time.toLocaleDateString("en-US", {
        year: "numeric",
        day: "numeric",
        month: "long",
    });

    return (
        <header className="w-full p-6 text-white bg-[#101A37] shadow-md z-10 sticky top-0 left-0 grid grid-cols-3 items-center">
            <div></div>

            <div className="text-lg flex justify-center">
        <span
            style={{
                fontOpticalSizing: "auto",
                scrollBehavior: "smooth",
                fontFamily: "Inter, sans-serif",
                color: "#8292aa",
                fontSize: "1.5rem",
                marginTop: "0.5rem",
            }}
        >
            {formattedTime}
        </span>
            </div>

            <div className="text-sm mr-4 text-right">
        <span
            style={{
                fontOpticalSizing: "auto",
                scrollBehavior: "smooth",
                fontFamily: "Inter, sans-serif",
                color: "#8292aa",
                fontSize: "1.4rem",
                marginTop: "0.5rem",
                marginRight: "1.5rem",
            }}
        >
            {formattedDate}
        </span>
            </div>
        </header>
    );
};
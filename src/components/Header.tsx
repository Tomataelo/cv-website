import { useEffect, useState } from "react";
import { GoHome } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const [time, setTime] = useState(new Date());
    const location = useLocation();

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

    const isHome = location.pathname === "/";

    return (
        <header className="w-full p-6 text-white bg-[#101A37] shadow-md z-10 sticky top-0 left-0 grid grid-cols-3 items-center">
            <div className="text-left">
                {!isHome && (
                    <Link
                        to="/"
                        style={{ marginLeft: '1.5rem', marginTop: '0.5rem', color: 'rgb(130,146,170)', display: 'inline-block' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#4E5DF3'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgb(130,146,170)'}
                    >
                        <GoHome size={30} />
                    </Link>
                )}
            </div>

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

            <span className="formatted-date">{formattedDate}</span>
        </header>
    );
};

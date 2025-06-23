import React from "react";

const Education: React.FC = () => {
    return (
        <div className="text-white px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">Edukacja</h1>
            <br/>
            <ul className="list-disc ml-6 space-y-2 text-left">
                <li>
                    <strong>Akademia WSB w Dąbrowie Górniczej</strong>  (październik 2022 - aktualnie)  – Informatyka
                </li>
                <li>
                <strong>Zespół szkół nr 1 w Piekarach śląskich</strong>  (wrzesień 2018 - czerwiec 2022)  – Technik informatyk
                </li>
            </ul>
        </div>
    );
};

export default Education;

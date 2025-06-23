import React from "react";

const Experience: React.FC = () => {
    return (
        <div className="text-white px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">Doświadczenie</h1>
            <br/>
            <div className="space-y-4 text-left">
                <div>
                <h2 className="text-xl font-semibold">Backend Developer – Maxsote</h2>
                    <p className="text-sm text-gray-300">08.2023 – obecnie</p>
                    <ul className="list-disc ml-6 space-y-2 text-left text-white">
                        <li>Tworzenie aplikacji dedykowanych na platformę Shoper, dostosowanych do indywidualnych
                            potrzeb klientów.
                        </li>
                        <li>Integracja różnych systemów i usług z platformą Shoper, zapewniając płynną wymianę danych i
                            funkcjonalności.
                        </li>
                        <li>Wdrażanie oraz dostosowywanie frontendu sklepu internetowego zgodnie z
                            wymaganiami i oczekiwaniami klienta.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Staż – Maxsote</h2>
                    <p className="text-sm text-gray-300">07.2023 – 08.2023</p>
                    <ul className="list-disc ml-6 space-y-2 text-left text-white">
                        <li>Nauka języka PHP oraz narzędzi w ekosystemie Shopera.</li>
                        <li>Implementacja pierwszego własnego pluginu dla platformy Shoper.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;

import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div className="text-white px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">O mnie</h1>
            <br/>
            <p className="w-3/4 mx-auto leading-7">
                Cześć! Nazywam się Mateusz i jestem backend developerem z dwuletnim doświadczeniem.
                <br/>
                <br/>
                Moją pasją są programowanie oraz gry komputerowe. Od dziecka grałem w różne tytuły — zarówno na konsoli,
                jak i komputerze — więc przez całe życie miałem styczność z technologią.
                <br/>
                <br/>
                Programowaniem zainteresowałem się w 2023 roku, kiedy zacząłem zastanawiać się, którą specjalizację
                informatyczną wybrać. Postawiłem na programowanie. Żeby zaliczyć semestr na studiach, musiałem odbyć
                praktyki — dlatego zacząłem uczyć się Javy i przerobiłem kurs na Udemy. W międzyczasie załapałem
                się na miesięczne praktyki w firmie Maxsote, gdzie wykorzystywano PHP z frameworkiem Symfony + MySQL
                oraz
                JavaScript.
                <br/>
                <br/>
                Na początku uczyłem się czystego PHP-a. Szybko przyswajam nowe rzeczy, więc po krótkim czasie mogłem
                przejść na wyższy poziom i zacząć pracować z Symfony. Tworzyłem coraz bardziej zaawansowane aplikacje, a
                po zakończeniu praktyk otrzymałem ofertę pracy na pełen etat.
                <br/>
                <br/>
                W firmie zajmuję się tworzeniem aplikacji do platformy Shoper, integracjami z systemem Shoper oraz
                frontendem sklepów internetowych.
                <br/>
                <br/>
                Aktualnie szukam dalszego rozwoju w bardziej wymagających i złożonych projektach — takich, które będą
                stanowić kolejne wyzwanie i pomogą mi wejść na jeszcze wyższy poziom jako programista.
            </p>
        </div>
    );
};

export default AboutMe;

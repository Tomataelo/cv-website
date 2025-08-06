import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "CV Website",
        description:
            "Prosta, responsywna strona CV na której właśnie się znajdujesz napisana w React. Projekt osobisty prezentujący moje doświadczenie, umiejętności, wykształcenie oraz informacje o mnie.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Tomataelo/cv-website",
        status: "done",
    },
    {
        title: "Lokalny Marketplace usług",
        description:
            "Platforma łącząca klientów z lokalnymi wykonawcami usług. Klienci tworzą zlecenia, wykonawcy odpowiadają ofertami lub odwrotnie. System powiadomień mailowych do wykonawców gdy klient doda zlecenie. Obsługa kalendarza i opinii.",
        stack: [
            "Symfony",
            "PostgreSQL",
            "RabbitMQ",
            "Redis",
            "Docker",
            "React",
            "TypeScript"
        ],
        github: "https://github.com/Tomataelo/LocalMarketplace",
        status: "in-progress",
    },
];

const Projects: React.FC = () => {
    return (
        <div className="text-white px-6 py-8">
            <h1 id={'project'} className="text-3xl font-bold pb-2">Projekty</h1>
            <div className="grid md:grid-cols-2 gap-6 w-[95%] mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #4b5563',
                            borderRadius: '1rem',
                            padding: '1rem',
                            backgroundColor: '#161e33',
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                            transition: 'box-shadow 0.3s ease',
                            marginBottom: '1.5rem',
                            maxWidth: '55rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >

                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <div className="w-full text-left mb-2">
                            <p className="text-gray-300 flex mb-1">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400 font-medium">Status:{'\u00A0'}</span>
                                {project.status === "done" ? (
                                    <span className="text-green-400">✅ Ukończony</span>
                                ) : (
                                    <span className="text-yellow-400">⏳ W trakcie</span>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 flex flex-wrap justify-left items-center gap-2 text-center">
                            <span className="mr-[5px]"> Użyte technologie: </span>

                            {project.stack.map((tech, i) => (
                                <React.Fragment key={i}>
                                    <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-100">
                                        {tech}
                                    </span>
                                    {i < project.stack.length - 1 && (
                                        <span className="text-white text-sm">,{'\u00A0'}</span>
                                    )}
                                </React.Fragment>
                            ))}

                        </div>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors self-start mt-[0.2rem]"
                        >
                            <FaGithub className="text-lg" style={{marginRight: '0.5rem'}}/>
                            Zobacz na GitHubie
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

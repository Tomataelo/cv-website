import './App.css'
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CursorEffect from './components/CursorEffect';
import LeftSide from "./components/LeftSide.tsx";

import RightSide from "./components/RightSide";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-[#101A37] flex flex-col">
                <CursorEffect />
                <Header />
                <main className="flex flex-1">
                    <div className="w-2/5 pb-8 pt-[20vh] flex flex-col items-center">
                        <LeftSide />
                    </div>
                    <div className="w-3/5 p-8 pt-[10vh] flex flex-col items-center overflow-auto">
                        <Routes>
                            <Route path="/" element={<RightSide />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;




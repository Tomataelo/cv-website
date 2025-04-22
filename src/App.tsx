import './App.css'
import { Header } from "./components/Header";
import CursorEffect from './components/CursorEffect';
import LeftSide from "./components/LeftSide.tsx";
import RightSide from "./components/RightSide.tsx";

function App() {
    return (
        <div className="relative min-h-screen bg-[#101A37] pt-16">
            <CursorEffect />
            <Header />
            <div className="flex h-screen">
                <div className="w-2/5 pb-8 pt-[20vh] flex flex-col items-center h-full">
                    <LeftSide />
                </div>

                <div className="w-3/5 p-8 pt-[10vh] flex flex-col items-center h-full">
                    <RightSide />
                </div>
            </div>
        </div>
    );
}

export default App;




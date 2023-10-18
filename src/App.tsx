import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // インポートを修正
import { UserDataProvider } from "./provider/UserDataProvider";
import Base from "./base/Base";
import Home from "./pages/Home";
import Presets from "./pages/Presets";
import Library from "./pages/Library";

const App = () => {
    return (
        <div className="App bg-black">
            <UserDataProvider>
                <Router>
                    <Base />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/presets" element={<Presets />} />
                        <Route path="/library" element={<Library />} />
                    </Routes>
                </Router>
            </UserDataProvider>
        </div>
    );
};

export default App;

import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useUserData } from "./provider/UserDataProvider";

import Base from "./base/Base";
import Home from "./pages/Home";
import Presets from "./pages/Presets";
import Urls from "./pages/Urls";
import SearchResult from "./pages/SearchResult";
import PresetDetail from "./pages/PresetDetail";

const App = () => {
    const { getRecentPresets, getRecentUrls, getNextRecentUrls } = useUserData();

    useEffect(() => {
        getRecentUrls();
        getRecentPresets();
    }, []);

    return (
        <div className="w-screen h-auto mb-[5vh] overflow-x-hidden">
            <Router>
                <Base />

                <div className="flex items-center justify-center mt-[90px]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/presets" element={<Presets />} />
                        <Route path="/search/:name" element={<SearchResult />} />
                        <Route path="/urls" element={<Urls />} />
                        <Route path="/presets/:id" element={<PresetDetail />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;

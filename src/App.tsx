import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useUserData } from "./provider/UserDataProvider";

import Base from "./base/Base";
import Home from "./pages/Home";
import Presets from "./pages/Presets";
import Urls from "./pages/Urls";
import Add from "./pages/Add";
import SearchResult from "./pages/SearchResult";
import Greet from "./components/Greet";

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
                <Greet />
                <div className="flex items-center justify-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/presets" element={<Presets />} />
                        <Route path="/search/:name" element={<SearchResult />} />
                        <Route path="/urls" element={<Urls />} />
                        <Route path="/add/url" element={<Add type={"url"} />} />
                        <Route path="/add/preset" element={<Add type={"preset"} />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;

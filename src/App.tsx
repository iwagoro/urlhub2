import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { UserDataProvider } from "./provider/UserDataProvider";

import Base from "./base/Base";
import Home from "./pages/Home";
import Presets from "./pages/Presets";
import Urls from "./pages/Urls";
import MySpeedDial from "./components/SpeedDial";
import Add from "./pages/Add";

const App = () => {
    return (
        <div>
            <UserDataProvider>
                <Router>
                    <Base />
                    <div className="flex items-center justify-center">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/presets" element={<Presets />} />
                            <Route path="/urls" element={<Urls />} />
                            <Route path="/add/url" element={<Add type={"url"} />} />
                            <Route path="/add/preset" element={<Add type={"preset"} />} />
                        </Routes>
                    </div>
                    <MySpeedDial />
                </Router>
            </UserDataProvider>
        </div>
    );
};

export default App;

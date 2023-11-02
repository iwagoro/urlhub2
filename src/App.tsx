import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useUserData } from "./provider/UserDataProvider";
import { useNavigate } from "react-router-dom";
import Base from "./base/Base";
import Home from "./pages/Home";
import Presets from "./pages/Presets";
import Urls from "./pages/Urls";
import SearchResult from "./pages/SearchResult";
import PresetDetail from "./pages/PresetDetail";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./pages/Login";
import { auth } from "./utils/firebase";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f7fafc",
        },
        secondary: {
            main: "#808080",
        },
    },
});

const App = () => {
    const { user, setUser } = useUserData();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user !== null) {
                setUser(user.email || "");
            } else {
                setUser("");
            }
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className=" h-auto mb-[5vh] overflow-x-hidden">
                {user !== "" && (
                    <Router>
                        <Base />
                        <div className="flex items-center justify-center mt-[5vh]">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/presets" element={<Presets />} />
                                <Route path="/search/:name" element={<SearchResult />} />
                                <Route path="/urls" element={<Urls />} />
                                <Route path="/presets/:id" element={<PresetDetail />} />
                            </Routes>
                        </div>
                    </Router>
                )}
                {user === "" && <Login />}
            </div>
        </ThemeProvider>
    );
};

export default App;

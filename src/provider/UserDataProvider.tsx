import React, { createContext, useState, useContext } from "react";
import { urlData, presetData } from "../consts/interface";
import { MAX_CARD_LIMIT } from "../consts/env";
import { useImage } from "../hooks/useImage";
import { useUrls } from "../hooks/useUrls";
import { usePresets } from "../hooks/usePresets";

const UserContext = createContext(
    {} as {
        user: string;
        setUser: React.Dispatch<React.SetStateAction<string>>;
        urls: urlData[];
        initUrls: () => void; // Change "intiUrls" to "initUrls"
        getUrls: () => void;
        getRecentUrls: () => void;
        setUrlToLatest: (name: string) => void;
        addUrls: (name: string, url: string, image: string) => void;
        presets: presetData[];
        initPresets: () => void;
        getPresets: () => void;
        getRecentPresets: () => void;
        setPresetToLatest: (name: string) => void;
        addPresets: (name: string, image: string) => void;
        image: string;
        generateImage: () => void;
        initImage: () => void;
    }
);

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string>("test@gmail.com");
    const { urls, initUrls, getUrls, getRecentUrls, setUrlToLatest, addUrls } = useUrls(user, MAX_CARD_LIMIT);
    const { presets, initPresets, getPresets, getRecentPresets, setPresetToLatest, addPresets } = usePresets(user, MAX_CARD_LIMIT);
    const { image, generateImage, initImage } = useImage();

    const value = {
        user,
        setUser,
        urls,
        initUrls,
        getUrls,
        getRecentUrls,
        setUrlToLatest,
        addUrls,
        presets,
        initPresets,
        getPresets,
        setPresetToLatest,
        getRecentPresets,
        addPresets,
        image,
        generateImage,
        initImage,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);

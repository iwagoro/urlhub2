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
        getNextRecentUrls: (url: urlData) => Promise<number>;
        getBeforeRecentUrls: (url: urlData) => void;
        getUrlsWithName: (name: string) => void;
        getUrlsWithArray: (array: string[]) => void;
        setUrlToLatest: (name: string) => void;
        addUrl: (name: string, url: string, image: string) => void;
        updateUrl: (name: string, data: any) => void;
        deleteUrl: (name: string) => void;
        presets: presetData[];
        initPresets: () => void;
        getPresets: () => void;
        getRecentPresets: () => void;
        getNextRecentPresets: (preset: presetData) => Promise<number>;
        getBeforeRecentPresets: (preset: presetData) => void;
        getPresetsWithName: (name: string) => void;
        setPresetToLatest: (name: string) => void;
        addPreset: (name: string, image: string) => void;
        image: string;
        generateImage: () => void;
        initImage: () => void;
    }
);

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string>("test@gmail.com");
    const { urls, initUrls, getUrls, getRecentUrls, getNextRecentUrls, getBeforeRecentUrls, getUrlsWithArray, getUrlsWithName, setUrlToLatest, addUrl, updateUrl, deleteUrl } = useUrls(user, MAX_CARD_LIMIT);
    const { presets, initPresets, getPresets, getRecentPresets, getNextRecentPresets, getBeforeRecentPresets, getPresetsWithName, setPresetToLatest, addPreset } = usePresets(user, MAX_CARD_LIMIT);
    const { image, generateImage, initImage } = useImage();

    const value = {
        user,
        setUser,
        urls,
        initUrls,
        getUrls,
        getRecentUrls,
        getNextRecentUrls,
        getBeforeRecentUrls,
        getUrlsWithName,
        getUrlsWithArray,
        setUrlToLatest,
        addUrl,
        updateUrl,
        deleteUrl,
        presets,
        initPresets,
        getPresets,
        setPresetToLatest,
        getRecentPresets,
        getNextRecentPresets,
        getBeforeRecentPresets,
        getPresetsWithName,
        addPreset,
        image,
        generateImage,
        initImage,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserData = () => useContext(UserContext);

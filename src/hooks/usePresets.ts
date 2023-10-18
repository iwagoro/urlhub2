import { useState } from "react";
import { presetData } from "../consts/interface";
import { getData, getRecentData, setData, updateData } from "../utils/crud";

export const usePresets = (user: string, num: number) => {
    const [presets, setPresets] = useState<presetData[]>([]);

    const initPresets = () => {
        setPresets([]);
    };

    const getPresets = async () => {
        const data = await getData(user, "Presets", num);
        setPresets(data);
    };

    const getRecentPresets = async () => {
        const data = await getRecentData(user, "Presets", num);
        setPresets(data);
    };

    const setPresetToLatest = async (name: string) => {
        const data = {
            date: new Date(),
        };
        await updateData(user, "Presets", name, data);
    };

    const addPresets = async (name: string, image: string) => {
        const data = {
            name: name,
            lowName: name.toLowerCase(),
            image: image,
            date: new Date(),
        };
        await setData(user, "Presets", name, data);
        setPresets((prev) => {
            return [...prev, data];
        });
    };

    return { presets, initPresets, getPresets, getRecentPresets, setPresetToLatest, addPresets };
};

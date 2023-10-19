import { useState, useCallback } from "react";
import { presetData } from "../consts/interface";
import { getData, getDataWithLowName, getRecentData, setData, updateData } from "../utils/crud";

export const usePresets = (user: string, num: number) => {
    const [presets, setPresets] = useState<presetData[]>([]);

    const initPresets = useCallback(() => {
        setPresets([]);
    }, []);

    const getPresets = useCallback(async () => {
        const data = await getData(user, "Presets", num);
        setPresets(data);
    }, []);

    const getRecentPresets = useCallback(async () => {
        const data = await getRecentData(user, "Presets", num);
        data.reverse();
        setPresets(data);
    }, []);

    const getPresetsWithName = useCallback(async (name: string) => {
        const data = await getDataWithLowName(user, "Presets", name.toLowerCase(), num);
        setPresets(data);
    }, []);

    const setPresetToLatest = useCallback(async (name: string) => {
        const data = {
            date: new Date(),
        };
        await updateData(user, "Presets", name, data);
    }, []);

    const addPreset = useCallback(async (name: string, image: string) => {
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
    }, []);

    return { presets, initPresets, getPresets, getRecentPresets, getPresetsWithName, setPresetToLatest, addPreset };
};

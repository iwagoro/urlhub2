import { useState, useCallback } from "react";
import { presetData } from "../consts/interface";
import { getData, getDataWithLowName, getRecentData, setData, updateData, getNextRecentData, getBeforeRecentData } from "../utils/crud";

export const usePresets = (user: string, num: number) => {
    const [presets, setPresets] = useState<presetData[]>([]);

    const initPresets = useCallback(() => {
        setPresets([]);
    }, [user]);

    const getPresets = useCallback(async () => {
        const data = await getData(user, "Presets", num);
        setPresets(data);
    }, [user]);

    const getRecentPresets = useCallback(async () => {
        const data = await getRecentData(user, "Presets", num);
        setPresets(data);
    }, [user]);

    const getNextRecentPresets = useCallback(
        async (preset: presetData) => {
            const data = await getNextRecentData(user, "Presets", num, preset.date);
            if (data.length === 0) return 0;
            initPresets();
            setPresets(data);
            return 1;
        },
        [user]
    );

    const getBeforeRecentPresets = useCallback(
        async (preset: presetData) => {
            const data = await getBeforeRecentData(user, "Presets", num, preset.date);
            initPresets();
            setPresets(data);
        },
        [user]
    );

    const getPresetsWithName = useCallback(
        async (name: string) => {
            const data = await getDataWithLowName(user, "Presets", name.toLowerCase(), num);
            setPresets(data);
        },
        [user]
    );

    const setPresetToLatest = useCallback(
        async (name: string) => {
            const data = {
                date: new Date(),
            };
            await updateData(user, "Presets", name, data);
        },
        [user]
    );

    const addPreset = useCallback(
        async (name: string, image: string) => {
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
        },
        [user]
    );

    return { presets, initPresets, getPresets, getRecentPresets, getNextRecentPresets, getBeforeRecentPresets, getPresetsWithName, setPresetToLatest, addPreset };
};

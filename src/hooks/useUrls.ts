import { useState, useCallback } from "react";
import { urlData } from "../consts/interface";
import { getData, getDataWithLowName, getRecentData, setData, updateData } from "../utils/crud";

export const useUrls = (user: string, num: number) => {
    const [urls, setUrls] = useState<urlData[]>([]);

    const initUrls = useCallback(() => {
        setUrls([]);
    }, []);

    const getUrls = useCallback(async () => {
        const data = await getData(user, "Urls", num);
        setUrls(data);
    }, []);

    const getUrlsWithName = useCallback(async (name: string) => {
        const data = await getDataWithLowName(user, "Urls", name.toLowerCase(), num);
        setUrls(data);
    }, []);

    const getRecentUrls = useCallback(async () => {
        const data = await getRecentData(user, "Urls", num);
        data.reverse();
        setUrls(data);
    }, []);

    const setUrlToLatest = useCallback(async (name: string) => {
        const data = {
            date: new Date(),
        };
        await updateData(user, "Urls", name, data);
    }, []);

    const addUrl = useCallback(async (name: string, url: string, image: string) => {
        const data = {
            name: name,
            lowName: name.toLowerCase(),
            url: url,
            image: image,
            presets: [],
            date: new Date(),
        };
        await setData(user, "Urls", name, data);
        setUrls((prev) => {
            return [...prev, data];
        });
    }, []);

    return { urls, initUrls, getUrls, getRecentUrls, getUrlsWithName, setUrlToLatest, addUrl };
};

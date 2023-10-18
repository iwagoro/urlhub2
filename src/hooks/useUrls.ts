import { useState } from "react";
import { urlData } from "../consts/interface";
import { getData, getRecentData, setData, updateData } from "../utils/crud";

export const useUrls = (user: string, num: number) => {
    const [urls, setUrls] = useState<urlData[]>([]);

    const initUrls = () => {
        setUrls([]);
    };

    const getUrls = async () => {
        const data = await getData(user, "Urls", num);
        setUrls(data);
    };

    const getRecentUrls = async () => {
        const data = await getRecentData(user, "Urls", num);
        setUrls(data);
    };

    const setUrlToLatest = async (name: string) => {
        const data = {
            date: new Date(),
        };
        await updateData(user, "Urls", name, data);
    };

    const addUrls = async (name: string, url: string, image: string) => {
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
    };

    return { urls, initUrls, getUrls, getRecentUrls, setUrlToLatest, addUrls };
};

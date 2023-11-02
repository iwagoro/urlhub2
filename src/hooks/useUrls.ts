import { useState, useCallback } from "react";
import { urlData } from "../consts/interface";
import { getData, getDataWithLowName, getRecentData, setData, updateData, getNextRecentData, getBeforeRecentData, getDataWithArray, deleteData } from "../utils/crud";

export const useUrls = (user: string, num: number) => {
    const [urls, setUrls] = useState<urlData[]>([]);

    const initUrls = useCallback(() => {
        setUrls([]);
    }, [user]);

    const getUrls = useCallback(async () => {
        const data = await getData(user, "Urls", num);
        setUrls(data);
    }, [user]);

    const getUrlsWithArray = useCallback(
        async (array: string[]) => {
            const data = await getDataWithArray(user, "Urls", array, num);
            setUrls(data);
        },
        [user]
    );

    const getUrlsWithName = useCallback(
        async (name: string) => {
            const data = await getDataWithLowName(user, "Urls", name.toLowerCase(), num);
            setUrls(data);
            console.log(data);
        },
        [user]
    );

    const getRecentUrls = useCallback(async () => {
        const data = await getRecentData(user, "Urls", num);
        setUrls(data);
    }, [user]);

    const getNextRecentUrls = useCallback(
        async (url: urlData) => {
            const data = await getNextRecentData(user, "Urls", num, url.date);
            if (data.length === 0) return 0;
            initUrls();
            setUrls(data);
            return 1;
        },
        [user]
    );

    const getBeforeRecentUrls = useCallback(
        async (url: urlData) => {
            const data = await getBeforeRecentData(user, "Urls", num, url.date);
            initUrls();
            setUrls(data);
        },
        [user]
    );

    const setUrlToLatest = useCallback(
        async (name: string) => {
            const data = {
                date: new Date(),
            };
            await updateData(user, "Urls", name, data);
        },
        [user]
    );

    const addUrl = useCallback(
        async (name: string, url: string, image: string) => {
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
        },
        [user]
    );

    const deleteUrl = useCallback(
        async (name: string) => {
            await deleteData(user, "Urls", name);
            setUrls((prev) => {
                return prev.filter((item) => item.name !== name);
            });
        },
        [user]
    );

    const updateUrl = useCallback(
        async (name: string, data: any) => {
            await updateData(user, "Urls", name, data);
        },
        [user]
    );
    return { urls, initUrls, getUrls, getRecentUrls, getNextRecentUrls, getBeforeRecentUrls, getUrlsWithName, setUrlToLatest, addUrl, getUrlsWithArray, updateUrl, deleteUrl };
};

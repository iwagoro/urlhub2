import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserData } from "../provider/UserDataProvider";
import UrlList from "../components/UrlList";
import PresetList from "../components/PresetList";

const SearchResult = () => {
    let { type, name } = useParams();
    const { urls, getUrlsWithName, presets, getPresetsWithName } = useUserData();

    useEffect(() => {
        name !== undefined && getUrlsWithName(name);
        name !== undefined && getPresetsWithName(name);
    }, [name]);

    return (
        <div>
            <UrlList urls={urls} />
            <PresetList presets={presets} />
        </div>
    );
};

export default SearchResult;

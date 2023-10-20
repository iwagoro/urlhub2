import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserData } from "../provider/UserDataProvider";
import UrlCard from "../components/UrlCard";
import PresetCard from "../components/PresetCard";

const SearchResult = () => {
    let { type, name } = useParams();
    const { urls, getUrlsWithName, presets, getPresetsWithName } = useUserData();

    useEffect(() => {
        name !== undefined && getUrlsWithName(name);
        name !== undefined && getPresetsWithName(name);
    }, [name]);

    return (
        <div>
            <UrlCard urls={urls} />
            <PresetCard presets={presets} />
        </div>
    );
};

export default SearchResult;

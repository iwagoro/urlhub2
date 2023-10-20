import { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import styled from "styled-components";
import Divider from "../components/Divider";
import UrlCard from "../components/UrlCard";
import Button from "../components/NextPage";

const Urls = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();

    return (
        <div className="w-[100%] max-w-[1500px] flex flex-col">
            <div className="py-[2.5vw]">
                <Divider text="Recent Urls" type="left" />
                <UrlCard urls={urls} />
                <Button type="url" />
                <Divider text="Recent Urls" type="right" />
            </div>
        </div>
    );
};

export default Urls;

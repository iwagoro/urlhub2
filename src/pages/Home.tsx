import { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import styled from "styled-components";
import Divider from "../components/Divider";
import UrlCard from "../components/UrlCard";
import PresetCard from "../components/PresetCard";
import Button from "../components/NextPage";
import Greet from "../components/Greet";

const Container = styled.div`
    box-shadow: 0 1rem 2rem #cecece;
    width: calc(100% - 5w);
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    border-radius: 10px;
    margin: 2.5vw 2.5vw 0 2.5vw;
`;

const Home = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();

    return (
        <div className="flex flex-col">
            <Greet />
            <div className="py-[2.5vw]">
                <Divider text="Recent Urls" type="left" />
                <UrlCard urls={urls} />
                <Button type={"url"} />
                <Divider text="Recent Urls" type="right" />
            </div>
            <div className="py-[2.5vw]">
                <Divider text="Recent Presets" type="left" />
                <PresetCard presets={presets} />
                <Button type={"preset"} />
                <Divider text="Recent Presets" type="right" />
            </div>
        </div>
    );
};

export default Home;

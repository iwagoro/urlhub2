import { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import styled from "styled-components";
import Divider from "../components/Divider";
import PresetCard from "../components/PresetCard";
import Button from "../components/NextPage";

const Container = styled.div`
    box-shadow: 0 1rem 2rem #cecece;
    width: calc(100% - 5w);
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    border-radius: 20px;
    margin: 2.5vw 2.5vw 0 2.5vw;
`;

const Presets = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();

    return (
        <div className="flex flex-col">
            <div className="py-[2.5vw]">
                <Divider text="Recent Presets" type="left" />
                <PresetCard presets={presets} />
                <Button type="preset" />
                <Divider text="Recent Presets" type="right" />
            </div>
        </div>
    );
};

export default Presets;

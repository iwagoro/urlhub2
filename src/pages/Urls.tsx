import { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import styled from "styled-components";
import Divider from "../components/Divider";
import UrlList from "../components/UrlList";
import PresetList from "../components/PresetList";

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

const Urls = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();

    return (
        <div className="flex flex-col">
            <Container>
                <div className="py-[2.5vw]">
                    <Divider text="Recent Urls" type="left" />
                    <UrlList urls={urls} />
                    <Divider text="Recent Urls" type="right" />
                </div>
            </Container>
        </div>
    );
};

export default Urls;

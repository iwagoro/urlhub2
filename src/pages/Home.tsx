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

const Home = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();

    useEffect(() => {
        getRecentUrls();
        getRecentPresets();
    }, []);

    return (
        <Container>
            <div className="py-[2.5vw]">
                <Divider text="Recent Url" type="left" />
                <UrlList urls={urls} />
                <Divider text="Recent Presets" type="left" />
                <PresetList presets={presets} />
            </div>
        </Container>
    );
};

export default Home;

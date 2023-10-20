import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { presetData } from "../consts/interface";
import { useUserData } from "../provider/UserDataProvider";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    padding: 0vw 2.5vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Card = styled(Link)`
    width: calc(100% / 6 - 2.5vw);
    cursor: pointer;
    margin: 10px 2.5vw;

    border-radius: 20px;

    box-shadow: 0 1rem 2rem #cecece;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1770px) {
        width: calc(100% / 4 - 5vw);
        font-size: 2vw;
    }

    @media (max-width: 1200px) {
        width: calc(100% / 3 - 5vw);
        font-size: 2vw;
    }

    @media (max-width: 768px) {
        width: calc(100% / 2 - 5vw);
        font-size: 2vw;
    }
`;
const ImageContainer = styled.div`
    width: 80%;
    margin-top: 10%;
    aspect-ratio: 1/1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    border-radius: 10px;

    background-color: black;
`;

const PresetList = ({ presets }: { presets: Array<presetData> }) => {
    const { user, setPresetToLatest } = useUserData();
    const card = useMemo(() => {
        if (presets.length === 0) return <div style={{ width: "calc(90vw)" }}></div>;
        else {
            return presets.map((preset, index) => (
                <Card key={`preset${index}`} to={"/presets/" + preset.name} onClick={() => setPresetToLatest(preset.name)}>
                    <ImageContainer>
                        <img src={preset.image} alt={preset.name} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
                    </ImageContainer>
                    <h3 className="w-[80%] my-[5px]">{preset.name}</h3>
                </Card>
            ));
        }
    }, [presets]);

    return (
        <Container>
            {card}
            <div className="h-[10px] flex-1" />
        </Container>
    );
};

export default PresetList;

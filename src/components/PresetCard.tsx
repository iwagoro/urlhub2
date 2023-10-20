import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { presetData } from "../consts/interface";
import { useUserData } from "../provider/UserDataProvider";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    padding: 0vw 2.5vw;
    height: auto;
    display: grid;
    flex-wrap: wrap;
    grid-gap: 2vw;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
`;
const Card = styled(Link)`
    width: 100%;
    cursor: pointer;

    border-radius: 20px;

    box-shadow: 0 1rem 2rem #cecece;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const PresetCard = ({ presets }: { presets: Array<presetData> }) => {
    const { user, setPresetToLatest } = useUserData();
    const card = useMemo(() => {
        if (presets.length === 0) return <div style={{ width: "calc(90vw)" }}></div>;
        else {
            return presets.map((preset, index) => (
                <Card key={`preset${index}`} to={"/presets/" + preset.name} onClick={() => setPresetToLatest(preset.name)}>
                    <ImageContainer>
                        <img src={preset.image} alt={preset.name} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
                    </ImageContainer>
                    <h3 className="w-[80%] mt-[10px]">{preset.name}</h3>
                    <h4 className="w-[80%] mb-[10px]">type:preset</h4>
                </Card>
            ));
        }
    }, [presets]);

    return <Container>{card}</Container>;
};

export default PresetCard;

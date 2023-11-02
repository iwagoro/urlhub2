import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { presetData } from "../consts/interface";
import { useUserData } from "../provider/UserDataProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardContainer } from "./styled/CardContainer";
import { Card2, Card } from "./styled/Card";
import { FlexBox } from "./styled/FlexBox";
import { ImageCard } from "./styled/ImageCard";
import { MAX_CARD_LIMIT } from "../consts/env";

const PresetCard = ({ presets }: { presets: Array<presetData> }) => {
    const { user, setPresetToLatest } = useUserData();
    const card = useMemo(() => {
        const result: React.ReactNode[] = [];
        presets.map((preset, index) =>
            result.push(
                <Card2 key={`preset${index}`} to={"/presets/" + preset.name} onClick={() => setPresetToLatest(preset.name)}>
                    <ImageCard src={preset.image} />
                    <FlexBox w="80%" j="between" a="center">
                        <div>
                            <h3 className=" mt-[10px]">{preset.name}</h3>
                            <h4 className=" mb-[10px]">type:preset</h4>
                        </div>
                    </FlexBox>
                </Card2>
            )
        );
        for (let i = 0; i < MAX_CARD_LIMIT - presets.length; i++) {
            result.push(
                <Card key={`presets${i}`}>
                    <ImageCard src="" />
                    <FlexBox w="80%" j="between" a="center">
                        <div className="ml-[4px]">
                            <h3 className=" mt-[10px] text-[lightgray]" style={{ fontFamily: "Flow Circular" }}>
                                aaaaaaaaaaa
                            </h3>
                            <h4 className=" mb-[10px] text-[lightgray]" style={{ fontFamily: "Flow Circular" }}>
                                aaaaaaa
                            </h4>
                        </div>
                    </FlexBox>
                </Card>
            );
        }
        return result;
    }, [presets]);

    return <CardContainer>{card}</CardContainer>;
};

export default PresetCard;

import { useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import { useUserData } from "../provider/UserDataProvider";
import { MAX_CARD_LIMIT } from "../consts/env";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { get } from "http";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2vw;
    color: gray;
`;

const Button = ({ type }: { type: string }) => {
    const { urls, presets, getNextRecentUrls, getBeforeRecentUrls, getNextRecentPresets, getBeforeRecentPresets } = useUserData();
    const [count, setCount] = useState<number>(1);

    const incrementUrl = async () => {
        if (urls.length < MAX_CARD_LIMIT) return;
        const flag = await getNextRecentUrls(urls[urls.length - 1]);
        if (flag === 0) return;
        setCount(count + 1);
    };

    const decrementUrl = () => {
        if (count === 1) return;
        getBeforeRecentUrls(urls[urls.length - 1]);
        setCount(count - 1);
    };

    const incrementPreset = async () => {
        if (presets.length < MAX_CARD_LIMIT) return;
        const flag = await getNextRecentPresets(presets[presets.length - 1]);
        if (flag === 0) return;
        setCount(count + 1);
    };

    const decrementPreset = () => {
        if (count === 1) return;
        getBeforeRecentPresets(presets[presets.length - 1]);
        setCount(count - 1);
    };

    return (
        <Container>
            <div className="mx-[20px]" onClick={type === "url" ? decrementUrl : decrementPreset}>
                <NavigateBeforeIcon />
            </div>
            <div>{count}</div>
            <div className="mx-[20px]" onClick={type === "url" ? incrementUrl : incrementPreset}>
                <NavigateNextIcon />
            </div>
        </Container>
    );
};

export default Button;

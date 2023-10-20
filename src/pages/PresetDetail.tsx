import { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Divider from "../components/Divider";
import UrlCard from "../components/UrlCard";
import PresetCard from "../components/PresetCard";
import Button from "../components/NextPage";
import Greet from "../components/Greet";

const PresetDetail = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();
    const { id } = useParams();

    return (
        <div className="flex flex-col">
            <div className="py-[2.5vw]">
                <Divider text={id || ""} type="left" />
                <UrlCard urls={urls} />
                <Button type={"url"} />
                <Divider text={id || ""} type="right" />
            </div>
        </div>
    );
};

export default PresetDetail;

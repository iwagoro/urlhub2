import { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Divider from "../components/Divider";
import UrlCard from "../components/UrlCard";
import Button from "../components/NextPage";

const PresetDetail = () => {
    const { user, initUrls, urls, getUrlsWithArray } = useUserData();
    const { id } = useParams();

    useEffect(() => {
        initUrls();
        const data: string[] = [];
        data.push(id || "");
        getUrlsWithArray(data);
    }, [id]);

    return (
        <div className="w-[100%] max-w-[1500px] flex flex-col">
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

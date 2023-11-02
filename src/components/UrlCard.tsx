import React, { useMemo, useState } from "react";
import { urlData } from "../consts/interface";
import { useUserData } from "../provider/UserDataProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MyMenu from "./MyMenu";
import { CardContainer } from "./styled/CardContainer";
import { Card } from "./styled/Card";
import { FlexBox } from "./styled/FlexBox";
import { ImageCard } from "./styled/ImageCard";
import { MAX_CARD_LIMIT } from "../consts/env";
const UrlCard = ({ urls }: { urls: Array<urlData> }) => {
    const { setUrlToLatest } = useUserData();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const card = useMemo(() => {
        const result: React.ReactNode[] = [];
        urls.map((url, index) => {
            result.push(
                <Card key={`url${index}`} target="_blank" href={url.url} onClick={() => setUrlToLatest(url.name)}>
                    <ImageCard src={url.image} />
                    <FlexBox w="80%" j="between" a="center">
                        <div>
                            <h3 className=" mt-[10px]">{url.name}</h3>
                            <h4 className=" mb-[10px]">type:url</h4>
                        </div>
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                localStorage.setItem("url", JSON.stringify(url));
                                setAnchorEl(e.currentTarget);
                            }}
                        >
                            <MoreVertIcon sx={{ color: "gray" }} />
                        </div>
                    </FlexBox>
                </Card>
            );
        });
        for (let i = 0; i < MAX_CARD_LIMIT - urls.length; i++) {
            result.push(
                <Card key={`url${i}`}>
                    <ImageCard src="" />
                    <FlexBox w="80%" j="between" a="center">
                        <div className="ml-[4px]">
                            <h3 className=" mt-[10px] font-black" style={{ fontFamily: "Flow Circular" }}>
                                aaaaaaaaaaa
                            </h3>
                            <h4 className=" mb-[10px] font-black" style={{ fontFamily: "Flow Circular" }}>
                                aaaaaaa
                            </h4>
                        </div>
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                localStorage.setItem("url", JSON.stringify({ name: "empty", url: "", image: "" }));
                                setAnchorEl(e.currentTarget);
                            }}
                        >
                            <MoreVertIcon sx={{ color: "gray" }} />
                        </div>
                    </FlexBox>
                </Card>
            );
        }
        return result;
    }, [urls]);

    return (
        <>
            <CardContainer>{card}</CardContainer>
            <MyMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </>
    );
};

export default UrlCard;

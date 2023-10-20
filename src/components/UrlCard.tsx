import React, { useMemo } from "react";
import styled from "styled-components";
import { urlData } from "../consts/interface";
import { useUserData } from "../provider/UserDataProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

const Card = styled.a`
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

    background-color: gray;
`;

const UrlCard = ({ urls }: { urls: Array<urlData> }) => {
    const { user, setUrlToLatest } = useUserData();

    const card = useMemo(() => {
        if (urls.length === 0) return <div style={{ width: "calc(90vw)" }}></div>;
        else {
            return urls.map((url, index) => (
                <Card key={`url${index}`} target="_blank" href={url.url} onClick={() => setUrlToLatest(url.name)}>
                    <ImageContainer>
                        <img src={url.image} alt={url.name} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
                    </ImageContainer>
                    <div className="w-[80%] flex items-center justify-between">
                        <div>
                            <h3 className=" mt-[10px]">{url.name}</h3>
                            <h4 className=" mb-[10px]">type:url</h4>
                        </div>
                        <MoreVertIcon
                            sx={{ color: "gray" }}
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        />
                    </div>
                </Card>
            ));
        }
    }, [urls]);

    return <Container>{card}</Container>;
};

export default UrlCard;

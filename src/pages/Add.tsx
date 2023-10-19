import { useEffect } from "react";
import styled from "styled-components";
import { useUserData } from "../provider/UserDataProvider";
import { TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

const Container = styled.div`
    width: calc(100% - 20px);
    height: 100%;
    background-color: #ececec;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: between;
`;

const ImageContainer = styled.div`
    width: 300px;
    aspect-ratio: 1/1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    border-radius: 10px;

    background-color: black;

    &:hover {
        border: 2px solid white;
    }
`;

const Add = ({ type }: { type: string }) => {
    const { image, generateImage, initImage } = useUserData();
    const { register, handleSubmit, reset } = useForm<{ name: string; url: string }>();
    const { user, addPreset, addUrl } = useUserData();

    useEffect(() => {
        generateImage();
    }, []);

    const onSubmit: SubmitHandler<{ name: string; url: string }> = (data) => {
        type === "url" ? addUrl(data.name, data.url, image) : addPreset(data.name, image);
        reset();
        initImage();
    };

    return (
        <Container>
            <h1>{type === "url" ? "URL" : "Preset"}を追加</h1>
            <div className="flex justify-between items-center">
                <ImageContainer>
                    <img src={image} className="aspect-square object-cover"></img>
                </ImageContainer>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField {...register("name")} />
                        {type === "url" && <TextField {...register("url")} />}
                        <button type="submit" style={{ display: "none" }}></button> {/* ダミーのSubmitボタン */}
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Add;

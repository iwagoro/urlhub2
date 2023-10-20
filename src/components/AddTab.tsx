import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tabs, Tab, TextField } from "@mui/material";
import { useUserData } from "../provider/UserDataProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";

const Container = styled.div`
    width: 100%;
    height: 50vh;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 200px;
    aspect-ratio: 1/1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    border-radius: 10px;

    background-color: transparent;
`;

const Input = styled(TextField)`
    width: 100%;
    background-color: #ececec;
    border: 1px solid gray;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
`;

const AddTab = () => {
    const [value, setValue] = useState(1);
    const { image, generateImage, initImage } = useUserData();
    const { register, handleSubmit, reset } = useForm<{ name: string; url: string }>();
    const { user, addPreset, addUrl } = useUserData();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(value);
    };

    useEffect(() => {
        generateImage();
    }, []);

    const onSubmit: SubmitHandler<{ name: string; url: string }> = (data) => {
        reset();
        initImage();
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary" textColor="secondary" centered>
                <Tab label="Add Url" value={1} />
                <Tab label="Add Preset" value={2} />
            </Tabs>
            <Container>
                <div className="w-full flex flex-col justify-center items-center ">
                    <h2 className="w-[35%] text-left my-[1vh]">ADD{value === 1 ? " URL" : " PRESET"}</h2>
                    <div className="w-[35%] flex justify-between items-center">
                        <ImageContainer>
                            <img src={image} className="aspect-square object-cover"></img>
                        </ImageContainer>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between items-center h-full">
                            <Input label="Title" {...register("name")} color="secondary" />
                            {value === 1 && <Input label="URL" {...register("url")} color="secondary" multiline minRows={4} maxRows={4} />}
                            <button type="submit" style={{ display: "none" }}></button> {/* ダミーのSubmitボタン */}
                        </form>
                    </div>
                    <div className="w-[35%] my-[1vh] flex justify-end">
                        <Button variant="contained" color="secondary">
                            save
                        </Button>
                    </div>
                    <div className="h-[10vh] w-full"></div>
                </div>
            </Container>
        </>
    );
};

export default AddTab;

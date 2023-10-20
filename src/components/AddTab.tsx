import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tabs, Tab, TextField } from "@mui/material";
import { useUserData } from "../provider/UserDataProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 70%;
    height: auto;
    background-color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        width: 90%;
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    height: auto;
    aspect-ratio: 1/1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    border-radius: 10px;

    background-color: transparent;
`;

const Input = styled.input`
    color: gray;
    width: 100%;
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    padding: 0 10px;
    height: 20%;

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Input2 = styled.textarea`
    color: gray;
    idth: 100%;
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    padding: 10px;
    height: 70%;
    resize: none;

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Button = styled.button`
    width: 90px;
    aspect-ratio: 5/3;
    border-radius: 30px;
    border: 1px solid gray;
    color: gray;

    @media (max-width: 480px) {
        width: 40px;
        font-size: 10px;
    }
`;

const AddTab = () => {
    const [value, setValue] = useState(1);
    const { image, generateImage, initImage } = useUserData();
    const { register, handleSubmit, reset } = useForm<{ name: string; url: string }>();
    const { user, addPreset, addUrl } = useUserData();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        generateImage();
    }, []);

    const onSubmit: SubmitHandler<{ name: string; url: string }> = (data) => {
        value === 1 ? addUrl(data.name, data.url, image) : addPreset(data.name, image);
        reset();
        initImage();
    };

    return (
        <>
            <Container>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary" textColor="secondary" sx={{ width: "90%" }}>
                    <Tab label="Add Url" value={1} sx={{ fontSize: "14px", "@media(max-width:480px)": { fontSize: "10px" } }} />
                    <Tab label="Add Preset" value={2} sx={{ fontSize: "14px", "@media(max-width:480px)": { fontSize: "10px" } }} />
                </Tabs>
                <form className="w-[90%] flex flex-col  items-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-[90%] h-auto mt-[5%] flex  items-center">
                        <ImageContainer>
                            <img src={image} className="aspect-square object-cover"></img>
                        </ImageContainer>
                        <div style={{ aspectRatio: "3/2" }} className=" w-[60%] flex flex-col justify-between pl-[5%]">
                            <Input placeholder="Title" {...register("name")} />
                            {value === 1 && <Input2 placeholder="URL link" {...register("url")} />}
                        </div>
                    </div>
                    <div className="w-[90%] my-[3%] flex justify-end">
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </Container>
        </>
    );
};

export default AddTab;

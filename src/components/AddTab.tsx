import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tabs, Tab, TextField } from "@mui/material";
import { useUserData } from "../provider/UserDataProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { Switch } from "@mui/material";
import { get } from "http";

const Container = styled.div`
    max-width: 1000px;
    width: 80%;
    height: auto;
    border: 3px solid white;
    background-color: rgba(50, 50, 50, 0.8);
    background: repeating-linear-gradient(-45deg, transparent, transparent 15px, gray 0, gray 30px);

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.div`
    position: relative;
    max-width: 100%;
    width: 80%;
    text-align: center;

    &:after,
    &:before {
        content: "";
        width: 30px;
        height: 30px;
        position: absolute;
        display: inline-block;
    }

    &:before {
        border-left: solid 5px white;
        border-top: solid 5px white;
        top: 0;
        left: 0;
    }

    &:after {
        border-right: solid 5px white;
        border-bottom: solid 5px white;
        bottom: 0;
        right: 0;
    }
`;

const InputContainer2 = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2px;
    text-align: center;

    &:after,
    &:before {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        display: inline-block;
    }

    &:before {
        border-left: solid 4px white;
        border-bottom: solid 4px white;
        bottom: 0;
        left: 0;
    }

    &:after {
        border-right: solid 4px white;
        border-top: solid 4px white;
        top: 0;
        right: 0;
    }
`;

const Input = styled.input`
    color: white;
    width: 100%;
    background-color: transparent;
    border: 1px solid white;
    outline: none;
    padding: 0 10px;
    font-size: 30px;
    line-height: 2;

    &::placeholder {
        color: lightgray;
    }
`;

const Input2 = styled.textarea`
    color: white;
    width: 100%;
    background-color: transparent;
    border: 1px solid white;
    padding: 0 10px;
    outline: none;
    font-size: 30px;
    line-height: 2;
    resize: none;

    @media (max-width: 480px) {
        font-size: 10px;
    }

    &::placeholder {
        color: lightgray;
    }
`;

const Button = styled.button`
    width: 50%;
    padding: 10px;
    border-radius: 10px;
    border: 3px dashed white;
    color: white;
    margin: 50px;

    @media (max-width: 480px) {
        width: 40px;
        font-size: 10px;
    }
`;

const AddTab = () => {
    const [type, setType] = useState(true);
    const { image, generateImage, initImage } = useUserData();
    const { register, getValues, reset } = useForm<{ name: string; url: string }>();
    const { user, addPreset, addUrl } = useUserData();

    useEffect(() => {
        generateImage();
    }, []);

    const onClick = () => {
        const title = getValues("name");
        const url = getValues("url");
        if (type) {
            addUrl(title, url, image);
        } else {
            addPreset(title, image);
        }
    };

    return (
        <Container>
            <div className="w-[80%] py-[2vw] flex  items-center">
                <Switch
                    defaultChecked
                    sx={{ m: 1 }}
                    onChange={() => {
                        setType((prev) => (prev = !prev));
                    }}
                ></Switch>
                <h1 className="grow text-left text-[white]">ADD {type ? "URL" : "PRESET"}</h1>
            </div>
            <div className="flex flex-col w-full  items-center h-[60%]">
                <p className="w-[80%] py-[20px] text-left text-white">TITLE</p>
                <InputContainer>
                    <InputContainer2>
                        <Input placeholder="Enter the Title" {...register("name")} />
                    </InputContainer2>
                </InputContainer>
                {type !== false && (
                    <>
                        <p className="w-[80%] py-[20px] text-left text-white">URL</p>
                        <InputContainer>
                            <InputContainer2>
                                <Input2 placeholder="Enter the Url Link" {...register("url")} />
                            </InputContainer2>
                        </InputContainer>
                    </>
                )}
                <Button onClick={onClick}>SUBMIT</Button>
            </div>
        </Container>
    );
};

export default AddTab;

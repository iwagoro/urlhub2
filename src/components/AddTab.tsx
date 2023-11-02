import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tabs, Tab, TextField } from "@mui/material";
import { useUserData } from "../provider/UserDataProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import Divider from "./Divider";

const ModalContainer = styled.div`
    position: relative;
    max-width: 100%;
    width: 80%;
    text-align: center;

    &:after,
    &:before {
        content: "";
        width: 60px;
        height: 60px;
        position: absolute;
        display: inline-block;
    }

    &:before {
        border-left: solid 10px white;
        border-top: solid 10px white;
        top: 0;
        left: 0;
    }

    &:after {
        border-right: solid 10px white;
        border-bottom: solid 10px white;
        bottom: 0;
        right: 0;
    }
`;

const ModalContainer2 = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3px;
    text-align: center;

    &:after,
    &:before {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        display: inline-block;
    }

    &:before {
        border-left: solid 5px white;
        border-bottom: solid 5px white;
        bottom: 0;
        left: 0;
    }

    &:after {
        border-right: solid 5px white;
        border-top: solid 5px white;
        top: 0;
        right: 0;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid white;
    background-color: rgba(0, 0, 0, 0);

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
    font-size: 40px;
    line-height: 2;
`;

const Input2 = styled.textarea`
    color: white;
    width: 100%;
    background-color: transparent;
    border: 1px solid white;
    padding: 0 10px;
    outline: none;
    font-size: 40px;
    line-height: 2;
    resize: none;

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Button = styled.button`
    width: 70px;
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
        if (data.name === "") return;
        value === 1 ? addUrl(data.name, data.url, image) : addPreset(data.name, image);
        reset();
        initImage();
    };

    return (
        <ModalContainer>
            <ModalContainer2>
                <Container>
                    <h1 className=" text-white">ADD URL</h1>
                    <form className="flex flex-col w-full justify-between items-center mb-[2vw]">
                        <Divider text="TITLE" type="left" color="white" />
                        <InputContainer>
                            <InputContainer2>
                                <Input />
                            </InputContainer2>
                        </InputContainer>
                        <Divider text="URL" type="left" color="white" />
                        <InputContainer>
                            <InputContainer2>
                                <Input2 />
                            </InputContainer2>
                        </InputContainer>
                    </form>
                </Container>
            </ModalContainer2>
        </ModalContainer>
    );
};

export default AddTab;

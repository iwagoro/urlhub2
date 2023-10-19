import React from "react";
import styled from "styled-components";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    width: calc(100% - 5w);
    aspect-ratio: 1/1;
    box-shadow: 0 1rem 2rem #cecece;
    border-radius: 20px;
    background-color: white;
    margin: 2.5vw 2.5vw 0 2.5vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    color: gray;
`;

const Icon = styled(InsertLinkIcon)`
    font-size: 30px;

    media (max-width: 768px) {
        font-size: 15px;
    }
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

    background-color: black;
`;

const AddUrlButton = () => {
    const navigate = useNavigate();
    return (
        <Container onClick={() => navigate("/add/url")}>
            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1479&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ aspectRatio: "1/1", objectFit: "cover" }} />
            </ImageContainer>
            <h2>ADD URL</h2>
        </Container>
    );
};

export default AddUrlButton;

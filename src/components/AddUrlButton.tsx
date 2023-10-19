import React from "react";
import styled from "styled-components";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    width: calc(100% - 5w);
    aspect-ratio: 1/1;
    box-shadow: 0 1rem 2rem #cecece;
    border-radius: 10px;
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

const AddUrlButton = () => {
    const navigate = useNavigate();
    return (
        <Container onClick={() => navigate("/add/url")}>
            <Icon />
            <h2>ADD URL</h2>
        </Container>
    );
};

export default AddUrlButton;

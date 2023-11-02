import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.a`
    width: 100%;
    cursor: pointer;

    border-radius: 20px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Card2 = styled(Link)`
    width: 100%;
    cursor: pointer;

    border-radius: 20px;

    box-shadow: 0 1rem 2rem #cecece;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

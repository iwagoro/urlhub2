import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    padding: 0vw 2.5vw;
    height: auto;
    display: grid;
    flex-wrap: wrap;
    grid-gap: 2vw;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
`;

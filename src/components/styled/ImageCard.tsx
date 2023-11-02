import styled from "styled-components";

const ImageContainer = styled.div`
    width: 80%;
    margin-top: 10%;
    aspect-ratio: 1/1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    background-color: lightgray;
`;

export const ImageCard = ({ src }: { src: string }) => {
    return (
        <ImageContainer>
            <img src={src} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
        </ImageContainer>
    );
};

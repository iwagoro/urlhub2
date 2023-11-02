import styled, { CSSObject } from "styled-components";

interface LineProps {
    style?: CSSObject;
}

const Line = styled.div<LineProps>`
    width: 100%;
    height: 2px;
    background-color: gray;

    opacity: 0.4;
    ${(props) => props.style}
`;

const LineContainer = styled.div`
    flex-grow: 1;
    overflow: hidden;
    color: gray;
    font-size: 20px;
    opacity: 0.2;
    letter-spacing: 0.5px;

    @media (max-width: 640px) {
        font-size: 10px;
    }
`;

const Text = styled.h2`
    width: auto;
    white-space: nowrap;
    padding: 0 20px;
    font-weight: bold;
    font-family: "Libre Barcode 128 Text";
    font-size: 40px;
    text-align: center;
    border-radius: 10px;
    color: gray;

    @media (max-width: 640px) {
        font-size: 25px;
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 2vw 2.5vw;
    display: flex;
    justify-content: between;
    align-items: center;
`;

const Divider = ({ text, type }: { text: string; type: string }) => {
    if (type === "right") {
        return (
            <Container>
                <LineContainer>
                    <Line />
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                </LineContainer>

                <Text>{text}</Text>
            </Container>
        );
    } else if (type === "left") {
        return (
            <Container>
                <Text>{text}</Text>
                <LineContainer>
                    <Line />
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                </LineContainer>
            </Container>
        );
    } else if (type === "none") {
        return (
            <Container>
                <Line style={{ width: "100%" }} />
            </Container>
        );
    } else {
        return <></>;
    }
};

export default Divider;

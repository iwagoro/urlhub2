import styled, { CSSObject } from "styled-components";

interface LineProps {
    style?: CSSObject;
}

const Line = styled.div<LineProps>`
    width: 80%;
    height: 2px;
    background-color: gray;
    ${(props) => props.style}
`;

const Text = styled.div`
    width: 20%;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    border: 2px solid gray;
    border-radius: 10px;
    color: gray;

    @media (max-width: 1000px) {
        font-size: 2vw;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: between;
    align-items: center;
    padding: 0px 5vw;
    margin: 10px 0;
`;

const Divider = ({ text, type }: { text: string; type: string }) => {
    if (type === "right") {
        return (
            <Container>
                <Line />
                <Text>{text}</Text>
            </Container>
        );
    } else if (type === "left") {
        return (
            <Container>
                <Text>{text}</Text>
                <Line />
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

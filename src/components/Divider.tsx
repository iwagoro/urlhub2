import styled, { CSSObject } from "styled-components";

interface LineProps {
    style?: CSSObject;
}

const Line = styled.div<LineProps>`
    width: 75%;
    height: 2px;
    background-color: #f3f3f3;
    ${(props) => props.style}
`;

const Text = styled.h2`
    width: 25%;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    color: gray;
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

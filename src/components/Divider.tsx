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

const Text = styled.h2`
    width: 25%;
    font-weight: bold;
    font-family: "Libre Barcode 128 Text";
    font-size: 40px;
    text-align: center;
    border-radius: 10px;
    color: gray;

    @media (max-width: 640px) {
        font-size: 20px;
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
                <div className="w-[75%] overflow-hidden text-[gray] opacity-[0.2] tracking-wider">
                    <Line />
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                </div>

                <Text>{text}</Text>
            </Container>
        );
    } else if (type === "left") {
        return (
            <Container>
                <Text>{text}</Text>
                <div className="w-[75%] overflow-hidden text-[gray] opacity-[0.2] tracking-wider">
                    <Line />
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                </div>
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

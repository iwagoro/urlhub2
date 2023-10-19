import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2vw;
`;

const Button = ({ type }: { type: string }) => {
    return (
        <Container>
            <Pagination count={10}></Pagination>
        </Container>
    );
};

export default Button;

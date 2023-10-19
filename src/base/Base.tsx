import SearchInput from "../components/SearchInput";
import styled, { CSSObject } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
    width?: string;
    style?: CSSObject;
}

const Container = styled.div`
    box-shadow: 0 1rem 2rem #cecece;
    width: calc(100% - 5w);
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    border-radius: 20px;

    margin: 2.5vw 2.5vw 0 2.5vw;
`;
const Button = styled(Link)<ButtonProps>`
    width: ${(props) => (props.width ? props.width : "auto")};
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    color: gray;
    border-radius: 5px;
    ${(props) => props.style} // props.styleをそのまま適用する
    &:hover {
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Base = () => {
    return (
        <Container>
            <Button id="home-button" width="20%" to="/">
                HOME
            </Button>
            <div className="w-[40%]">
                <SearchInput />
            </div>
            <Button id="library-button" width="20%" to="/presets">
                PRESETS
            </Button>
            <Button id="library-button" width="20%" to="/Urls">
                URLS
            </Button>
        </Container>
    );
};

export default Base;

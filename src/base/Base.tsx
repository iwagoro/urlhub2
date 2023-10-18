import SearchInput from "../components/SearchInput";
import styled, { CSSObject } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
    width?: string;
    style?: CSSObject;
}

const Container = styled.div`
    width: calc(100% - 20px);
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #ececec;
    border-radius: 10px;

    margin: 10px;
`;

const Button = styled(Link)<ButtonProps>`
    width: ${(props) => (props.width ? props.width : "auto")};
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    color: gray;
    ${(props) => props.style} // props.styleをそのまま適用する
    &:hover {
        border-radius: 5px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Base = () => {
    return (
        <Container>
            <Button id="home-button" width="20%" to="/" style={{ fontWeight: "bold" }}>
                URLHUB
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

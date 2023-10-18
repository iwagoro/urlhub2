import SearchInput from "../components/SearchInput";
import styled, { CSSObject } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
    width?: string;
    style?: CSSObject;
}

const Button = styled(Link)<ButtonProps>`
    width: ${(props) => (props.width ? props.width : "auto")};
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    color: white;
    ${(props) => props.style} // props.styleをそのまま適用する
    &:hover {
        border: 2px solid white;
        border-radius: 5px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Base = () => {
    return (
        <div className="w-full h-[100px]  flex justify-between items-center box-border px-[5vw]">
            <Button id="home-button" width="20%" to="/" style={{ fontWeight: "bold" }}>
                URLHUB
            </Button>
            <div className="w-[40%]">
                <SearchInput />
            </div>
            <Button id="library-button" width="20%" to="/presets">
                PRESETS
            </Button>
            <Button id="library-button" width="20%" to="/library">
                LIBRARY
            </Button>
        </div>
    );
};

export default Base;

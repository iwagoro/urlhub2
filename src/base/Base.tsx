import SearchInput from "../components/SearchInput";
import styled, { CSSObject } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import AddTab from "../components/AddTab";

interface ButtonProps {
    width?: string;
    style?: CSSObject;
}

const Container = styled.div`
    width: 100%;
    max-width: 1500px;
    height: 70px;

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 2.5vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #efefef;
    @media (max-width: 480px) {
        height: 50px;
    }
`;
const Button = styled(Link)<ButtonProps>`
    width: ${(props) => (props.width ? props.width : "auto")};
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    border-radius: 5px;
    ${(props) => props.style} // props.styleをそのまま適用する
    &:hover {
    }

    @media (max-width: 640px) {
        font-size: 12px;
    }
`;

const Base = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeDrawer = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Container>
                <Button id="home-button" width="15%" to="/">
                    HOME
                </Button>
                <div className="w-[35%]">
                    <SearchInput />
                </div>
                <Button id="library-button" width="15%" to="/presets">
                    PRESET
                </Button>
                <Button id="library-button" width="15%" to="/Urls">
                    URL
                </Button>
                <div className="w-[10%] flex justify-center items-center text-[gray] cursor-pointer" onClick={() => setIsOpen(true)}>
                    <AddIcon />
                </div>
            </Container>
            <Modal open={isOpen} onClose={closeDrawer} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <AddTab />
            </Modal>
        </>
    );
};

export default Base;

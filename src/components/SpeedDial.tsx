import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const actions = [
    { name: "url", icon: <div>ADD URL</div> },
    { name: "preset", icon: <div>ADD PRESET</div> },
];
const actionSize = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    width: "120px",
    height: "auto",
    padding: "10px",
    borderRadius: "10px",
    "&:hover": { backgroundColor: "black" },

    "@media (max-width: 480px)": {
        fontSize: "10px",
        width: "100px",
    },
};

const MyDial = styled(SpeedDial)`
    position: fixed;
    bottom: calc(2vw + 20px);
    right: 2vw;

    & .MuiFab-primary {
        border: 1px solid white;
        background-color: black;
        color: white;
        width: 80px;
        height: 80px;

        & .MuiSpeedDialIcon-icon {
            font-size: 25px;
        }

        &:hover {
            background-color: black;
        }
    }

    @media (max-width: 480px) {
        bottom: 30px;
        right: 10px;

        & .MuiFab-primary {
            border: 1px solid white;
            background-color: black;
            color: white;
            width: 50px;
            height: 50px;

            & .MuiSpeedDialIcon-icon {
                font-size: 25px;
            }
        }
    }
`;

const MySpeedDial = () => {
    const navigate = useNavigate();

    const onClick = (name: string) => {
        name === "url" ? navigate("/add/url") : navigate("/add/preset");
    };
    return (
        <MyDial ariaLabel="Custom SpeedDial example" icon={<SpeedDialIcon />}>
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    sx={actionSize}
                    onClick={() => {
                        onClick(action.name);
                    }}
                />
            ))}
        </MyDial>
    );
};

export default MySpeedDial;

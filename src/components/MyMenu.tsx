import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import PresetsMenu from "./PresetsMenu";
import { useUserData } from "../provider/UserDataProvider";

const MyMenu = ({ anchorEl, setAnchorEl }: { anchorEl: null | HTMLElement; setAnchorEl: (value: null | HTMLElement) => void }) => {
    const open = Boolean(anchorEl);
    const { deleteUrl } = useUserData();
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

    const handleClose = (type: string) => {
        if (type === "AddToPreset") setAnchorEl2(anchorEl);
        else if (type === "Delete") {
            const url = localStorage.getItem("url");
            const fixedUrl = JSON.parse(url!);
            deleteUrl(fixedUrl.name);
        }
        setAnchorEl(null);
    };

    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={(e) => handleClose("AddToPreset")}>Add to Preset</MenuItem>
                <MenuItem onClick={(e) => handleClose("Delete")}>Delete</MenuItem>
            </Menu>
            <PresetsMenu anchorEl={anchorEl2} setAnchorEl={setAnchorEl2} />
        </>
    );
};

export default MyMenu;

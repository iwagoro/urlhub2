import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../provider/UserDataProvider";
import { urlData } from "../consts/interface";

const PresetsMenu = ({ anchorEl, setAnchorEl }: { anchorEl: null | HTMLElement; setAnchorEl: (value: null | HTMLElement) => void }) => {
    const open = Boolean(anchorEl);
    const { urls, presets, updateUrl } = useUserData();

    const handleClose = (type: string) => {
        const url = localStorage.getItem("url");
        if (url === null) return;
        setAnchorEl(null);
        const fixedUrl: urlData = JSON.parse(url!);
        fixedUrl.presets = [...fixedUrl.presets, type];
        updateUrl(fixedUrl.name, { presets: fixedUrl.presets });
    };

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
        >
            {presets.map((preset, index) => (
                <MenuItem key={`preset${index}`} onClick={() => handleClose(preset.name)} sx={{ width: "300px" }}>
                    {preset.name}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default PresetsMenu;

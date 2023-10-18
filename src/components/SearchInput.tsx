import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Search = styled.input`
    width: 90%;
    background: transparent;
    border-bottom: 1.5px solid gray;
    outline: none;
    color: white;
    font-size: 16px;

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

type Inputs = {
    keyword: string;
};

const SearchInput = () => {
    const [keyword, setKeyword] = useState<string>("");
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        navigate(`/presets/${data.keyword}`);
    };

    return (
        <form className="w-[100%]  flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
            <Search {...register("keyword")} />
            <button>
                <SearchIcon
                    sx={{
                        position: "relative",
                        left: "-16px",
                        fontSize: "16px",
                        color: "white",
                        cursor: "pointer",
                        marginBottom: "2px",
                        "@media (max-width: 480px)": {
                            left: "-10px",
                            fontSize: "12px",
                        },
                    }}
                />
            </button>
        </form>
    );
};

export default SearchInput;

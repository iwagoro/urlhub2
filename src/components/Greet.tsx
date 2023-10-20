import React, { useEffect, useState } from "react";
import { useUserData } from "../provider/UserDataProvider";
import styled from "styled-components";

const Container = styled.div`
    width: calc(100% - 5w);
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: transparent;

    margin: 2.5vw 2.5vw 0 2.5vw;
`;
const Greet = () => {
    const [greet, setGreet] = useState<string>("Hello");
    const { user } = useUserData();

    const createGreet = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
            setGreet("Good Morning");
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreet("Good Afternoon");
        } else {
            setGreet("Good Evening");
        }
    };

    useEffect(() => {
        createGreet(); // 最初の実行
        const intervalId = setInterval(createGreet, 1000 * 60 * 60); // 1時間ごとに実行

        return () => {
            clearInterval(intervalId); // コンポーネントがアンマウントされるときにクリア
        };
    }, []);

    return (
        <Container>
            <h1 className="w-full p-[5vw] text-left">
                {greet}
                <br />
                USER:"{user}"
            </h1>
        </Container>
    );
};

export default Greet;

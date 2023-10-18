import { useState } from "react";

export const useImage = () => {
    const [image, setImage] = useState<string>("");

    const generateImage = async () => {
        const url = "https://source.unsplash.com/random";
        const result = await fetch(url).then((response) => response.url);

        setImage(result);
    };

    const initImage = () => {
        setImage("");
    };

    return { image, generateImage, initImage };
};

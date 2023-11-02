import React from "react";
export const FlexBox = ({ children, j, a, w }: { children: React.ReactNode; j: string; a: string; w: string }) => {
    return <div className={`flex items-${a} justify-${j} w-[${w}]`}>{children}</div>;
};

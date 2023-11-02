import React from "react";
import styled from "styled-components";
export const FlexBox = styled.div<{ j: string; a: string; w: string }>`
    display: flex;
    justify-content: ${(props) => props.j};
    align-items: ${(props) => props.a};
    width: ${(props) => props.w};
`;

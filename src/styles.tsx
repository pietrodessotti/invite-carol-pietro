import styled from "styled-components";

export const PageOneContainer = styled.div`
    position: relative;
`;

export const PageOne = styled.img`
    width: 100%;
    height: 100%;
`;

export const PageTwo = styled.img`
    width: 100%;
    height: 100%;
`;

export const PageOneContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 1px solid blue;
    width: 90px;
    height: 50px;
    margin-left: 5px;
    margin-top: 0px;
`;

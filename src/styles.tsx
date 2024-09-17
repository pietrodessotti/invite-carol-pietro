import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
`;

export const PageImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const ButtonInImage = styled.div<{isConfirmation?: boolean}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: ${({ isConfirmation }) => isConfirmation ? '200px' : '90px'};
    height: ${({ isConfirmation }) => isConfirmation ? '130px' : '50px'};
    margin-left: 5px;
    margin-top: ${({ isConfirmation }) => isConfirmation ? '80px' : '0px'};

    z-index: 2;

    @media (min-width: 768px) {
        width: ${({ isConfirmation }) => isConfirmation ? '700px' : '420px'};
        height: ${({ isConfirmation }) => isConfirmation ? '500px' : '220px'};
        margin-left: 30px;
        margin-top: ${({ isConfirmation }) => isConfirmation ? '350px' : '10px'};
    }
`;

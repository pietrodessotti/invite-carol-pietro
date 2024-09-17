import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
`;

export const PageImage = styled.img<{openInvite?: boolean}>`
    width: 100%;
    height: 100%;
`;

export const ButtonInImage = styled.div<{isConfirmation?: boolean}>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: ${({ isConfirmation }) => isConfirmation ? '150px' : '90px'};
    height: ${({ isConfirmation }) => isConfirmation ? '100px' : '50px'};
    margin-left: ${({ isConfirmation }) => isConfirmation ? '0px' : '5px'};
    margin-top: ${({ isConfirmation }) => isConfirmation ? '50px' : '0px'};

    z-index: 2;

    @media (min-width: 768px) {
        width: ${({ isConfirmation }) => isConfirmation ? '900px' : '420px'};
        height: ${({ isConfirmation }) => isConfirmation ? '650px' : '220px'};
        margin-left: ${({ isConfirmation }) => isConfirmation ? '-50px' : '30px'};
        margin-top: ${({ isConfirmation }) => isConfirmation ? '350px' : '10px'};
    }
`;

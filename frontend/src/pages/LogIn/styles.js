import styled from "styled-components";
import backgroundBody from "../../assets/backgroundBody.png";

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url(${backgroundBody});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 91px;
`;

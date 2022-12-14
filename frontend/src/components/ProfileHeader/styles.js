import styled from "styled-components";

export const Container = styled.div`
    width: 138px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 36px;
    right: 100px;

    img {
        cursor: pointer;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;

    p {
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.0625rem;
    }
`;

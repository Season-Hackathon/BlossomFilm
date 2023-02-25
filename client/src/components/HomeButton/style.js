import styled from "styled-components";

export const HomeButton = styled.button`
    width: 2.3125rem; // 37px
    height: 2.3125rem;

    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 2.3125rem;

    display: flex;
    justify-content: center;

    cursor: pointer;
    :active {
        filter: brightness(0.9);
    }

    img {
        align-self: center;
        width: 1.5625rem;
    }
`;

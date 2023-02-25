import styled from "styled-components";

export const CheckButtonLayout = styled.div`
    width: 19rem;
    height: 3.2rem;

    padding: 3px 0;
    padding-left: 26px;
    padding-right: 3px;

    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25.5px;

    display: flex;
    align-items: center;
    gap: 1rem;

    .content-input {
        flex-grow: 1;
        padding: 17px 0;
        border: none;
        outline: none;

        text-align: left;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        color: #636363;
    }
`;

export const OkButton = styled.button`
    padding: 16px 22px;
    height: 100%;

    background: #ff859b;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 25.5px 25.5px 25.5px 23.5px;

    font-weight: 700;
    color: white;
    font-size: 16px;

    cursor: pointer;
    :active {
        filter: brightness(0.9);
    }
`;

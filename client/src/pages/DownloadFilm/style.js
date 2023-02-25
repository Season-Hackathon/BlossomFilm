import styled from "styled-components";
import { Button } from "../../components/Button/style";

export const DownloadFilmLayout = styled.div`
    position: relative;

    max-height: calc(var(--vh, 1vh) * 100);
    padding: 0 40px;

    display: flex;
    align-items: center;
    flex-direction: column;

    canvas {
        position: relative;
        background-color: yellow;
    }

    .back-button {
        position: absolute;
        left: 40px;
        top: 60px;
    }

    .title {
        margin-top: 140px;
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #212121;
    }

    .option-button {
        margin: 1.6rem;
        margin-top: 2rem;
    }

    .retry-button {
        padding-top: 1.563rem;
        padding-bottom: 1.563rem;
        border: none;
        background: none;

        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #636363;

        cursor: pointer;
    }

    .frame {
        position: relative;

        ${(props) =>
            props.type === "hor"
                ? `width : 394px; height: 264px; margin : 3rem  0; `
                : `width :200px; height :600px; `}

        overflow: hidden;
        background-repeat: no-repeat;
        background-size: cover;

        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            margin: 0 auto;
        }
    }
`;

export const DownloadButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-content: space-between;

    background-color: #ff6581;
    color: #ffffff;
    p {
        flex-grow: 1;
    }

    :active {
        filter: brightness(0.8);
    }
`;

export const Frame = styled.img`
    width: 394px;
    height: 263px;
    background-color: red;
`;

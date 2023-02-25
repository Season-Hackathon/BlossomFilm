import styled, { keyframes } from "styled-components";
import { CheckButtonLayout, OkButton } from "../CheckButton/style";

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalLayout = styled.div`
    position: absolute;
    z-index: 999;

    height: calc(var(--vh, 1vh) * 100);
    width: 100%;

    background-color: rgba(0, 0, 0, 0.5);
    animation: ${boxFade} 0.5s 0s;

    .close-btn {
        position: absolute;
        top: 0px;
        right: 0px;

        width: 0.8rem;
        padding: 18px;

        cursor: pointer;

        :active {
            filter: brightness(0.2);
        }
    }

    .content-wrapper {
        width: 80%;
        padding: 5.5rem 18px;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        background-color: white;

        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const CopyButtonLayout = styled(CheckButtonLayout)``;
export const CopyBtn = styled(OkButton)``;

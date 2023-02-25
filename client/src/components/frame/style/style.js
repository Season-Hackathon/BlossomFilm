import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .wrapperContainer {
        width: 394px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        align-items: center;
    }
    .wrapperContainer > .cropperObject > .cropper-container {
        width: 400px;
    }
    .wrapperContainer > .btnbox {
        display: flex;
    }
    .wrapperContainer > .btnbox > button {
        display: flex;
        border: 0;
        outline: 0;
        background: #4a4a4a;
        align-items: center;
        border: 1px solid white;
        padding: 0.25rem 0.875rem;
        border-radius: 50px;
    }
    .wrapperContainer > .frameWorkbtn {
        display: flex;
        border: 0;
        outline: 0;
        background: #4a4a4a;
        align-items: center;
        border: 1px solid white;
        padding: 0.25rem 0.875rem;
        border-radius: 50px;
    }
    .wrapperContainer > .frameWorkbtn > .text {
        color: white;
    }
    .previewImg {
        width: 394px;
        height: 263px;
    }
    div > .cropedImg {
        width: 394px;
        height: 263px;
    }
    .container {
        position: absolute;
        background-image: url("assets/Frame1_hor.png");
        background-repeat: no-repeat;
        width: 394px;
        height: 263px;
    }
    .leftArrow {
        width: 11px;
        background-color: #4a4a4a;
        border: 0px;
        margin: 0px 13px 0px 0px;
    }
    .rightArrow {
        width: 11px;
        background-color: #4a4a4a;
        border: 0px;
        margin: 0px 0px 0px 13px;
    }
    .bottomArrow {
        height: 16px;
        background-color: #4a4a4a;
        border: 0px;
        margin: 13px 0px 0px 0px;
    }
    .topArrow {
        height: 16px;
        background-color: #4a4a4a;
        border: 0px;
        margin: 0px 0px 13px 0px;
    }
`;

export const BgImg = styled.div`
    ${(props) =>
        props.data &&
        css`
            background-image: url(${props.data});
        `};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;

    ${({ Standard }) =>
        Standard === "Width" &&
        css`
            width: 394px;
            height: 263px;
            .imgbox {
                display: flex;
                flex-wrap: wrap;
                margin-left: 9px;
                padding-top: 23px;
            }
            .imgbox > section {
                display: flex;
                justify-content: center;
            }
            .imgbox > section > .testimg {
                width: 157px;
                height: 105px;
                padding: 3px;
            }
        `}
    ${({ Standard }) =>
        Standard === "Length" &&
        css`
            width: 159.99px;
            height: 479.97px;
            .imgbox {
                display: flex;
                flex-wrap: wrap;
                margin-left: 0px;
                padding-top: 0px;
            }
            .imgbox > section {
                display: flex;
                justify-content: center;
            }
            .imgbox > section > .testimg {
                width: 151px;
                height: 100px;
                padding: 3px;
            }
        `}
`;

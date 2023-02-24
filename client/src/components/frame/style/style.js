import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
  
  .wrapperContainer > .cropperObject > .cropper-container {
    width: 400px;
  }
  .wrapperContainer > .btnbox {
    display: flex;
    justify-content: center;
  margin:0px 0px 69px 0px;
  }
  /* .wrapperContainer > .btnbox > button {
    display: flex;
    border: 0;
    outline: 0;
    background: #FFFFFF;
    align-items: center;
    border: 1px solid white;
    padding: 0.25rem 0.875rem;
    border-radius: 50px;
    color:black;
    width:111px;
  } */
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
      }
      .imgbox > section {
        display: flex;
        justify-content: center;
      }
      .imgbox > section > img {
        width: 151.03px;
        height: 100.6px;
      }
      .imgbox > section > .testimg1 {
        padding: 26px 3.4px 3.4px 20.36px;
      }
      .imgbox > section > .testimg2 {
        padding: 26px 20.36px 3.4px 3.4px;
      }
      .imgbox > section > .testimg3 {
        padding: 3.4px 3.4px 26px 20.36px;
      }
      .imgbox > section > .testimg4 {
        padding: 3.4px 26px 20.36px 3.4px;
      }
    `}
  ${({ Standard }) =>
    Standard === "Length" &&
    css`
      width: 176px;
      height: 529px;
      .imgbox {
        display: flex;
        flex-wrap: wrap;
        margin-left: 0px;
        padding-top: 0px;
        justify-content:center;
      }
      .imgbox > section {
        display: flex;
        justify-content: center;
      }
      .imgbox > section > img {
        width: 151.03px;
        height: 100.6px;
      }
      .imgbox > section > .testimg1 {
        padding: 13.4px 12.97px 4.2px 12.97px;
      }
      .imgbox > section > .testimg2 {
        padding: 13.4px 12.97px 4.2px 12.97px;
      }
      .imgbox > section > .testimg3 {
        padding: 13.4px 12.97px 4.2px 12.97px;
      }
      .imgbox > section > .testimg4 {
        padding: 13.4px 12.97px 4.2px 12.97px;
      }
    `}
`;

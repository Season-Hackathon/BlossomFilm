import styled, { css } from "styled-components";
import Myimg from "./Myimg";
import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .wrapperContainer {
    width: 394px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    position: relative;
  }
  .wrapperContainer > .cropperTool {
  }

  .wrapperContainer > .btnbox{
    display:flex;
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

const BgImg = styled.div`
  ${(props) =>
    props.data &&
    css`
      background-image: url(${props.data});
    `};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  width: 394px;
  height: 263px;

  .imgbox {
    display: flex;
    flex-wrap: wrap;
    margin-left: 26px;
    padding-top: 26px;
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
`;
// const Grid = styled.div`
// display:grid;
// width:100%;
// height: 100%;
// grid-template-columns: 100px 100px;
// `;

export default function Fourcuts() {
  const cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [cropData, setCropData] = useState("#");
  const [inputImage, setInputImage] = useState(null);
  const [cropper, setCropper] = useState();
  // 유저가 선택한 영역만큼 크롭된 이미지
  const [croppedImage, setCroppedImage] = useState(null);
  const [complete, setComplete] = useState(false);
  const [showcropper, setshowCropper] = useState(false);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    setComplete(true);
  };
  const getCropData = (e) => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      setshowCropper(true);
    }
    console.log(cropperRef.current);
  };

  const reCrop = () => {
    setshowCropper(false);
  };
  return (
    <Container>
      <div className="wrapperContainer">
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>{
            setshowCropper(false);
            setInputImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <section className="btnbox">
          <button onClick={getCropData}>
            이미지저장
          </button>
          <button onClick={reCrop}>
          다시 자르기
          </button>
        </section>
        <Cropper
          className={showcropper ? `cropper-hidden` : "cropperObject"}
          src={inputImage}
          crop={onCrop}
          ref={cropperRef}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
        {/* <img className="previewImg" src={croppedImage} /> */}
      </div>
      <div className="box" style={{ float: "right", height: "300px" }}>
        <h1>
          <section></section>
        </h1>
        <BgImg data={cropData}>
          <div className="imgbox">
            <section>
              <img
                className="testimg"
                src="assets/arrowbtn/Rectangle.png"
              ></img>
            </section>
            <section>
              <img
                className="testimg"
                src="assets/arrowbtn/Rectangle.png"
              ></img>
            </section>
            <section>
              <img
                className="testimg"
                src="assets/arrowbtn/Rectangle.png"
              ></img>
            </section>
            <section>
              <img
                className="testimg"
                src="assets/arrowbtn/Rectangle.png"
              ></img>
            </section>
          </div>
        </BgImg>
      </div>
    </Container>
  );
}
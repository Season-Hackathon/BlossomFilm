import React, { useEffect, useMemo, useState, useRef } from "react";
import styled, { css } from "styled-components";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import CropButton from "../CropButton";

const BackgroundImg = styled.div`
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
      .imgbox > section > label > span {
        display: flex;
        align-items: center;
      }
      .imgbox > section > label > span > p {
        font-size: 4px;
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
        justify-content: center;
        position: relative;
      }
      .imgbox > section {
        display: flex;
        justify-content: center;
      }
      .imgbox > section > img {
        width: 151.03px;
        height: 100.6px;
      }
      .imgbox > section > label > span {
        display: flex;
      }
      .imgbox > section > label > span > p {
        font-size: 4px;
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

const BtnBox = styled.section`
  display: flex;
  justify-content: center;
  margin:0px 0px 69px 0px;
`;
const Label = styled.label`
  color: white;
  cursor: pointer;
  display: inline-block;
  width: 151.03px;
  height: 100.6px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
    display: none;
`;

const section = styled.div``;

export default function Myimg({isUpload, isDelete, data ,Standard}) {
  var cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [files, setFiles] = useState({
    File1: "",
    File2: "",
    File3: "",
    File4: "",
  });
  const [cropData, setCropData] = useState({
    File1: "",
    File2: "",
    File3: "",
    File4: "",
  });
  const [inputImage, setInputImage] = useState(null);
  const [cropper, setCropper] = useState();
  const [showcropper, setshowCropper] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [complete, setComplete] = useState(false);
  const [tempref, setTempref] = useState("");
  //유저가 선택한 영역만큼 크롭된 이미지
  console.log(showcropper);
  let fileArr = Object.keys(files).map((item) => files[item]);
  const comFileUpload = fileArr.filter((file) => file === "");

  useEffect(() => {
    isUpload(comFileUpload.length);
  }, [files]);

  useEffect(() => {
    if (isDelete) {
        setInputImage(null);
        setComplete(false);
        setshowCropper(true);
        setTempref("");
        setCroppedImage(null);
        setFiles({ File1: "", File2: "", File3: "", File4: "" });
        setCropData({ File1: "", File2: "", File3: "", File4: "" });
    }
}, [isDelete]);

  console.log(cropper);
  const onloadFile = (e) => {
    console.log(1);

    setTempref(e.target.id);
    console.log(showcropper);
    setshowCropper(false);
    console.log(showcropper);
    setInputImage(URL.createObjectURL(e.target.files[0]));
    const image = e.target.id;
    const imgURL = files && URL.createObjectURL(e.target.files[0]);
    setFiles({ ...files, [image]: imgURL });
};
    useEffect(() => {
        isUpload(comFileUpload.length);
    }, [files]);
  
  const getCropData = (e) => {
    setshowCropper(true);
    if (typeof cropper !== "undefined") {
      const imgURL = cropper.getCroppedCanvas().toDataURL();
      setCropData({ ...cropData, [tempref]: imgURL });
    }
    console.log(cropperRef.current);
  };

  const onCrop = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    setComplete(true);
};


  const reCrop = () => {
    setshowCropper(false);
  };

  return (
    <section>
      <BtnBox className="btnbox">
        <CropButton
          style="color:white"
          text="이미지 저장"
          onClick={getCropData}
        ></CropButton>

        <CropButton
          style="color:white"
          text="다시자르기"
          onClick={reCrop}
        ></CropButton>
      </BtnBox>
      <Cropper
        className={showcropper ? `cropper-hidden` : "cropperObject"}
        src={inputImage}
        crop={onCrop}
        ref={cropperRef}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
      <form method="post" enctype="multipart/form-data">
        <BackgroundImg data={props.data} Standard={props.Standard}>
          <div className="imgbox">
            {!cropData.File1 && (
              <section>
                <Label className="testimg1" for="File1">
                  <span>
                    <img src="assets/framebtn/blossom.png"></img>
                    <p>클릭해서 이미지 추가</p>
                  </span>
                </Label>
              </section>
            )}
            {cropData.File1 && (
              <section>
                <img className="testimg1" alt="sample" src={cropData.File1} />
              </section>
            )}

            {!cropData.File2 && (
              <section>
                <Label className="testimg2" for="File2">
                  <span>
                    <img src="assets/framebtn/blossom.png"></img>
                    <p>클릭해서 이미지 추가</p>
                  </span>
                </Label>
              </section>
            )}
            {cropData.File2 && (
              <section>
                <img className="testimg2" alt="sample" src={cropData.File2} />
              </section>
            )}

            {!cropData.File3 && (
              <section>
                <Label className="testimg3" for="File3">
                  <span>
                    <img src="assets/framebtn/blossom.png"></img>
                    <p>클릭해서 이미지 추가</p>
                  </span>
                </Label>
              </section>
            )}
            {cropData.File3 && (
              <section>
                <img className="testimg3" alt="sample" src={cropData.File3} />
              </section>
            )}

            {!cropData.File4 && (
              <section>
                <Label className="testimg4" for="File4">
                  <span>
                    <img src="assets/framebtn/blossom.png"></img>
                    <p>클릭해서 이미지 추가</p>
                  </span>
                </Label>
              </section>
            )}
            {cropData.File4 && (
              <section>
                <img className="testimg4" alt="sample" src={cropData.File4} />
              </section>
            )}
          </div>
        </BackgroundImg>
        <Input
          type="file"
          id="File1"
          name="chooseFile"
          accept="image/*"
          onChange={onloadFile}
        />
        <Input
          type="file"
          id="File2"
          name="chooseFile"
          accept="image/*"
          onChange={onloadFile}
        />
        <Input
          type="file"
          id="File3"
          name="chooseFile"
          accept="image/*"
          onChange={onloadFile}
        />
        <Input
          type="file"
          id="File4"
          name="chooseFile"
          accept="image/*"
          onChange={onloadFile}
        />
      </form>
    </section>
  );
}

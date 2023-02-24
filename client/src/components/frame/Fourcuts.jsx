import "cropperjs/dist/cropper.css";
import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import CropButton from "../CropButton";
import * as S from "./style/style.js";

export default function Fourcuts(props) {

  const cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [cropData, setCropData] = useState("");
  const [inputImage, setInputImage] = useState(null);
  const [cropper, setCropper] = useState();
  // 유저가 선택한 영역만큼 크롭된 이미지
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [complete, setComplete] = useState(false);
  const [showcropper, setshowCropper] = useState(false);
  const [standard, setStandard] = useState("Width");
  // 인생네컷 가로 세로 기준 state


    console.log(standard);
    const onCrop = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        // setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        // setComplete(true);
    };


  const getCropData = (e) => {
    // setStandard("Length");
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      setshowCropper(true);
    }
    console.log(cropperRef.current);
  };

    const reCrop = () => {
        setshowCropper(false);
    };

    props.pagemove(cropData, standard);
    
  return (
    <S.Container>
      <div className="wrapperContainer">
        {/* 아래 사진입력은 사진을 입력받아서도 수정가능하게끔 할 수 있는 코드  */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>{
            setshowCropper(false);
            setInputImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        {/* <CropButton
          style="color:white"
          text="수정하기"
          onClick={() => {
            setshowCropper(false);
            setInputImage("assets/Frame1_hor.png");
          }}
        >
          <img style={{height:"1.15rem"}} src="assets/framebtn/blossom.png"></img>
        </CropButton> */}

        <section className="btnbox">
            
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
        <S.BgImg className="bgImg" Standard={standard} data={cropData}>
          <div className="imgbox">
            <Imgbox itemclass="testimg1"/>
            <Imgbox itemclass="testimg2"/>
            <Imgbox itemclass="testimg3"/>
            <Imgbox itemclass="testimg4"/>
          </div>
        </S.BgImg>
    </S.Container>
  );
}

const Imgbox = (props) => {
  return (
    <section>
      <img className={props.itemclass} src="assets/framebtn/Rectangle.png"></img>
    </section>
  );
};

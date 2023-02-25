import "cropperjs/dist/cropper.css";
import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import styled from "styled-components";
const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 21px 0px 0px 14px;

    section {
    }
`;

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
`;

const Label = styled.label`
    background-color: #ff6600;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`;

const Input = styled.input`
    display: none;
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 122px;
    height: 81px;
`;

export default function Myimg({ isUpload, isDelete }) {
    const cropperRef = useRef();
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

    // useMemo(() => {

    //     setInputImage(null);
    //     setComplete(false);
    //     setshowCropper(true);
    //     setTempref("");
    //     setCroppedImage(null);
    //     setFiles({ File1: "", File2: "", File3: "", File4: "" });
    //     setCropData({ File1: "", File2: "", File3: "", File4: "" });
    // }, [props.setDelete]);

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

    const onCrop = () => {
        const imageElement = cropperRef.current;
        const cropper = imageElement.cropper;
        setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        setComplete(true);
    };

    const getCropData = (e) => {
        setshowCropper(true);
        if (typeof cropper !== "undefined") {
            const imgURL = cropper.getCroppedCanvas().toDataURL();
            setCropData({ ...cropData, [tempref]: imgURL });
        }
        console.log(cropperRef.current);
    };
    console.log(tempref);
    const reCrop = () => {
        setshowCropper(false);
    };
    return (
        <section>
            <section className="btnbox">
                <button onClick={getCropData}>이미지저장</button>
                <button onClick={reCrop}>다시 자르기</button>
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
            <form method="post" enctype="multipart/form-data">
                <Grid>
                    <section>
                        {!cropData.File1 && <Label for="File1">+</Label>}
                        {cropData.File1 && (
                            <ImgWrapper>
                                <Img alt="sample" src={cropData.File1} />
                            </ImgWrapper>
                        )}
                    </section>
                    <section>
                        {!cropData.File2 && <Label for="File2">+</Label>}
                        {cropData.File2 && (
                            <ImgWrapper>
                                <Img alt="sample" src={cropData.File2} />
                            </ImgWrapper>
                        )}
                    </section>
                    <section>
                        {!cropData.File3 && <Label for="File3">+</Label>}
                        {cropData.File3 && (
                            <ImgWrapper>
                                <Img alt="sample" src={cropData.File3} />
                            </ImgWrapper>
                        )}
                    </section>
                    <section>
                        {!cropData.File4 && <Label for="File4">+</Label>}
                        {cropData.File4 && (
                            <ImgWrapper>
                                <Img alt="sample" src={cropData.File4} />
                            </ImgWrapper>
                        )}
                    </section>
                </Grid>
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

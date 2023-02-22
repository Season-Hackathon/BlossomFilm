import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { filmState } from "../../store/filmState";

import html2canvas from "html2canvas";
import styled from "styled-components";

const StyledImgWrapper = styled.div`
    position: relative;
    margin-top: 2rem;
    width: 159.99px;
    height: 479.97px;
    background-color: red;
    display: flex;
    align-items: center;
    flex-direction: column;

    #frame {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;

        background-position: cover;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .file-holder {
        visibility: hidden;
    }
    .img-wrapper {
        background-color: blue;
        position: relative;
        width: 135.99px;
        height: 90.97px;
        margin-top: 10px;
        overflow: hidden;
    }
    .img-btn {
        background-color: green;

        width: 135.99px;
        height: 90.97px;
        margin-top: 10px;
        overflow: hidden;
    }

    .img-wrapper > img {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(50, 50);
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: auto;
    }
`;

const Sample = () => {
    const [film, setFilm] = useRecoilState(filmState);
    const [file, setFile] = useState();
    const [file2, setFile2] = useState();
    const [focusImg, setFocusImg] = useState();
    const [focusState, setFocusState] = useState(1);
    const canvas = useRef();
    const firstImg = useRef();
    const secondImg = useRef();

    const nav = useNavigate();

    const onClickDownload = () => {
        // html2canvas(canvas.current,{scale : 10})
        // 모바일 Safari 환경 scale 확장 시 다운 불가능 이슈
        html2canvas(canvas.current, {
            allowTaint: true,
            useCORS: true,
            scale: 8,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL("image/jpeg");
            setFilm(myImage);
        });
        nav("/title"); //화면 이동
    };

    const onClickMove = (e) => {
        if (!focusImg) return;
        // focusImg.current.style.left = `${focusImg.current.offsetLeft + 1}px`;
        focusImg.current.style.transform = `scale(${focusState},${focusState})`;
        setFocusState((prev) => prev + 0.1);
    };

    return (
        <div>
            <input
                id="file1-holder"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    setFile(URL.createObjectURL(e.target.files[0]));
                }}
                style={{ width: 0 }}
            />

            <input
                className="file-holder"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    secondImg.current.style.left = 0;
                    setFile2(URL.createObjectURL(e.target.files[0]));
                    console.log(URL.createObjectURL(e.target.files[0]));
                }}
            />

            <StyledImgWrapper className="img-wrapper" ref={canvas}>
                <div
                    className="img-wrapper"
                    onClick={() => {
                        document.querySelector("#file1-holder").click();
                        setFocusImg(firstImg);
                    }}
                >
                    <img ref={firstImg} src={file} alt="선택사진"></img>
                </div>
                <div
                    className="img-wrapper"
                    onClick={() => {
                        alert("click");
                        setFocusImg(secondImg);
                    }}
                >
                    <img ref={secondImg} src={file2} alt="선택사진"></img>
                </div>
                <div
                    id="frame"
                    alt="배경"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    style={{ backgroundImage: `url("/assets/Frame1_hor.svg")` }}
                >
                    <div
                        className="img-btn"
                        onClick={(e) => {
                            document.querySelector("#file1-holder").click();
                            setFocusImg(firstImg);
                            e.target.style.visibility = "hidden";
                        }}
                    >
                        add
                    </div>
                    <div
                        className="img-btn"
                        onClick={() => {
                            alert("frame2");
                        }}
                    >
                        add2
                    </div>
                    <div
                        className="img-btn"
                        onClick={() => {
                            alert("frame3");
                        }}
                    >
                        add3
                    </div>
                </div>
            </StyledImgWrapper>
            <button
                onClick={(e) => {
                    onClickMove(e);
                }}
            >
                Move
            </button>
            <button
                onClick={() => {
                    onClickDownload();
                }}
            >
                next
            </button>
        </div>
    );
};

export default Sample;

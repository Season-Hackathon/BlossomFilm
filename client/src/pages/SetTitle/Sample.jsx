import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { filmState, frameState } from "../../store/filmState";

import html2canvas from "html2canvas";
import styled from "styled-components";

const StyledImgWrapper = styled.div`
    position: relative;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    #ver {
        width: 200px;
        height: 600px;
        background-position: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    #hor {
        width: 394px;
        height: 269px;
        background-position: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

const Sample = () => {
    const [film, setFilm] = useRecoilState(filmState);
    const [frame, setFrame] = useRecoilState(frameState);
    const [focusImg, setFocusImg] = useState();
    const canvas = useRef(null);

    const nav = useNavigate();

    const onClickDownload = () => {
        // html2canvas(canvas.current,{scale : 10})
        // 모바일 Safari 환경 scale 확장 시 다운 불가능 이슈
        const target =
            focusImg === "ver"
                ? document.querySelector("#ver")
                : document.querySelector("#hor");
        // html2canvas(canvas.current, {
        //     allowTaint: true,
        //     useCORS: true,
        //     scale: 8,
        // }).then(function (canvas) {
        //     var myImage = canvas.toDataURL("image/jpeg");
        //     setFilm(myImage);
        // });

        console.log(focusImg);
        setFrame(focusImg);
        html2canvas(target, {
            allowTaint: true,
            useCORS: true,
            scale: 8,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL("image/jpeg");
            setFilm(myImage);
        });
        nav("/title"); //화면 이동
    };

    return (
        <div>
            <StyledImgWrapper className="img-wrapper" ref={canvas}>
                <div
                    id="hor"
                    alt="가로배경"
                    onClick={() => {
                        setFocusImg("hor");
                    }}
                    style={{
                        backgroundImage: `url("/assets/sample_hor.png")`,
                    }}
                ></div>
                <div
                    id="ver"
                    alt="세로배경"
                    onClick={() => {
                        setFocusImg("ver");
                    }}
                    style={{
                        backgroundImage: `url("/assets/sample_ver.png")`,
                    }}
                ></div>
            </StyledImgWrapper>

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

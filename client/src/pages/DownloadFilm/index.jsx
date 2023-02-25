import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { DownloadButton, DownloadFilmLayout } from "./style";

import DownIcon from "../../assets/Download.svg";

import { useRecoilValue } from "recoil";
import { filmState, frameState, titleState } from "../../store/filmState";

import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const DownloadFilm = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [url, setUrl] = useState(null); // 공유 url

    const film = useRecoilValue(filmState);
    const title = useRecoilValue(titleState);
    const frame = useRecoilValue(frameState);
    //file 형식을 저장합니다

    const nav = useNavigate();

    // Save | Download image
    function downloadImage(data, filename = "untitled.jpeg") {
        var a = document.querySelector("#link");
        a.href = data;
        a.download = filename;
        a.click();
    }

    const onClickDownload = () => {
        if (film !== null)
            downloadImage(
                film,
                title ? `${title}.jpeg` : `${new Date().getTime()}.jpeg`
            );
    };

    const onClickShare = () => {
        console.log(frame);
        //if (!frame) return;
        //서버에 제목과 프레임 전달
        setUrl(title + "/some url put here");
        setModalOpen(true);

        const request = new FormData();
        request.append("image", frame);
        request.append("title", title);

        axios
            .post("API_ENDPOINT", request, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                setUrl("get url and put here");
                setModalOpen(true);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const onClickRetry = () => {
        nav("/");
    };

    return (
        <DownloadFilmLayout
            type={frame && frame.includes("hor") ? "hor" : "ver"}
        >
            {isModalOpen ? (
                <Modal setModalState={setModalOpen} url={url} />
            ) : null}
            <a id="link"></a>
            <div className="back-button">
                <BackButton onClick={() => nav("/title")} />
            </div>

            <h1 className="title">봄을 담은 벚꽃필름이 완성되었어요!</h1>
            {film ? (
                <div className="frame">
                    <img src={film} />
                </div>
            ) : (
                <>Film is Missing</>
            )}

            <DownloadButton className="option-button" onClick={onClickDownload}>
                <p>사진 저장하기</p>
                <img src={DownIcon} alt="다운로드" />
            </DownloadButton>
            <Button
                text={"URL로 프레임 공유하기"}
                className="share"
                onClick={onClickShare}
            ></Button>
            {
                //TODO : 제공 프레임일 경우 공유하기 버튼 숨기기
            }
            <button className="retry-button" onClick={onClickRetry}>
                {" "}
                벚꽃필름 다시 만들기
            </button>
            {/* {
                title ? <p>{title}</p> : null
                //확인용
            } */}
        </DownloadFilmLayout>
    );
};

export default DownloadFilm;

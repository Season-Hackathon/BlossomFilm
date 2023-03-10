import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CutContext, FrameBgContext } from "../../context/Context";

import axios from "axios";

import { DownloadButton, DownloadFilmLayout } from "./style";

import DownIcon from "../../assets/Download.svg";

import { useRecoilValue } from "recoil";
import { filmState, frameState, titleState } from "../../store/filmState";

import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { decrypt, encrypt } from "../../utils/encrypt";

const DownloadFilm = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [url, setUrl] = useState(null); // 공유 url

    const film = useRecoilValue(filmState);
    const title = useRecoilValue(titleState);
    const frame = useRecoilValue(frameState);
    //file 형식을 저장합니다
    const { cutSelect } = useContext(CutContext);
    const { frameBg } = useContext(FrameBgContext);

    useEffect(() => {
        console.log("context", cutSelect);
    }, []);

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
        if (!frame) return;
        //서버에 제목과 프레임 전달

        // setUrl(title + "/some url put here");
        // setModalOpen(true);

        if (url) {
            setModalOpen(true);
            return;
        }

        const request = new FormData();
        request.append("frame_image", frame);
        request.append("title", "여의도");
        request.append("width", cutSelect?.includes("Width") === true);
        request.append("height", cutSelect?.includes("Length") === true);

        axios
            .post(
                `${process.env.REACT_APP_BASE_URL}/blossom/frames/`,
                request,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                console.log(res);
                const secret = encrypt(res.data.id);
                console.log("de", decrypt(secret));
                setUrl(`${window.location.host}/` + secret);
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
        <DownloadFilmLayout type={cutSelect?.includes("Width") ? "hor" : "ver"}>
            {isModalOpen ? (
                <Modal setModalState={setModalOpen} url={url} />
            ) : null}
            <a id="link"></a>
            <div className="back-button">
                <BackButton onClick={() => nav("/title")} />
            </div>
            {/* <img src={frame} width="100px"></img> */}
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
            {!frameBg.includes("blossomfilm.xyz") && (
                <Button
                    text={"URL로 프레임 공유하기"}
                    className="share"
                    onClick={onClickShare}
                ></Button>
            )}

            {
                //TODO : 제공 프레임일 경우 공유하기 버튼 숨기기
            }
            <Link to="/">
                <button className="retry-button">벚꽃필름 다시 만들기</button>
            </Link>

            {/* {
                title ? <p>{title}</p> : null
                //확인용
            } */}
        </DownloadFilmLayout>
    );
};

export default DownloadFilm;

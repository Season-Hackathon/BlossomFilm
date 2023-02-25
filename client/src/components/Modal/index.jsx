import React, { useEffect } from "react";

import XIcon from "../../assets/X.svg";
import { CopyBtn, CopyButtonLayout, ModalLayout } from "./style";

import useCopyClipBoard from "../../utils/userCopyclipBoard";

const Modal = ({ setModalState, url }) => {
    const [isCopy, onCopy] = useCopyClipBoard();

    useEffect(() => {
        if (isCopy) alert("복사되었습니다.");
    }, [isCopy]);

    return (
        <ModalLayout>
            <div className="content-wrapper">
                <img
                    src={XIcon}
                    alt="닫기 버튼"
                    className="close-btn"
                    onClick={() => {
                        setModalState(false);
                    }}
                />
                <CopyButtonLayout>
                    <p className="content-input">{url.substring(0, 30)}</p>

                    <CopyBtn
                        onClick={() => {
                            onCopy(url); //TODO safari https 환경에서 테스트
                        }}
                    >
                        복사
                    </CopyBtn>
                </CopyButtonLayout>
            </div>
        </ModalLayout>
    );
};

export default Modal;

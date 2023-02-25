import React from "react";
import * as S from "./style";
const CheckButton = ({ hint, setInput, onClickCheck }) => {
    return (
        <S.CheckButtonLayout>
            <input
                className="content-input"
                placeholder={hint}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <S.OkButton onClick={onClickCheck}> 확인</S.OkButton>
        </S.CheckButtonLayout>
    );
};

export default CheckButton;

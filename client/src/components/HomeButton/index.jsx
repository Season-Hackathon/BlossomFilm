import React from "react";


import * as S from "./style";

const HomeButton = ({ onClick }) => {
    return (
        <S.HomeButton onClick={onClick}>
            메인
        </S.HomeButton>
    );
};

export default HomeButton;

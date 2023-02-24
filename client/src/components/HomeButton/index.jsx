import React from "react";


import * as S from "./style";

const HomeButton = ({ onClick }) => {
    return (
        <S.HomeButton >
            <img className="blossomimg"src="assets/framebtn/blossom.png"></img>
            <p className="homeBtn">HOME</p>
        </S.HomeButton>
    );
};

export default HomeButton;

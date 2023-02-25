import React from "react";
import * as S from "./style";
export default function CropButton({ text, children,onClick }){
  return (
    <S.CropButton onClick={onClick}>
      <p className="text">{text}</p>
      {children}
    </S.CropButton>
  );
}


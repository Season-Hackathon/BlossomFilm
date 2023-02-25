import { useContext } from "react"
import Frame from "../../assets/Frame1_hor.png"
import Vframe1 from "../../assets/Frame1_ver.png"
import Frame2 from "../../assets/Frame2_hor.png"
import Vframe2 from "../../assets/Frame2_ver.png"
import Frame3 from "../../assets/Frame3_hor.png"
import Vframe3 from "../../assets/Frame3_ver.png"
import Frame4 from "../../assets/Frame4_hor.png"
import Vframe4 from "../../assets/Frame4_ver.png"
import LeftArrow from "../../assets/icon-leftArrow.svg"
import RightArrow from "../../assets/icon-rightArrow.svg"
import { CutContext } from "../../context/Context"
import * as S from "./style"

// const baseURL = process.env.REACT_APP_PUBLIC_URL;  

// const Frame = baseURL + '/assets/Frame1_hor.png',
//   Vframe1 = baseURL + '/assets/Frame1_ver.png',
//   Frame2 = baseURL + '/assets/Frame2_hor.png',
//   Vframe2 = baseURL + '/assets/Frame2_ver.png',
//   Frame3 = baseURL + '/assets/Frame3_hor.png',
//   Vframe3 = baseURL + '/assets/Frame3_ver.png',
//   Frame4 = baseURL + '/assets/Frame4_hor.png',
//   Vframe4 = baseURL + '/assets/Frame4_ver.png';

export default function DefaultFrame({ frame, setFrame }) {

  const { cutSelect } = useContext(CutContext);

  const FrameList =
    cutSelect === "hor" ?
      [Frame, Frame2, Frame3, Frame4]
      : [Vframe1, Vframe2, Vframe3, Vframe4]

  const handleChange = (idx) => {
    frame + idx >= FrameList.length ? 
     setFrame(0) : frame + idx < 0 ? setFrame(FrameList.length - 1) : setFrame(frame + idx)
  }
  
  return (
    <S.Wrapper>
      <S.ArrowBtn onClick={() => handleChange(-1)}>
        <img src={LeftArrow} alt="이전 프레임" />
      </S.ArrowBtn>
      <S.ContImg src={FrameList[frame]} alt="" />
      <S.ArrowBtn onClick={() => handleChange(1)}>
        <img src={RightArrow} alt="다음 프레임" />
      </S.ArrowBtn>
    </S.Wrapper>
  )
}

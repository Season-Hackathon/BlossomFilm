import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import DefaultFrame from "../../../components/DefaultFrame";
import { FrameBgContext } from "../../../context/Context";
import * as S from "../style";

export default function SelectFrameType() {
  const { setFrameBg } = useContext(FrameBgContext);
  const navigate = useNavigate();
  const [frame, setFrame] = useState(0)

  const handleToFrame = () => {
    const blob = new Blob([new ArrayBuffer(frame)], { type: 'image/*' });
    const frameFile = URL.createObjectURL(blob)
    setFrameBg(frameFile)
    navigate('/Uploadimg')
  }
  
  return (
    <S.Wrapper>
      <S.Subtit>벚꽃필름 전용 프레임을 선택해보세요!</S.Subtit>
      <DefaultFrame frame={frame} setFrame={setFrame} />
      <Button text="확인" onClick={handleToFrame}/>
    </S.Wrapper>
  )
}

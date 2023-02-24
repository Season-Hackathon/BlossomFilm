import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../../../assets/img-frame2.svg";
import Button from "../../../components/Button";
import * as S from "../style";

export default function SelectFrame() {
  const navigate = useNavigate();
  const imgRef = useRef();

  const handlePickImg = (e) => {
    const file = URL.createObjectURL(imgRef.current.files[0])
    file && navigate('/frame', { state : file })
  }

  return (
    <S.Wrapper>
      <S.Subtit>나만의 벚꽃필름 프레임을 선택해보세요!</S.Subtit>
      <S.SubLogoImg src={Frame} alt="" />
      <S.UploadInp type="file"name="imageUpload" accept="image/*" ref={imgRef} onChange={handlePickImg} />
      <Button text="갤러리에서 직접 선택" onClick={()=> imgRef.current.click()}/>
      <Link to="/selectFrametype" >
        <Button text="벚꽃필름 전용 프레임 선택"/>
      </Link>
    </S.Wrapper>
  )
}

import { useContext } from "react"
import { Link } from "react-router-dom"
import Frame from "../../../assets/img-frame.svg"
import Button from "../../../components/Button"
import { CutContext } from "../../../context/Context"
import * as S from "../style"


export default function SelectCut() {
  const { setCutSelect } = useContext(CutContext)

  return (
    <>
        <S.Wrapper>
          <S.Subtit>만들고 싶은 벚꽃필름을 선택해주세요!</S.Subtit>
          <S.SubLogoImg src={Frame} alt="" />
          <Link to="/selectFrame">
            <Button onClick={() => setCutSelect('hor')} text="가로 4CUT" />
          </Link>
          <Link to="/selectFrame">
          <Button onClick={() => setCutSelect('ver')} text="세로 4CUT" />
          </Link>
        </S.Wrapper>
    </>
  )
}

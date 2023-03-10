import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import SubLogo from "../../assets/sub-logo.svg"
import Button from "../../components/Button"
import * as S from "./style"
import Petal from "../../assets/petal.png"
import Snowfall from "react-snowfall"

const snowflake1 = document.createElement("img");
snowflake1.src = Petal;

const images = [snowflake1, snowflake1];

export default function Home() {
  return (
    <S.Wrapper>
    <Snowfall
            snowflakeCount={50}
            radius={[12, 15]}
            color="pink"
            speed={[0.05, 0.08]}
            images={images}
        />
      <S.Subtit>우리의 <S.SubSpan>"봄"</S.SubSpan>을 담다</S.Subtit>
      <h1>
        <img src={Logo} alt="" />
      </h1>
      <S.SubLogoImg src={SubLogo} alt="" />
      <Link to="/selectCut">
        <Button text="시작하기" className="on" />
      </Link>
    </S.Wrapper>
  )
}

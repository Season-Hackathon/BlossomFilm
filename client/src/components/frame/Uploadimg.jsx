import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import BackButton from "../BackButton";
import { Button } from "../Button/style";
import Myimg from "./Myimg";
import HomeButton from "../HomeButton";
const BgImg = styled.div`
    ${(props) =>
        props.data &&
        css`
            background-image: url(${props.data});
        `}
    ${({ Standard }) =>
        Standard === "Width" &&
        css`
            width: 394px;
            height: 263px;
            .imgbox {
                display: flex;
                flex-wrap: wrap;
                margin-left: 9px;
                padding-top: 23px;
            }
            .imgbox > section {
                display: flex;
                justify-content: center;
            }
            .imgbox > section > .testimg {
                width: 157px;
                height: 105px;
                padding: 3px;
            }
        `}
  ${({ Standard }) =>
        Standard === "Length" &&
        css`
            width: 159.99px;
            height: 479.97px;
            .imgbox {
                display: flex;
                flex-wrap: wrap;
                margin-left: 0px;
                padding-top: 0px;
            }
            .imgbox > section {
                display: flex;
                justify-content: center;
            }
            .imgbox > section > .testimg {
                width: 151px;
                height: 100px;
                padding: 3px;
            }
        `}
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4a4a4a;

  .buttonBox {
    margin:63px 0px 37px 40px;
    display:flex;
  }
`;

const Section = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    color: white;
    padding: 30px;
    & > .uploadBtn {
        margin: 0px 0px 20px 0px;
    }
`;

// const Grid = styled.div`
// display:grid;
// width:100%;
// height: 100%;
// grid-template-columns: repeat(2, 0.4fr);
// grid-template-rows: repeat(2, 0.407fr);
// margin: 51px 0px 0px 14px;
// `;
export default function Uploadimg() {
  const [complete, setCompelete] = useState(false);
  const [isdelete, setIsDelete] = useState(false);
  const [frameImg, setFrameImg] = useState("");
  const [standard, setStandard] = useState("");
  const isUploadimg = (iscomplete) => {
    const temp = iscomplete === 0;
    setCompelete(temp);
  };
  const handleClick = () => {
    return isdelete;
  };
  const location = useLocation();
  const madeframe = location.state.post;
  const itemstandard = location.state.data;
  useEffect(() => {
    setStandard(itemstandard);
    setFrameImg(madeframe);
    
    console.log(standard);
  }, [frameImg]);

  useEffect(() => {
    setIsDelete(false);
  }, [isdelete]);
  console.log(frameImg);
  console.log(isdelete);
  return (
    <Container>
      <div className="buttonBox">
        <Link to="/Editframe">
          <BackButton />
        </Link>
        <Link to="/">
        <HomeButton/>
        </Link>
      </div>
      <Section>
        <p>컷을 클릭하여 사진을 4장 업로드해주세요!</p>
      </Section>
      <Section>
          <Myimg isUpload={isUploadimg} isDelete={isdelete} data={frameImg} Standard={standard}/>
      </Section>
      <Section>
        {complete && (
          <div>
            <Link to="/정보입력">
              <Button className="uploadBtn">확인</Button>
            </Link>
            <Button
              onClick={() => {
                setIsDelete(true);
              }}
            >
              사진 전체 삭제
            </Button>
          </div>
        )}
      </Section>
    </Container>
  );
}

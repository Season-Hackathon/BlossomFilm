import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../BackButton";
import { Button } from "../Button/style";
import HomeButton from "../HomeButton";
import Fourcuts from "./Fourcuts";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4a4a4a;

    .buttonBox {
        margin: 63px 0px 0px 40px;
    }
`;

const Section = styled.div`
    color: white;
    padding: 30px;
`;

export default function Editframe() {
    const [imgData, setImgData] = useState("");
    const [standard, setStandard] = useState("");
    const pagemove = (cropData, standard) => {
        console.log(cropData);
        console.log(standard);
        setImgData(cropData);
        setStandard(standard);
    };

    return (
        <Container>
            <div className="buttonBox">
                <Link to="/">
                    <BackButton />
                </Link>
                <HomeButton />
            </div>
            <Section>
                <p>프레임 배경 사진을 수정해보세요!</p>
            </Section>
            <Section>
                <Fourcuts pagemove={pagemove}></Fourcuts>
            </Section>
            <Section>
                <Link to="/Uploadimg" state={{ post: imgData, data: standard }}>
                    <Button onClick={pagemove}>확인</Button>
                </Link>
            </Section>
        </Container>
    );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BackButton from "../../components/BackButton/index";
import Button from "../../components/Button";
import { titleState } from "../../store/filmState";
import * as S from "./style";

const SetTitle = () => {
    //const [title, setTitle] = useState("");
    const [filmTitle, setFilmTitle] = useRecoilState(titleState);

    const nav = useNavigate();

    const onClickNext = () => {
        nav("/download");
    };

    return (
        <S.SetTitleLayout>
            <div className="back-button">
                <BackButton />
            </div>
            <h1 className="title">프레임 제목을 정해주세요!</h1>
            <S.TitleInput>
                <input
                    className="content-input"
                    placeholder="제목을 입력해주세요"
                    onChange={(e) => {
                        setFilmTitle(e.target.value);
                    }}
                />
            </S.TitleInput>

            <Button
                text={"입력했어요!"}
                className="option-button"
                onClick={onClickNext}
            />
            <Button text={"괜찮아요!"} onClick={onClickNext} />
        </S.SetTitleLayout>
    );
};

export default SetTitle;

import * as S from "./style";

export default function Button({ text, className, onClick }) {
    return (
        <S.Button className={className} onClick={onClick}>
            {text}
        </S.Button>
    );
}

import { atom } from "recoil";

export const frameState = atom({
    key: "frameState",
    default: null,
});
//앨범에서 가져온 나만의 프레임을 저장합니다

export const filmState = atom({
    key: "filmState",
    default: null,
});
// 완성된 사진의 data를 저장합니다

export const titleState = atom({
    key: "titleState",
    default: null,
});
// 완성된 사진의 제목을 저장합니다

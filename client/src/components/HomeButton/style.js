import styled from "styled-components";

export const HomeButton = styled.button`
.homeBtn{
        color:#FF6581;
        font-size:4px;
        font-weight: bold;
        transform:scale(0.7);
    }
.blossomimg{
    width:20px;
    height:20px;
}
    width: 2.3125rem; // 37px
    height: 2.3125rem;
    margin:0px 0px 0px 15px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 2.3125rem;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    :active {
        filter: brightness(0.9);
    }

    img {
        align-self: center;
        width: 1.5625rem;
    }
`;

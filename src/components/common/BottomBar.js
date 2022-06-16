import styled from "styled-components";
import logoImg from "../../resources/images/logo.svg";
import "../../resources/fonts/font.css";

const BottomBg = styled.div`
  height: 130px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const ImgDiv = styled.div`
  align-items: center;
  justify-content: center;
  text-align: right;
  padding-right: 35px;
  flex: 0.9;
`;

const TextDiv = styled.div`
  flex: 4;
  margin-left: 20px;
  text-align: left;
  height: 40px;
`;

const InfoTextBold = styled.span`
  color: #707070;
  font-weight: bold;
  font-size: 1rem;
  font-family: "NotoSansBold";
`;

const InfoText = styled.span`
  color: #707070;
  font-size: 1rem;
  font-family: "NotoSansRegular";
`;

function BottomBar() {
  return (
    <BottomBg>
      <ImgDiv>
        <img src={logoImg} alt="logo" width="80px" height="76.10px" />
      </ImgDiv>
      <TextDiv>
        <InfoTextBold>[44610] 울산광역시 남구 대학로 93</InfoTextBold>
        <br />
        <InfoTextBold>시스템문의 </InfoTextBold>{" "}
        <InfoText>contact@ulsodam.kr</InfoText>
      </TextDiv>
    </BottomBg>
  );
}

export default BottomBar;

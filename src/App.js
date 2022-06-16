import styled from "styled-components";

import BottomBar from "./components/common/BottomBar";
import MainContent from "./components/mainPage/MainContent";

import nextIcon from "./resources/images/nextIcon.svg";
import logoImg from "./resources/images/logo.svg";

import "./resources/fonts/font.css";

const Backgrounds = styled.div`
  background-color: #f3f3f3;
  text-align: center;
  padding: 0px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 98.71px;
  height: 93.9px;
`;

const TitleDiv = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 10px;
  text-align: center;
  img {
    margin-left: 40px;
  }
  span {
    font-family: "GmarketSansBold";
    font-size: 1.0625rem;
    color: #298a9d;
  }
  button {
    margin-top: 3px;
    width: 214px;
    height: 30px;
    border-radius: 15px;
    border: 0;
    background-color: #298a9d;
    color: white;
    font-family: "GmarketSansBold";
    font-size: 1.2rem;
  }
`;

const LogoTextArea = styled.div`
  width: 250px;
  height: 24px;
  text-align: center;
  margin-top: -10px;
  span {
  }
`;

const MainTextArea = styled.div`
  width: 1059px;
  height: 90px;
  margin-top: 10px;
  margin-bottom: 100px;
  display: inline-block;
  text-size-adjust: auto;
  text-align: center;
  span {
    font-family: "NotoSansRegular";
    color: #888888;
    text-align: center;
  }
`;

function App() {
  return (
    <div>
      <Backgrounds>
        <TitleDiv>
          <LogoImg src={logoImg} alt="logo" />
          <br />
          <LogoTextArea>
            <span>울산 소상공인의 마음을 담다</span>
            <button>
              '울소담' 소개
              <img src={nextIcon} alt="" />
            </button>
          </LogoTextArea>
        </TitleDiv>
        <br />
        <br />
        <MainContent />
        <br />
        <MainTextArea>
          <span>
            울소담에서 제공하는 지원금 및 지원사업 정보는 관련 기관에서 공개한
            공고 등을 기초로 한 참고용 자료로 정보의 정확성이나
          </span>
          <br />
          <span>
            신뢰성을 보증하지 않으며, 당사는 본 정보에 의존한 행위에 대하여
            어떠한 책임도 부담하지 않습니다.
          </span>
          <br />
          <span>
            지원금 및 지원사업에 대한 보다 자세한 내용은 해당 기관에 직접
            확인하여 주시기 바랍니다.
          </span>
        </MainTextArea>
        <BottomBar />
      </Backgrounds>
    </div>
  );
}

export default App;

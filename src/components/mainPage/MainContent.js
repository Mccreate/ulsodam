import styled from "styled-components";

import img from "../../resources/images/mainTitleImg.png";
import searchIcon from "../../resources/images/searchIcon.svg";

import "../../resources/fonts/font.css";

const SearchBtn = styled.button`
  margin-top: 34px;
  width: 639px;
  height: 85px;
  border: 0;
  border-radius: 42.5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #37a2b5;

  span {
    font-family: "NotoSansBold";
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    letter-spacing: -0.7px;
  }
  img {
    margin-left: 7px;
    width: 34.6px;
    height: 34.6px;
  }
`;

const MainText = styled.span`
  text-align: center;
  font-family: "NotoSansBold";
  font-weight: bold;
  letter-spacing: -0.23rem;
  font-size: 1.85rem;
  color: #505050;
`;

const ButtonTitleText = styled.span`
  font-family: "NotoSansBold";
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: -0.7px;
  color: #505050;
`;

const ButtonContentText = styled.span`
  font-family: "NotoSansRegular";
  font-size: 0.8rem;
  letter-spacing: -0.45px;
  color: #767676;
`;

const SelectButton = styled.button`
  width: 428px;
  height: 120px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 15px;
  border: solid 5px #dbdbdb;
  background-color: white;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 25px;
  display: inline-block;
`;

const MainContentDiv = styled.div`
  background-color: white;
  width: 1100px;
  height: 800px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

function MainContent() {
  return (
    <MainContentDiv>
      <MainText>
        울산 소상공인분들이 받을 수 있는
        <br />
        지원금 및 지원사업을 찾아보세요!
      </MainText>
      <img src={img} alt="titleImage" />
      <ButtonDiv>
        <SelectButton>
          <ButtonTitleText>예비창업자 / 기존사업자</ButtonTitleText>
          <br />
          <ButtonContentText>해당되는 항목을 선택해주세요.</ButtonContentText>
        </SelectButton>
        <SelectButton>
          <ButtonTitleText>지원금 및 지원사업</ButtonTitleText>
          <br />
          <ButtonContentText>해당되는 항목을 선택해주세요.</ButtonContentText>
        </SelectButton>
      </ButtonDiv>
      <SearchBtn>
        <span>검색하기 </span>
        <img src={searchIcon} alt="searchIcon"></img>
      </SearchBtn>
    </MainContentDiv>
  );
}

export default MainContent;

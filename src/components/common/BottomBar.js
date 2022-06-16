import styled from "styled-components";
import logoImg from "../../resources/images/logo.svg";
import "../../resources/fonts/font.css";

const BottomBg = styled.div`
	height: 130px;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: left;
	padding-left: 214px;
`;

const TextDiv = styled.div`
	margin-left: 20px;
`;

const InfoTextBold = styled.span`
	color: #707070;
	font-weight: bold;
	font-size: 18px;
`;

const InfoText = styled.span`
	color: #707070;
	font-size: 18px;
`;

function BottomBar() {
	return (
		<BottomBg>
			<img src={logoImg} alt="logo" width="122.18px" height="116.23px" />
			<TextDiv>
				<InfoTextBold>[44610] 울산광역시 남구 대학로 93</InfoTextBold>
				<br />
				<br />
				<InfoTextBold>시스템문의 </InfoTextBold>{" "}
				<InfoText>contactus@ulsodam.kr</InfoText>
			</TextDiv>
		</BottomBg>
	);
}

export default BottomBar;

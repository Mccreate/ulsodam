import styled from "styled-components";

import BottomBar from "./components/common/BottomBar";
import MainContent from "./components/mainPage/MainContent";

import logoImg from "./resources/images/logo.svg";

const Backgrounds = styled.div`
	background-color: #f3f3f3;
	text-align: center;
	padding: 0px;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
`;

const TitleLogo = styled.div`
	background-color: #f3f3f3;
	display: inline-block;
`;

function App() {
	return (
		<Backgrounds>
			<TitleLogo>
				<img src={logoImg} alt="logo" width="98.71px" height="93.9px" />
			</TitleLogo>
			<br />
			<MainContent />
			<BottomBar />
		</Backgrounds>
	);
}

export default App;

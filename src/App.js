import React from 'react';
import Header from './components/header';
import JokesManagment from './components/managment-jokes';
import styled from 'styled-components';
import backgroundImage from './assets/bg.png';

const Wrapper = styled.div`
	height: 100%;
	background-color: whitesmoke;
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: bottom;
	overflow: hidden;
	background-size: 150px;
	@media only screen and (max-width: 400px) {
		background-size: 100px;
	}
`;

function App() {
	return (
		<Wrapper>
			<Header />
			<JokesManagment />
		</Wrapper>
	);
}

export default App;

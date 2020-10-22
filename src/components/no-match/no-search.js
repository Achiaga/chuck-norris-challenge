import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	width: 80%;
	font-size: 20px;
`;

const NoSearch = () => {
	return (
		<Wrapper>
			<h3 data-testid='no-search-id'>
				Search Banana!{' '}
				<span role='img' aria-label='banana'>
					🍌
				</span>
			</h3>
			<h3>Type minimum 3 characters.</h3>
		</Wrapper>
	);
};

export default NoSearch;

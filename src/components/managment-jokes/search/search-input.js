import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	padding-top: 2em;
	padding-bottom: 1.5em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const Input = styled.input`
	color: black;
	border: none;
	border-bottom: 2px solid tomato;
	background: none;
	font-size: 20px;
	width: 14em;
	height: 1.5em;
	padding: 5px 5px;
	border-radius: 5px;
	background: #ff634717;
	&:focus {
		outline: none;
	}
`;

const SearchInput = ({ searchJokeValue, handleSearchInput }) => {
	return (
		<Wrapper>
			<Input
				type='text'
				autoFocus
				id='search-input'
				data-qa='input-search-joke'
				placeholder='Search a keyword for a Joke'
				aria-label='search-input'
				onChange={handleSearchInput}
				value={searchJokeValue}
			/>
		</Wrapper>
	);
};

SearchInput.propTypes = {
	searchJokeValue: PropTypes.string.isRequired,
	handleSearchInput: PropTypes.func.isRequired,
};

export default SearchInput;

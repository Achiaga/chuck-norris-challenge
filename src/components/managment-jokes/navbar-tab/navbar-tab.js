import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CATEGORIES, SEARCH } from '../../../constants/index';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	font-weight: 600;
	color: white;
`;

const Tab = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border: none;
	font-size: 18px;
	padding: 0.6em 0;
	@media only screen and (max-width: 400px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 370px) {
		font-size: 13px;
	}
	border-bottom: 3px solid
		${(props) => (props.isActive ? 'tomato' : 'transparent')};
	outline: none;
	transition: border-color 0.5s;
`;

const NavbarTab = ({ handleTypeSearch, searchByText }) => {
	return (
		<Wrapper>
			<Tab
				id={CATEGORIES}
				data-qa='category-tab'
				data-testid='category-tab-id'
				isActive={searchByText !== SEARCH}
				onClick={handleTypeSearch}>
				Search by Categories
			</Tab>
			<Tab
				id={SEARCH}
				data-qa='search-tab'
				data-testid='search-tab-id'
				isActive={searchByText === SEARCH}
				onClick={handleTypeSearch}>
				Search by Text
			</Tab>
		</Wrapper>
	);
};

NavbarTab.propTypes = {
	handleTypeSearch: PropTypes.func,
	searchByText: PropTypes.string.isRequired,
};

export default NavbarTab;

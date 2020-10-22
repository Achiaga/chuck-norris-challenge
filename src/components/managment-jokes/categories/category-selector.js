import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Selector = styled.select`
	width: 10em;
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: 0.3em;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	border-radius: 0.5em;
	background-color: #fff;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;

	.select-css::-ms-expand {
		display: none;
	}
	.select-css:hover {
		border-color: #888;
	}
	.select-css:focus {
		border-color: #aaa;
		box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
		box-shadow: 0 0 0 3px;
		color: #222;
		outline: none;
	}
	.select-css option {
		font-weight: normal;
	}
`;

const CategorySelector = ({
	handleSelectCategory,
	selectedCategory,
	listCategories = [],
}) => {
	const handleClick = (e) => {
		handleSelectCategory(e.target.value);
	};

	return (
		<Selector
			data-testid='category-selector'
			data-qa='category-selector'
			onChange={handleClick}
			value={selectedCategory}>
			{listCategories.map((category, index) => {
				return (
					<option
						data-testid={`category-option-${category}`}
						value={category}
						key={index}>
						{category}
					</option>
				);
			})}
		</Selector>
	);
};

CategorySelector.propTypes = {
	handleSelectCategory: PropTypes.func,
	selectedCategory: PropTypes.string,
	listCategories: PropTypes.array,
};

export default CategorySelector;

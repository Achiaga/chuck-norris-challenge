import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, within, fireEvent } from '@testing-library/react';
import CategorySelector from './category-selector';

const renderComponent = (props) => {
	return render(<CategorySelector {...props} />);
};

const initialProps = {
	listCategories: ['animal', 'unicorn', 'dragon'],
	selectedCategory: 'dragon',
};

const CATEGORY_SELECTOR = 'category-selector';

const getCategorySelectorId = (conditionIndex = 0) => {
	return screen.getAllByTestId(CATEGORY_SELECTOR)[conditionIndex];
};

describe('category selector', () => {
	it('should render a category selector component', () => {
		renderComponent();
		const categorySelector = getCategorySelectorId();
		expect(categorySelector).toBeInTheDocument();
	});

	it('should call the handleSelectCategory function when clicked value on selector', () => {
		const handleSelectCategory = jest.fn();
		renderComponent({
			...initialProps,
			handleSelectCategory,
		});
		const categorySelector = getCategorySelectorId();
		fireEvent.change(categorySelector, { target: { value: 'animal' } });
		fireEvent.click(categorySelector);
		const { getByText } = within(categorySelector);
		expect(getByText('animal')).toBeInTheDocument();
		expect(handleSelectCategory).toHaveBeenCalledWith('animal');
	});
});

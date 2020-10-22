import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import NavbarTab from './navbar-tab';

const renderComponent = (props) => {
	return render(<NavbarTab {...props} />);
};

const initialProps = {
	searchByText: 'searchByText',
};

const CATEGORY_TAB_ID = 'category-tab-id';
const SEARCH_TAB_ID = 'search-tab-id';

const getTabId = (ID, index = 0) => screen.getAllByTestId(ID)[index];

describe('joke-text', () => {
	it('should display a tab for search a joke by category', () => {
		renderComponent(initialProps);
		const testCategoryTab = getTabId(CATEGORY_TAB_ID);
		const testSearchTab = getTabId(SEARCH_TAB_ID);
		expect(testCategoryTab).toBeInTheDocument();
		expect(testSearchTab).toBeInTheDocument();
	});
	it('should call the handleTypeSearch function when clicked on tab', () => {
		const handleTypeSearch = jest.fn();
		renderComponent({ ...initialProps, handleTypeSearch });
		const tabCategoryMode = getTabId(CATEGORY_TAB_ID);
		fireEvent.click(tabCategoryMode);
		const tabSearchMode = getTabId(SEARCH_TAB_ID);
		fireEvent.click(tabSearchMode);
		expect(handleTypeSearch).toHaveBeenCalledTimes(2);
	});
});

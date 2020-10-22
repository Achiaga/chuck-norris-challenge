import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import JokeText from './joke-text';

const renderComponent = (props) => {
	return render(<JokeText {...props} />);
};

const initialProps = {
	jokeValue: {
		value: 'This is a joke.',
	},
	requestStatus: {
		isLoading: false,
		isSuccess: true,
		hasError: false,
	},
};

const errorHandlingProps = {
	...initialProps.jokeValue,
	requestStatus: {
		isLoading: false,
		isSuccess: false,
		hasError: true,
	},
};

const loadingHandlingProps = {
	...initialProps.jokeValue,
	requestStatus: {
		isLoading: true,
		isSuccess: true,
		hasError: false,
	},
};

const notFoundHandlingProps = {
	jokeValue: {
		value: null,
	},
	requestStatus: {
		isLoading: false,
		isSuccess: true,
		hasError: false,
	},
};

const JOKE_CATEGORY_ID = 'joke-value-id';
const ERROR_ITEM_ID = 'error-item-id';
const LOADING_ITEM_ID = 'loading-item-id';
const NOT_FOUND_ITEM_ID = 'not-found-item-id';

const getJokeItem = (ID, conditionIndex = 0) => {
	return screen.getAllByTestId(ID)[conditionIndex];
};

describe('joke-text', () => {
	it('should display random joke by category', () => {
		renderComponent(initialProps);
		const { getByText } = within(getJokeItem(JOKE_CATEGORY_ID));
		const testCategoryJoke = getByText('This is a joke.');
		expect(testCategoryJoke).toBeInTheDocument();
	});
	it('should display error page', () => {
		renderComponent(errorHandlingProps);
		const errorPage = getJokeItem(ERROR_ITEM_ID);
		expect(errorPage).toBeInTheDocument();
	});
	it('should display loading page', () => {
		renderComponent(loadingHandlingProps);
		const LoadingPage = getJokeItem(LOADING_ITEM_ID);
		expect(LoadingPage).toBeInTheDocument();
	});
	it('should display NoMatch page', () => {
		renderComponent(notFoundHandlingProps);
		const NotFoundPage = getJokeItem(NOT_FOUND_ITEM_ID);
		expect(NotFoundPage).toBeInTheDocument();
	});
});

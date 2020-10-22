import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import AnotherJokeButton from './another-joke-button';

const renderComponent = (props) => {
	return render(<AnotherJokeButton {...props} />);
};

const initialProps = {};

const ANOTHER_JOKE_BUTTON = 'another-joke-button';

const getAnotherJokeId = (conditionIndex = 0) => {
	return screen.getAllByTestId(ANOTHER_JOKE_BUTTON)[conditionIndex];
};

describe('category managment', () => {
	it('should render a another joke from a category', () => {
		renderComponent();
		const categorySelector = getAnotherJokeId();
		expect(categorySelector).toBeInTheDocument();
	});

	it('should call the handleAnotherJoke function when the button is clicked', () => {
		const handleAnotherJoke = jest.fn();
		renderComponent({ handleAnotherJoke });
		const jokeButton = getAnotherJokeId();
		fireEvent.click(jokeButton);
		expect(handleAnotherJoke).toHaveBeenCalled();
	});
});

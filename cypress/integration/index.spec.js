const vistiUrl = () => {
	cy.server();
	cy.route('GET', '/jokes/categories', ['animal', 'html', 'hydra']);
	cy.route('GET', '/jokes/random?category=animal', {
		value: 'this is an animal joke',
	});
	cy.route('GET', '/jokes/random?category=html', {
		value: 'this is a html joke',
	});
	cy.route('GET', '/jokes/search?query=train', {
		result: [
			{ value: 'this is a train joke' },
			{ value: 'this is another train joke' },
		],
	});
	cy.visit('http://localhost:3000');
};

const getRandomJoke = () => {
	return cy.dataQa('random-joke');
};

const getListCategories = () => {
	return cy.dataQa('category-selector');
};

const getAnotherJoke = () => {
	return cy.dataQa('another-joke-button');
};

const getSearchTab = () => {
	return cy.dataQa('search-tab');
};

const getCategoryTab = () => {
	return cy.dataQa('category-tab');
};

const getInputJokeSearch = () => {
	return cy.dataQa('input-search-joke');
};

const getSearchedJoke = () => {
	return cy.dataQa('searched-joke');
};

describe('Categories joke', () => {
	beforeEach(() => {
		vistiUrl();
	});

	it('should display a random joke on screen', () => {
		getRandomJoke().should('contain', 'this is an animal joke');
	});

	it('should display a list of categories in the selector', () => {
		getListCategories().should('contain', 'animal');
	});

	it('should render an html joke when value changes to html in the selector ', () => {
		getListCategories().select('html');
		getRandomJoke().should('contain', 'this is a html joke');
		getListCategories().select('animal');
		getListCategories().should('contain', 'animal');
	});

	it('should fire another joke same category when click AnotherJokeButton ', () => {
		getListCategories().select('animal');
		getListCategories().should('contain', 'animal');
		getAnotherJoke().click();
	});
});

describe('Navbar tabs', () => {
	beforeEach(() => {
		vistiUrl();
	});

	it('should display the input joke search when clicking on search tab ', () => {
		getSearchTab().click();
		expect(getInputJokeSearch()).to.exist;
		getCategoryTab().click();
		getRandomJoke().should('contain', 'this is an animal joke');
	});
});

describe('Search joke', () => {
	beforeEach(() => {
		vistiUrl();
	});

	it('should not display jokewhen typing on input less than 3 characters', () => {
		getSearchTab().click();
		getInputJokeSearch().type('tr');
		getSearchedJoke().should('not.exist');
	});

	it('should search for a joke and display it on screen when typing on input', () => {
		getSearchTab().click();
		getInputJokeSearch().type('train');
		getSearchedJoke().should('contain', 'this is a train joke');
	});
});

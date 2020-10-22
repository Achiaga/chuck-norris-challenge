## Arquitecture - Redux

The first decision is what architecture I am going to use for the project. It is a simple project with an easy state management, so there is no need to use any third-party state management library. Although the point of this project is to show my coding skills, so I decided to implement redux toolkits.

Redux toolkits - It is an opinionated toolset for efficient Redux development. You get out of the box a lot of the packages and boilerplates needed to get your redux infrastructure running. I personally like how you reduce huge amounts of code and simplifies it using duck structure.

## Fetching

I decided to choose axios for fetching data from the api. This was more of a personal decision since I am used to axios.

## Styling

I chose styled-components for styling. It is a powerful library enhancing CSS for styling React components. It has multiples advantages of using it like 'No class name bugs', 'Painless maintenance', 'Automatic vendor prefixing', etc. Also, it is the library I always use and it has always come in handy.

## Aproach

Now that I have mentioned the reason why I choose the main libraries, it is time for choosing the approach. First of all, It is thinking about the basic layout of the app in order to separate components. The requirements for the app are three:

- Listing all the categories.
- Navigating into a category and showing a random joke in that category.
- Searching through all the jokes using a free text search.

My preferred solution is to build all three requirements in the same layout. But, after thinking it through, I ended up separating the app into two main components: "Categories" and "Search By Text". Because the "search by text" does not allow you to filter by category in the request. This may have been confusing for the user and it may have lead to thinking that you are searching within the category previously selected.

### First Problem

So the app is basically divided into two windows accessible by tabs: "Categories" and "Searched by text". Building categories hadn't any major problems. The interesting part came when building the "Searched by Text". The problem I encountered was that while fetching for common English syllables like 'ion', it retrieves a long list of 300 jokes and since the API has no pagination, it will create a performance issue for displaying all of them at the same time in the DOM.

### Aprroach - First Problem

This problem will affect the performance of the app and even more when the app scales. So, I could approach this problems in three ways. The first one would be to display all the items in the list in the DOM at the same time and hope that the user doesn't search for a common syllabus, which we have already concluded that it is a bad approach.

The other two approaches are the interesting ones, I could make an infinitive scroll, like so many other apps do where you only display a portion of the list and when the user scroll to the bottom it fetches more. Doing this process in an infinity cycle until the list ends. The problem with this approach is that even though it doesn't generate performance issues at the beginning, once the user has scrolled all the way to the bottom you have a huge amount of items displayed in the DOM so it would generate lag when you scroll fast, that is another issue we want to avoid.

The third approach is to build a virtualized list with an external library. The advantage of this approach is that we only render the items visible on the viewport, so even though you are scrolling, it only renders the number of items that you are able to see through the screen. This way we avoid performance issues and lagging while scrolling.

In conclusion, the third approach is the best one to implement. The library I used for this approach is 'react-window'.

### Second Problem

The library 'react-window' needs to know the exact height of each item in the list to keep track of the items that are being displayed on the screen and what items need to render next. The problem I encounter is that the data received from the API is variable in sizes. What I mean by this, is that each joke received from the request is widely different in terms of the number of characters. And a different number of characters translates into a different height displayed on the screen. For example, a short joke may only be 50px height on the screen while a longer joke may be 150px heigh on the screen.

### Aprroach - Second Problem

So, the solution is clear. If I know the number of characters each joke has (which I do) I can predict its height, so that the library knows which items will be visible on the viewport.

So I tried to estimate the height by the number of characters. And the result I got was that even though I can predict the height it wasn't still working. The reason for this is that my approach stated that there wouldn't be words so long that would need to break into a new line, leaving empty space which would affect the height of the component. For example, 'Chuck Norris says: COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL!'. So, in that case, the word is so long that needs to be in a whole new line.

So my second approach was researching through the internet to see what solutions other developers have come up with. And I discover a great, magnificent developer who has build his own library for this kind of problem. [explain his solution]. The library is called 'react-window-dynamic-list'. So I decided to implement this library and finally, the list was working perfectly and smoothly.

### Third Problem

This time, I encounter a minor problem of design for the categories part of the project. I came up with two options, display all the categories in the grid so they can be quickly seen. Or, display all the categories in a select giving more relevance to the joke.

The second approach loses a nice visualization of the categories but on the other hand, you can quickly show a joke from the beginning giving the user all the information about what is the app about 'A Chuck Norris Jokes'. From experience, I know users tend to do a quick scan at the app for about 4 seconds and if you don't convince them to stay, they bounce out.

### Aprroach - Third Problem

So, the best approach is to go with the second option, so the user can immediately know what is the app about. The user can easily read the joke (because there is not any other information to read) and engage on searching for more jokes if the user likes it. That way we had the chance to try the product before bouncing out.

## Final

After implementing all the approaches I decided to make nice cool details since perfections for small details are one of my hobbies. So I decided it would cool to add an image with animation for an empty state in the search. It is a way of small personalization of the app that creates a huge impression on the user. And I replicate the same process with the different status of the request along with the app. Trying to not overstep with the animation since they can be really annoying sometimes.

## Testing

## Features with more time

Coming up with original features has been difficult since it is a simple app. But I had in mind some nice features that could have been implemented if I had more time.

- Adding a filter by category when you search by keyword. Even though the API doesn't have an available request for this specific feature, you can do it manually with the list that we have already since in each joke, it appears its category.

- When typing to request a joke by keyword. Adding an autocomplete (kind of like Google does) but instead of autocompleting the text, it could have provided some examples of funny keywords in case some people with a lack of creativity for thinking words on their own.

- And after adding the 'autocomplete' from before adding also a 'feeling lucky' button so it generates a random joke for you.

- Adding a button that copy/paste the joke would have been a great feature. To facilitate sharing a joke.

- Adding sharing by social media button.

- The typical dark mode/light mode.

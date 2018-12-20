### Introduction

You've learned a lot! At this point, you should be familiar with:

* Stateless components
* Stateful components
* Creating collections of components with `.map`
* Event handlers and binding methods

Let's bring these concepts together with Travel Tracker!

Your goal is to create a travel tracking application that shows a list of destinations that we wish to travel to. When a user clicks on one of the travel items, it should be crossed off of the displayed list. Clicking on our favorite place should reveal a secret message.

### Setup

From your challenges directory, run the following:

```no-highlight
$ et get travel-tracker
$ cd travel-tracker
$ yarn install
$ yarn run start
```

Open your browser and navigate to http://localhost:8080/. There should be no errors in your console!

### Part 1

* Display a list of destinations that a user can check off, using the data from `constants/data.js`.
* Clicking on a destination crosses the destination off with a [strikethrough](https://en.wikipedia.org/wiki/Strikethrough)

NOTE: Do not worry about the ability to click on the destination again to get rid of the strikethrough.

### Part 2

* If a user selects our favorite place (i.e. the country whose `id` matches `favoritePlaceId`) from the destination list, a div containing the message "What a beauty!" should appear at the bottom of the page.
* When a user selects any other destination, the message "What a beauty!" should not be present on the page.

##### Tips:
* When a destination is clicked, it should receive a strikethrough that crosses it out (check out `src/stylesheets/index.css` to see if there's a particular class name you might want to use!)
* You should have both a container component and stateless component as part of your app structure.
* In order to show the "What a beauty!" message, you will need conditional logic that is separate from your list of individual destination components. Specifically, you'll need to compare the id of the destination being clicked, with `favoritePlaceId`.
* What are the different components you need to create? Try drawing a diagram before you begin.
* You should be keeping the number of components that have state to a minimum. If you had to pick one component that would maintain the state of your application, which one would it be?
* Make use of the destinations' ids to determine whether they've been visited or not
* You should also make use of a destination's id in the `handleClick` callback method that you will need to define, HINT HINT!

#### Troubleshooting

- Add in `debugger`s and `console.log`s where necessary! Some of the best places are in your `render()` method so that you can inspect `props` or `state`, or at the top of the callback methods you use in conjunction with your event listeners.
- Don't forget to import and export components as you define them.

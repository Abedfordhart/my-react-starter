# My React

## The Task

Implement a basic version of React which takes a DOM element and a single function as input.
Your library should render the component tree returned by that function into the DOM element.
You can stick to the essentials here: No need to support DOM diffing or JSX. The components your library supports can just be functions or objects which take an optional properties object as input and return a list of sub-components and/or DOM elements to render.

To demo your version of React, render a very simple list of "tasks" (e.g. "Wash clothes"). When a task is clicked on, you should display more details about it (e.g. "Use the cold wash setting on the machine"). Three tasks is fine and you only need to use <ul> and <li> HTML elements for the actual UI (i.e. it should look very basic...no need to spend time on making it look pretty).

## Folder Structure

- /src/lib/ --> This is where your React inspired library should live. There is already a function called `MyReactRender` defined here which is designed to take a DOM element and component. This is where you should start.

- /src/app --> Your simple application components should live in here. There is already a call to `MyReactRender` in /src/app/index.js to get you started.

## Getting started

Run `yarn install` then `yarn start` to serve the `dist/index.html` file.

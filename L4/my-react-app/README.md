# This is an empty react project.
---

# React JS in Detail

React JS is a JavaScript library for building user interfaces. It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.

## Table of Contents
1. [Introduction](#introduction)
2. [Core Concepts](#core-concepts)
3. [JSX](#jsx)
4. [Components](#components)
5. [State and Props](#state-and-props)
6. [Lifecycle Methods](#lifecycle-methods)
7. [Hooks](#hooks)
8. [React Router](#react-router)
9. [State Management](#state-management)

## Introduction
React allows developers to build web applications that can change data, without reloading the page. Its main goal is to be fast, scalable, and simple. It works only on user interfaces in the application, which corresponds to the view in the MVC template.

## Core Concepts

### Virtual DOM
React creates a virtual DOM for every DOM object. When the state of an object changes, React updates the virtual DOM instead of the real DOM. By doing this, React ensures minimum interaction with the real DOM and improved performance.

### One-way Data Binding
React follows one-way data binding by default, which means the data flows in a single direction. This gives better control throughout the application.

### Component-Based Architecture
React application is composed of components. These components can be either class-based or functional components.

## JSX
JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

Example:
```jsx
const element = <h1>Hello, world!</h1>;
```

## Components
Components are the building blocks of a React application. There are two types of components:

### Functional Components
They are simple JavaScript functions that accept props and return React elements.
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Components
They are ES6 classes that extend from `React.Component` and can maintain their own state.
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## State and Props

### Props
Props (short for properties) are read-only attributes used to pass data from parent to child components.
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### State
State represents parts of an application that can change. Each component can maintain its own state.
```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}
```

## Lifecycle Methods
Lifecycle methods are a series of events that happen from the birth to the death of a component.

### Mounting
- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### Updating
- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

### Unmounting
- `componentWillUnmount()`

## Hooks
Hooks are functions that let you use state and lifecycle features in functional components.

### Commonly Used Hooks
- `useState()`
- `useEffect()`
- `useContext()`
- `useReducer()`
- `useRef()`

Example:
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## React Router
React Router is a standard library for routing in React. It enables navigation among views of various components in a React application.

### Example

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
```

## State Management
For large-scale applications, it can be challenging to manage state. React offers several libraries for state management like Redux, Recoil, and Context API.

### Redux
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently.

```jsx
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }
```

### Context API
The Context API is a React structure that enables you to exchange unique details and assist in solving prop-drilling.

```jsx
const MyContext = React.createContext();

function MyProvider(props) {
  const [state, setState] = useState({ name: 'John' });
  return (
    <MyContext.Provider value={[state, setState]}>
      {props.children}
    </MyContext.Provider>
  );
}
```

By understanding these core concepts and tools, developers can build robust, efficient, and scalable web applications with React JS.


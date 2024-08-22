# Shorthand Fragments in React

The `<></>` are shorthand fragments in React.
They allow you to group multiple children elements without adding extra nodes to the DOM.

## React Components

React components can be created in two main ways:

### 1. Functional Components

They are the simplest way to create a component.
These components are JavaScript functions that accept a single `props` object and return React elements.

```jsx
const MyComponent = (props) => {
    return <div>{props.content}</div>;
};
```

### 2. Class Components

These components are ES6 classes that extend the `React.Component` class.
They have a `render` method that returns React elements.

```jsx
class MyComponent extends React.Component {
    render() {
        return <div>{this.props.content}</div>;
    }
}
```

## Ways of Exporting Components (JS Functions)

- **Default export**
    ```js
    export default App;
    ```

- **Named export**
    ```js
    export { App };
    ```

- **Export upon declaration**
    ```jsx
    export const App = () => {
        return (
            <>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
                <h1>Hello World</h1>
            </>
        );
    };
    ```

- **Note**: Depending on the method of exporting, method of importing will also change

## Recommended Project Structure of a React Project

```
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── App.js
│   ├── containers/
│   │   └── MainContainer.js
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```
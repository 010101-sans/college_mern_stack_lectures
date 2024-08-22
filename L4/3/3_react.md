# React Project Setup Guide

## 1. Setting Up the Development Environment

### Installing Node.js
First, install Node.js using Chocolatey:
```sh
choco install nodejs
```

### Using React Developer Tools
To inspect and understand how a React-built website is structured, install the "React Developer Tools" Chrome extension. This tool allows you to analyze the component hierarchy and state management of React applications.

## 2. Creating a New React Project

There are two primary ways to create a new React project: using `create-react-app` or using `Vite`.

### Option 1: Using Create React App
1. Install `create-react-app` globally:
    ```sh
    npm install -g create-react-app
    ```
2. Create a new React app:
    ```sh
    create-react-app my-react-app
    ```

### Option 2: Using Vite
1. Create a new React project with Vite:
    ```sh
    npm create vite@latest my-react-app --template react
    ```
2. Navigate to your project folder:
    ```sh
    cd my-react-app
    ```
3. Install the necessary dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## 3. Developing the Website

### File Structure
1. **src/main.jsx**: The entry point of your React application.
2. **src/App.jsx**: The main component that bundles other components.
3. **src/components**: Directory to store reusable components.
4. **src/styles**: Directory for CSS or styled-components.

### Component Creation
1. **Header Component**: Create a `Header` component inside the `components` directory.
    ```jsx
    // src/components/Header.jsx
    import React from 'react';

    const Header = () => {
        return (
            <header>
                <h1>Website Title</h1>
            </header>
        );
    };

    export default Header;
    ```

2. **Footer Component**: Create a `Footer` component inside the `components` directory.
    ```jsx
    // src/components/Footer.jsx
    import React from 'react';

    const Footer = () => {
        return (
            <footer>
                <p>&copy; 2023 Website</p>
            </footer>
        );
    };

    export default Footer;
    ```

### Adding Components to App.jsx
Edit `App.jsx` to include the `Header` and `Footer` components.
```jsx
// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Welcome to my website!</p>
            </main>
            <Footer />
        </div>
    );
};

export default App;
```

### Styling the Components
1. **Global Styles**: Create a `styles.css` file in the `src/styles` directory.
    ```css
    /* src/styles/styles.css */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header, footer {
        background-color: #282c34;
        color: white;
        padding: 1em;
        text-align: center;
    }

    main {
        padding: 2em;
    }
    ```

2. **Import the Styles in App.jsx**:
    ```jsx
    // src/App.jsx
    import React from 'react';
    import './styles/styles.css';
    import Header from './components/Header';
    import Footer from './components/Footer';

    const App = () => {
        return (
            <div className="App">
                <Header />
                <main>
                    <p>Welcome to my website!</p>
                </main>
                <Footer />
            </div>
        );
    };

    export default App;
    ```

### Testing the Application
1. **Run the development server**:
    ```sh
    npm start
    ```

### References
1. **React Documentation**: https://reactjs.org/docs/getting-started.html
2. **Vite Documentation**: https://vitejs.dev/guide/
3. **React Developer Tools**: https://react.devtools/
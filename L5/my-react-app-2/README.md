# Project Overview

This project consists of three main components:

1. `src/components/Gallery.jsx`: A functional component that renders a table with three columns, each containing a `Profile` component.

2. `src/components/Profile.jsx`: A functional component that displays a card with an image and text.

3. `src/main.jsx`: The main entry point of the React application.

## Gallery Component

The `Gallery` component is a functional component that returns a table with three columns. Each column contains a `Profile` component.

```jsx
// src/components/Gallery.jsx

import React from "react";

const Gallery = () => {
    return (
        <table>
            <tr>
                <td><Profile /></td>
                <td><Profile /></td>
                <td><Profile /></td>
            </tr>
        </table>
    );
};

export default Gallery;
```

## Profile Component

The `Profile` component is a functional component that renders a card with an image and text.

```jsx
// src/components/Profile.jsx

import React from "react";
import profileImage from "../assets/salman_khan.jpg";

const style = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 0, 0, 0.9)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '10px',
    },
    
    image: {
        borderRadius: '3%',
        marginBottom: '5px'
    }
};

const Profile = () => {
    return (
        <div style={style.card}>
            <img src={profileImage} alt="Salman Khan" height={200} style={style.image} />

            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Salman Khan</h2> 
        </div>
    );
};

export default Profile;
```

## Main Application

The `src/main.jsx` file sets up the React application and renders the `Gallery` component.

```jsx
// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Gallery from './components/Gallery.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
);
```

## Summary

This project demonstrates a simple React application with a gallery of profiles. The `Gallery` component renders a table with three columns, each containing a `Profile` component. The `Profile` component displays a card with an image and text. The main application sets up the React environment and renders the `Gallery` component.

To run the application (start the development server and open the application in your default web browser), navigate to the project root and execute:
```
npm run dev
```
import React from "react";
import Card from "./Card";
import productImage from "../assets/product.png"

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px'
};

const gridItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    background: '#f9f9f9'
};

const Grid = ({ rows, cols }) => {

    const products = {
        "iPhone 1": 60000,
        "iPhone 2": 80000,
        "iPhone 3": 100000,
        "iPhone 4": 120000,
        "iPhone 5": 140000,
        "iPhone 6": 60000,
        "iPhone 7": 80000,
        "iPhone 8": 100000,
        "iPhone 9": 120000,
        "iPhone 10": 140000,
        "iPhone 11": 140000,
        "iPhone 12": 140000,
        "iPhone 13": 160000,
        "iPhone 14": 140000,
        "iPhone 15": 180000
    };

    const productKeys = Object.keys(products);

    let cards = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const index = row * cols + col;
            const title = productKeys[index % productKeys.length];
            const content = products[title];
            cards.push(<Card key={index} title={title} content={content} img={productImage} />);
        }
    }

    return (
        <div style={gridStyle}>
            {cards.map((card, index) => (
                <div key={index} style={gridItemStyle}>
                    {card}
                </div>
            ))}
        </div>
    );
};

export default Grid;
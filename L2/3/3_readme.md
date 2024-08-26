# CSS Concepts Overview

## Table of Contents
1. [Introduction](#introduction)
2. [Selectors](#selectors)
    - [Basic Selectors](#basic-selectors)
    - [Combinator Selectors](#combinator-selectors)
    - [Pseudo-class Selectors](#pseudo-class-selectors)
    - [Pseudo-element Selectors](#pseudo-element-selectors)
    - [Attribute Selectors](#attribute-selectors)
3. [Box Model](#box-model)
4. [Display Property](#display-property)
5. [Position Property](#position-property)
6. [Flexbox](#flexbox)
7. [Grid Layout](#grid-layout)
8. [Responsive Design](#responsive-design)
9. [Color](#color)
10. [Typography](#typography)
11. [Backgrounds](#backgrounds)
12. [Borders](#borders)
13. [Animations and Transitions](#animations-and-transitions)

## Introduction
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of web pages.

## Selectors
Selectors are patterns used to select the elements you want to style.

### Basic Selectors
- **Universal Selector (`*`)**: Selects all elements.
- **Type Selector (`element`)**: Selects all elements of a given type.
- **Class Selector (`.class`)**: Selects all elements with a given class.
- **ID Selector (`#id`)**: Selects the element with a given ID.

### Combinator Selectors
- **Descendant Selector (`ancestor descendant`)**: Selects all descendants of an element.
- **Child Selector (`parent > child`)**: Selects all direct children of an element.
- **Adjacent Sibling Selector (`sibling + sibling`)**: Selects the next sibling.
- **General Sibling Selector (`sibling ~ siblings`)**: Selects all siblings.

### Pseudo-class Selectors
- **`:hover`**: Selects elements when they are being hovered over.
- **`:focus`**: Selects elements when they are focused.
- **`:nth-child(n)`** and **`:nth-of-type(n)`**: Select elements based on a formula.

### Pseudo-element Selectors
- **`::before`**: Inserts content before the content of an element.
- **`::after`**: Inserts content after the content of an element.

### Attribute Selectors
- **`[attribute]`**: Selects elements with the specified attribute.
- **`[attribute=value]`**: Selects elements with the attribute set to a specific value.

## Box Model
The box model represents the structure of an element, consisting of:
- **Content**: The actual content of the box.
- **Padding**: Space between the content and the border.
- **Border**: The border around the padding (if any).
- **Margin**: The space outside the border.

## Display Property
Controls how an element is displayed:
- **`display: block`**: The element takes up the full width available.
- **`display: inline`**: The element takes up only as much width as necessary.
- **`display: inline-block`**: The element is formatted as an inline element but can have padding and margins.

## Position Property
Specifies the positioning method for an element:
- **`static`**: Default value; elements are positioned according to the document flow.
- **`relative`**: Positioned relative to its normal position.
- **`absolute`**: Positioned relative to the nearest positioned ancestor.
- **`fixed`**: Positioned relative to the viewport.
- **`sticky`**: Switches between relative and fixed, depending on the scroll position.

## Flexbox
A layout model for arrangement in one direction:
- **`display: flex`**: Defines a flex container.
- **`flex-direction`**: Row, column, row-reverse, column-reverse.
- **`justify-content`**: Alignment along the main axis.
- **`align-items`**: Alignment along the cross-axis.
- **`flex-wrap`**: Wrap or nowrap items.

## Grid Layout
A layout model for two-dimensional arrangements:
- **`display: grid`**: Defines a grid container.
- **`grid-template-columns`/`grid-template-rows`**: Defines columns and rows.
- **`grid-gap`**: Space between grid items.
- **`grid-area`**: Defines a grid item’s location.

## Responsive Design
Adapts content to different screen sizes:
- **Media Queries (`@media`)**: Apply styles based on conditions.
- **Fluid Layouts**: Use relative units like percentages.
- **Responsive Images**: Use image attributes like `srcset`.

## Color
CSS provides various ways to specify colors:
- **Color Names**: e.g., `red`, `blue`.
- **HEX Values**: e.g., `#ff0000`.
- **RGB and RGBA**: e.g., `rgb(255, 0, 0)` and `rgba(255, 0, 0, 0.5)`.
- **HSL and HSLA**: e.g., `hsl(0, 100%, 50%)` and `hsla(0, 100%, 50%, 0.5)`.

## Typography
Controls the appearance of text:
- **`font-family`**: Specifies the font.
- **`font-size`**: Specifies the text size.
- **`font-weight`**: Controls the boldness.
- **`line-height`**: Controls the distance between lines of text.
- **`text-align`**: Aligns the text horizontally.

## Backgrounds
CSS properties for background effects:
- **`background-color`**: Sets the background color.
- **`background-image`**: Sets the background image.
- **`background-repeat`**: Repeats the background image.
- **`background-position`**: Positions the background image.
- **`background-size`**: Resizes the background image.

## Borders
CSS properties for border effects:
- **`border`**: Shorthand for setting all border properties.
- **`border-width`**: Sets the width of the border.
- **`border-style`**: Sets the style of the border (e.g., `solid`, `dashed`).
- **`border-color`**: Sets the color of the border.
- **`border-radius`**: Rounds the corners of the border.

## Animations and Transitions
Enables the animation of elements:
- **`transition`**: Smooth changes from one state to another.
- **`@keyframes`**: Defines an animation.
- **`animation`**: Applies an animation to an element.

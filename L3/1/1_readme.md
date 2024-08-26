# Bootstrap CSS Guide

# Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Via CDN](#via-cdn)
    - [Download](#download)
3. [Grid System](#grid-system)
    - [Basic Structure](#basic-structure)
    - [Grid Options](#grid-options)
    - [Responsive Breakpoints](#responsive-breakpoints)
4. [Typography](#typography)
    - [Headings](#headings)
    - [Display Headings](#display-headings)
    - [Lead](#lead)
    - [Inline Text Elements](#inline-text-elements)
5. [Forms](#forms)
    - [Basic Form](#basic-form)
    - [Checkboxes and Radios](#checkboxes-and-radios)
    - [Select Menu](#select-menu)
6. [Buttons](#buttons)
    - [Button Variants](#button-variants)
    - [Button Sizes](#button-sizes)
7. [Tables](#tables)
    - [Basic Table](#basic-table)
    - [Striped Rows](#striped-rows)
    - [Bordered Table](#bordered-table)
    - [Hoverable Rows](#hoverable-rows)
8. [Components](#components)
    - [Alerts](#alerts)
    - [Modals](#modals)
    - [Badges](#badges)
    - [Pills](#pills)
9. [Utilities](#utilities)
    - [Spacing](#spacing)
    - [Text Alignment](#text-alignment)
    - [Background Colors](#background-colors)
    - [Flexbox](#flexbox)
10. [Navbars](#navbars)
    - [Basic Navbar](#basic-navbar)
    - [Navbar Variants](#navbar-variants)
11. [Cards](#cards)
    - [Basic Card](#basic-card)
    - [Card Groups](#card-groups)
12. [Carousel](#carousel)
    - [Basic Carousel](#basic-carousel)
13. [Tooltips & Popovers](#tooltips--popovers)
    - [Tooltips](#tooltips)
    - [Popovers](#popovers)
14. [Toasts](#toasts)
    - [Basic Toast](#basic-toast)

## Introduction

Bootstrap is a powerful front-end framework for faster and easier web development. It includes HTML and CSS-based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, and many other components, as well as optional JavaScript plugins.

## Getting Started

To use Bootstrap in your project, you need to include the Bootstrap CSS and JS files in your HTML. You can either download Bootstrap from the official Bootstrap website or use a CDN.

### Via CDN

```html
<!DOCTYPE htm>
<html lan="en">
    <head>
        <meta chrset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=ede" />
        <meta name="viewport" content="width=device-width, initial-scale=.0" />
        <link
            href="https://stackpath.bootstrapcd.com/bootstrap/4.5.2/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <title>Bootstrap Example</title></head
    >>
    <body>
        <!-- Your content here -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
</html>
```

### Download

If you prefer to download Bootstrap, you can download the compiled CSS and JS files from [getbootstrap.com](https://getbootstrap.com). Then, include them in your project like this:

```html
<link href="path/to/bootstrap.min.css" rel="stylesheet" />
<script src="path/to/bootstrap.min.js"></script>
```

## Grid System

Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive.

### Basic Structure

```html
<div class="container">
    <div class="row">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
    </div>
</div>
```

### Grid Options

-   **Containers**: `.container`, `.container-fluid`
-   **Rows**: `.row`
-   **Columns**: `.col`, `.col-*` (e.g., `.col-6` for half width)

### Responsive Breakpoints

Define the number of columns to span on different screen sizes:

-   `.col-sm-*` (Small: ≥576px)
-   `.col-md-*` (Medium: ≥768px)
-   `.col-lg-*` (Large: ≥992px)
-   `.col-xl-*` (Extra large: ≥1200px)

```html
<div class="row">
    <div class="col-sm-4 col-md-6">Column</div>
    <div class="col-sm-8 col-md-6">Column</div>
</div>
```

## Typography

Bootstrap provides a variety of typography options to style text content.

### Headings

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```

### Display Headings

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```

### Lead

```html
<p class="lead">This is a lead paragraph. It stands out with a larger font and lighter weight.</p>
```

### Inline Text Elements

```html
<p>You can use the <mark>mark tag</mark> to highlight text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```

## Forms

Bootstrap provides custom form controls with consistent styles. Here are some common form controls.

### Basic Form

```html
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
        >
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Checkboxes and Radios

```html
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
    <label class="form-check-label" for="defaultCheck1"> Default checkbox </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
    <label class="form-check-label" for="defaultCheck2"> Disabled checkbox </label>
</div>
<div class="form-check">
    <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
    />
    <label class="form-check-label" for="exampleRadios1"> Default radio </label>
</div>
<div class="form-check">
    <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="option2"
        disabled
    />
    <label class="form-check-label" for="exampleRadios2"> Disabled radio </label>
</div>
```

### Select Menu

```html
<div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div>
```

## Buttons

Bootstrap has an extensive collection of buttons which can be used directly by adding the class `.btn` and specific button classes for styling.

### Button Variants

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

### Button Sizes

```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
```

## Tables

Bootstrap provides a set of table classes to improve the appearance of tables.

### Basic Table

```html
<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
    </tbody>
</table>
```

### Striped Rows

```html
<table class="table table-striped">
    <!-- table content -->
</table>
```

### Bordered Table

```html
<table class="table table-bordered">
    <!-- table content -->
</table>
```

### Hoverable Rows

```html
<table class="table table-hover">
    <!-- table content -->
</table>
```

## Components

Bootstrap includes various pre-styled components that you can use in your web pages.

### Alerts

Alerts are available for any length of text, as well as for different contextual messages.

```html
<div class="alert alert-primary" role="alert">This is a primary alert—check it out!</div>
<div class="alert alert-secondary" role="alert">This is a secondary alert—check it out!</div>
<div class="alert alert-success" role="alert">This is a success alert—check it out!</div>
<div class="alert alert-danger" role="alert">This is a danger alert—check it out!</div>
<div class="alert alert-warning" role="alert">This is a warning alert—check it out!</div>
<div class="alert alert-info" role="alert">This is an info alert—check it out!</div>
<div class="alert alert-light" role="alert">This is a light alert—check it out!</div>
<div class="alert alert-dark" role="alert">This is a dark alert—check it out!</div>
```

### Modals

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<!-- Modal -->
<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                </button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```

### Badges

```html
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
```

### Pills

```html
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
</ul>
```

## Utilities

Bootstrap includes a wide range of utility classes to adjust various design elements based on common use cases.

### Spacing

Adjust the margin or padding with spacing utilities. The values are based on a scale from 0 to 5.

```html
<div class="mt-3">Margin top 3</div>
<div class="py-3">Padding y-axis 3</div>
```

### Text Alignment

Align text using the text alignment classes.

```html
<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
```

### Background Colors

Change the background color of an element with background color utilities.

```html
<div class="bg-primary text-white">Primary background with white text</div>
<div class="bg-secondary text-white">Secondary background with white text</div>
<div class="bg-success text-white">Success background with white text</div>
```

### Flexbox

Use Flexbox utilities to align and justify content within a container.

```html
<div class="d-flex justify-content-center">
    <div>Centered item</div>
</div>
<div class="d-flex align-items-start">
    <div>Start aligned item</div>
</div>
```

## Navbars

The Bootstrap navbar component is a highly customizable responsive header component.

### Basic Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
        </ul>
    </div>
</nav>
```

### Navbar Variants

You can change the look of your navbar with various background and color classes:

-   `.navbar-light` or `.navbar-dark` for text color
-   `.bg-primary`, `.bg-dark`, `.bg-light` for background color

## Cards

Cards are a flexible content container with multiple variants and options.

### Basic Card

```html
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

### Card Groups

Cards can be grouped together in a grid:

```html
<div class="card-group">
    <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional
                content.
            </p>
        </div>
    </div>
    <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
            </p>
        </div>
    </div>
    <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional
                content.
            </p>
        </div>
    </div>
</div>
```

## Carousel

A carousel is a slideshow for cycling through a series of content.

### Basic Carousel

```html
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
        </div>
    </div>
</div>
```

## Tooltips & Popovers

Add small overlay content with Tooltips and Popovers.

### Tooltips

```html
<button
    type="button"
    class="btn btn-secondary"
    data-toggle="tooltip"
    data-placement="top"
    title="Tooltip on top"
>
    Tooltip on top
</button>
```

### Popovers

```html
<button
    type="button"
    class="btn btn-lg btn-danger"
    data-toggle="popover"
    title="Popover title"
    data-content="And here's some amazing content. It's very engaging. Right?"
>
    Click to toggle popover
</button>
```

## Toasts

Toasts are lightweight notifications designed to mimic push notifications.

### Basic Toast

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="..." />
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="toast-body">Hello, world! This is a toast message.</div>
</div>
```

## Progress Bars

Visualize progress with customizable progress bars.

### Basic Progress Bar

```html
<div class="progress">
    <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%;"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
    ></div>
</div>
```

## Pagination

Create pagination components to navigate through pages.

### Basic Pagination

```html
<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav>
```

## Scrollspy

Scrollspy automatically updates the active link in a navigation list based on scroll position.

### Basic Scrollspy

```html
<body data-spy="scroll" data-target="#navbar-example3" data-offset="0">
    <nav id="navbar-example3" class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" href="#item-1">Item 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#item-2">Item 2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#item-3">Item 3</a>
            </li>
        </ul>
    </nav>
    <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" class="scrollspy-example">
        <h4 id="item-1">Item 1</h4>
        <p>Content for item 1</p>
        <h4 id="item-2">Item 2</h4>
        <p>Content for item 2</p>
        <h4 id="item-3">Item 3</h4>
        <p>Content for item 3</p>
    </div>
</body>
```

## Responsive Design

Bootstrap is built to be responsive, meaning your website will adapt to different screen sizes. Use the responsive classes and utilities to create layouts that work well on all devices.

## Custom Styling

While Bootstrap provides a great starting point, you can customize it to fit your needs:

1. Override Bootstrap's default variables
2. Create custom CSS classes
3. Use Bootstrap's built-in Sass variables and mixins

## JavaScript Plugins

Bootstrap comes with several JavaScript plugins that can add interactivity to your site:

-   Modals
-   Dropdowns
-   Carousels
-   Tooltips
-   Popovers
-   And more...

Be sure to include the necessary JavaScript files to use these features.

## Conclusion

This guide now covers a wider range of Bootstrap components and utilities, providing a solid foundation for anyone looking to use Bootstrap in their web projects. For more advanced topics, always refer to the official Bootstrap documentation at [getbootstrap.com](https://getbootstrap.com/docs/).

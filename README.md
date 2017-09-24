# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. MyReads is a bookshelf application that allow a book reader to select and organize books by searching and categorizing his books as read, currently reading and want to read.

## Install and Use

In your console use `npm install` to install all projetct dependencies and `npm start` to initiate the server.


## Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the app root.
    ├── App.test.js # Used for testing. But no used in this project.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # Helpful images for your app. Use at your discretion.
    │   ├── AddBook # Component to access search functionality.
    │   ├── Book # Component that represents a book whit its informations and hability to add it to a shelf/category.
    │   ├── Bookshelf # Component that represents a shelf/category.
    │   ├── Header # Component to render the application's header.
        └── Search # Component that implements search fuctionality.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # DOM rendering only, no need to modify
```

## Backend Server

The  file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## My Reads Starter

This project was built upon [MyReads Project Starter Template](https://github.com/udacity/reactnd-project-myreads-starter). The goal was to add interactivity using React. You can find more information [here](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/README.md).
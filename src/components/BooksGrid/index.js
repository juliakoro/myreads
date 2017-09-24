import React from 'react';
import Book from '../../components/Book/';
import './styles.css';

/**
* @description Represents the grid pattern for listing the books in a shelf.
* @constructor
* @param {Object[]} books - Books to be listed on the grid.
* @param {function} updateBook - Allows to update the book.
*/
const BooksGrid = ({ books, updateBook }) => {
	return (
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <Book
                        infos={book}
                        updateBook={updateBook}
                    />
                </li>
            ))}
        </ol>
	);
}

export default BooksGrid;
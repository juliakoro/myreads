import React from 'react';
import Book from '../../components/Book/';
import './styles.css';

/**
* @description Represents a shelf.
* @constructor
* @param {string} title - Shelf title.
* @param {Object[]} books - Books in the shelf.
* @param {function} updateBook - Allows to update the book.
*/
const Bookshelf = ({ shelf, updateBook }) => {
	const { title, books } = shelf;

	return (
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Bookshelf;
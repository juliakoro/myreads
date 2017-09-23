import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import Loader from 'react-loader';

/**
* @description Search component.
* @constructor
* @param {function} searchBooks - To perform a search.
* @param {Object[]} searchResults - Results of a search.
* @param {function} updateBook - Allows to update the book.
* @param {function} clearResults - Allows to clear the results of a search.
* @param {boolean} loaded - Indicates if the data is loaded, to show/hide the spinning loading.
*/
const Search = ({ searchBooks, searchResults = [], updateBook, clearResults, loaded }) => {
	const results = searchResults;

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search" onClick={clearResults}>Close</Link>
				<div className="search-books-input-wrapper">
					<input autoFocus="true" type="text" placeholder="Search by title or author" onChange={searchBooks} />
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					<Loader loaded={loaded}></Loader>
					{results.map(book => (
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
	);
}

export default Search;
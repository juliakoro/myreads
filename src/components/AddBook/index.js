import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

/**
* @description Component to access search functionality.
*/
const AddBook = () => {
	return (
		<div className="open-search">
			<Link to="/search" >Add a book</Link>
		</div>
	);
}

export default AddBook;
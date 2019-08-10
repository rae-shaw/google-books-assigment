import React from 'react';
import SearchResultItem from "./SearchResultItem";



function SearchResults(props){
	console.log(props, 'props passed to SearchResults');
	const bookArray = props.books.items
	const books= bookArray.map((book, i)=> (<SearchResultItem{...book} key={i}/>));
	console.log(bookArray, 'map rendered')
	return(
		<div>
			<h2>Placeholder for List Items</h2>
			<li>
				{books}
			</li>
		</div>
	);
}

export default SearchResults;
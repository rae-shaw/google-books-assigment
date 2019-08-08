import React from 'react';
import SearchResultItem from "./SearchResultItem";



function SearchResults(props){
	const books = props.books.map((book, i)=> <SearchResultItem{...book} key={i}/>);
	return(
		<div>
			<h2>Placeholder for List Items</h2>
			{books}
		</div>
	);
}

export default SearchResults;
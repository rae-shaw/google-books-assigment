import React from 'react';

export default function SearchResultItem(props){
	return(
		<div>
			<div>
				<h2>Title</h2>
				{props.volumeInfo.title}
			</div>
			<div>
				<h2>Authors</h2>
				{props.volumeInfo.authors}
			</div>
		</div>
		);
}
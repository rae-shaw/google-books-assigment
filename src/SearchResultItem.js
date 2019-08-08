import React from 'react';

export default function SearchResultItem(props){
	return(
		<div>
			<div>
				{props.volumeInfo.title}
			</div>
			<div>
				{props.volumeInfo.authors}
			</div>
		</div>
		);
}
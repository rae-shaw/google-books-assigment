import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			searchTerm: '',
			printType:'',
			bookType:''
		};
	}

	searchTermChanged(searchTerm){
		this.setState({
			searchTerm
		});
	}

	printTypeChanged(printType){
		this.setState({
			printType
		});
	}
	
	bookTypeChanged(bookType){
		this.setState({
			bookType
		});
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state);
	}

	render(){
		return(
			<div className='bookSearch'>
				<form 
					className='bookSearchForm'
					onSubmit={e => this.handleSubmit(e)}
				>
					<label htmlFor='searchTerm'>Search</label>
					<input
						type='text'
						name='searchTerm'
						id='textInput'
						placeholder='Hemmingway'
						value={this.state.searchTerm}
						onChange={e=>this.searchTermChanged(e.target.value)}/>
					<label htmlFor='printType'>Print Type</label>
					<select id='mySelect'
						name='printType'
						id='selectPrintType'
						onChange={e=>this.printTypeChanged(e.target['mySelect'].value)}>
						<option value='all'>All</option>
						<option value='books'>Books</option>
						<option value='magazines'>Magazines</option>
					</select>
					<label htmlFor='bookType'> Book Type</label>
					<select
						name='bookType'
						id='selectPrintType'>
						<option value="no filter">no filter</option>
						<option value="partial">partial</option>
						<option value="full">full</option>
						<option value="free-ebooks">free-ebooks</option>
						<option value="paid-ebooks">paid-ebooks</option>
						<option value="ebooks">ebooks</option>
					</select>
					<div>
						<button type='submit'>Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchForm;
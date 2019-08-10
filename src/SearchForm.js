import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component{

	constructor(props){
		super(props)
		this.state={
			searchTerm: '',
			printType:'',
			bookType:'',
			callback: props.callBack
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
		const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}
		&filter=${this.state.bookType}&key=AIzaSyB3rrscIhe4TgGuJ7wUMx2u_X7XKdvavdU`;


		fetch(url)
		.then(res=>{
			if(!res.ok){
				throw new Error("Something went wrong please try again later.")
			}
			return res
		})
		.then(res => res.json())
		.then(resJson=> { console.log(this.state.callback); this.state.callback(resJson) })

		.catch(err=>{
			console.log('Something went wrong. Caught by catch', err)
		}); 
	}



    render(){
		return(
			<div className='bookSearch'>
				<form 
					className='bookSearchForm'
					onSubmit={e => this.handleSubmit(e)}>
					<label htmlFor='searchTerm'>Search</label>
					<input
						type='text'
						name='searchTerm'
						id='textInput'
						placeholder='Hemmingway'
						value={this.searchTerm}
						onChange={e => this.searchTermChanged(e.target.value)}/>
					<label htmlFor='printType'>Print Type</label>
					<select
						name='printType'
						id='selectPrintType'
						onChange={e=>this.printTypeChanged(e.target.value)}>
						<option value='all'>All</option>
						<option value='books'>Books</option>
						<option value='magazines'>Magazines</option>
					</select>
					<label htmlFor='bookType'> Book Type</label>
					<select
						name='bookType'
						id='selectBookType'
						onChange={e=>this.bookTypeChanged(e.target.value)}>
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
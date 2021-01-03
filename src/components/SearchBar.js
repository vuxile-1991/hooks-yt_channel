import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		onFormSubmit(term);

		//TODO: Make sure we call
		// callback from parent component
	};
	return (
		<div className='search-bar ui segment'>
			<form onSubmit={onSubmit} className='ui form'>
				<div className='field'>
					<label>Video search bar</label>
					<input
						className='search-bar'
						type='text'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						placeholder='Search...'
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;

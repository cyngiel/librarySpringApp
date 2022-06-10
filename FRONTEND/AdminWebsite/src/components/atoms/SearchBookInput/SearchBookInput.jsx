import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { enterSearchWord } from '../../../redux-toolkit/features/search/searchSlice';
import styles from './SearchBookInput.module.scss';

export const SearchBookInput = () => {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState('');

	const handleInputValueChange = (event) => setSearchInput(event.target.value);

	const handleSearchBookSubmit = (event) => {
		event.preventDefault();
		console.log(searchInput);
		dispatch(enterSearchWord(searchInput));
		setSearchInput('');
	};

	return (
		<>
			<form onSubmit={handleSearchBookSubmit} className={styles.searchForm}>
				<input
					type='text'
					className={styles.searchInput}
					name='search'
					id='search'
					value={searchInput}
					onChange={handleInputValueChange}
				/>
				<button className={styles.btn}>search</button>
			</form>
		</>
	);
};

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addBook } from '../../redux-toolkit/features/books/bookSlice';
import styles from './SingleBookView.module.scss';

export const SingleBookView = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [singleBook, setSingleBook] = useState({
		title: '', 
		author: '', 
		category: '', 
		publish_year: 0, 
		description: '',
		available_items: 0, 
		items: 0
	});

	const handleAddBook = () => dispatch(addBook(id));
	useEffect( () => 
	{
		( async () => {
			const res = await fetch(`http://localhost:8080/book/id?id=${id}`)
			const data = await res.json()
			setSingleBook(data)
		}) ()
	}, [id])

	return (
		<article className={styles.wrapper}>
			<img
				src='https://picsum.photos/300/300'
				alt='book'
				className={styles.picture}
			/>
			<div className={styles.infoWrapper}>
				<div>
					<h2 className={styles.title}>{singleBook.title}</h2>
					<h3>Author: {singleBook.author}</h3>
					<p>Category: {singleBook.category}</p>
					<p>Date of publication: {singleBook.publish_year}</p>
				</div>
				<div className={styles.bookState}>
					<p>{`Availability: ${singleBook.stockItemsCount} / ${singleBook.items}`}</p>
					<button className={styles.btn} onClick={handleAddBook}>
						Reserve
					</button>
				</div>
			</div>
			<div className={styles.descriptionBlock}>
				<h3>Description:</h3>
				<p className={styles.description}>{singleBook.description}</p>
			</div>
		</article>
	);
};

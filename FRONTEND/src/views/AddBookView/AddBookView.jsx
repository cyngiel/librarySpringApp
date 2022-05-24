import { useState } from 'react';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { Textarea } from '../../components/atoms/Textarea/Textarea';
import { useForm } from 'react-hook-form';
import styles from './AddBookView.module.scss';

export const AddBookView = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const titleValidation = {
		required: 'Title is required',
	};
	const authorValidation = {
		required: 'Title is required',
	};
	const categoryValidation = {
		required: 'Title is required',
	};
	const catalogNumberValidation = {
		required: 'Title is required',
	};
	const publishYearValidation = {
		required: 'Title is required',
	};
	const publishingHouseValidation = {
		required: 'Title is required',
	};
	const itemsValidation = {
		required: 'Title is required',
	};

	const onSubmit = (data) => {
		console.log('submit', data);
	};
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log('Wysyłam dane:', formData);
	// };

	return (
		<>
			<section className={styles.wrapper}>
				<h2>Add New Book</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.bookForm}>
					<Input
						type='text'
						name='title'
						register={register}
						validationFunction={titleValidation}
						errors={errors.title}
					/>
					<Input
						type='text'
						name='author'
						register={register}
						validationFunction={authorValidation}
						errors={errors.author}
					/>
					<Input
						type='text'
						name='category'
						register={register}
						validationFunction={categoryValidation}
						errors={errors.category}
					/>
					<Input
						type='text'
						name='catalog_number'
						register={register}
						validationFunction={catalogNumberValidation}
						errors={errors.catalog_number}
					/>
					<Input
						type='text'
						name='publish_year'
						register={register}
						validationFunction={publishYearValidation}
						errors={errors.publish_year}
					/>
					<Input
						type='text'
						name='publishing_house'
						register={register}
						// errors={errors.publishing_house}
					/>
					<Input
						type='text'
						name='items'
						register={register}
						validationFunction={itemsValidation}
						errors={errors.items}
					/>
					<Textarea
						name='description'
						register={register}
					/>
					<Button name='Add' type='submit' />
				</form>
			</section>
		</>
	);
};

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
		required: 'Author is required',
	};
	const categoryValidation = {
		required: 'Book category is required',
	};
	const catalogNumberValidation = {
		required: 'Catalog number is required',
	};
	const publishYearValidation = {
		required: 'Publish Year is required',
	};

	const onSubmit = (data) => {
		( async () => {
			const res = await fetch('http://localhost:8080/book/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
				},
				body: JSON.stringify({
					...data,
					publish_year: Number(data.publish_year),
				})
			})
			console.log('Zwrotka', await res.json())
		}) ()
	};

	return (
		<>
			<section className={styles.wrapper}>
				<h2>Add New Book</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.bookForm}>
					<Input
						type='text'
						name='title'
						label='Title'
						register={register}
						validationFunction={titleValidation}
						errors={errors.title}
					/>
					<Input
						type='text'
						name='author'
						label='Author'
						register={register}
						validationFunction={authorValidation}
						errors={errors.author}
					/>
					<Input
						type='text'
						name='category'
						label='Category'
						register={register}
						validationFunction={categoryValidation}
						errors={errors.category}
					/>
					<Input
						type='text'
						name='catalog_number'
						label='Catalog number'
						register={register}
						validationFunction={catalogNumberValidation}
						errors={errors.catalog_number}
					/>
					<Input
						type='text'
						name='publish_year'
						label='Publish year'
						register={register}
						validationFunction={publishYearValidation}
						errors={errors.publish_year}
					/>
					<Input
						type='text'
						name='publishing_house'
						label='Publishing_house'
						register={register}
					/>
					<Textarea name='description' register={register} />
					<Button name='Add' type='submit' />
				</form>
			</section>
		</>
	);
};

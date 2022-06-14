import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { Textarea } from '../../components/atoms/Textarea/Textarea';
import { useForm } from 'react-hook-form';
import styles from './AdminAddNewsView.module.scss';

export const AdminAddNewsView = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const titleValidation = {
		required: 'Title is required',
	};
	const contentValidation = {
		required: 'Content is required',
	};

	const onSubmit = (data) => {
		(async () => {
			const res = await fetch('http://localhost:8080/news/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
				},
				body: JSON.stringify({
					...data
				}),
			});
			console.log('Zwrotka', await res.json());
		})();
	};

	return (
		<>
			<section className={styles.wrapper}>
				<h2>Add New News</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.bookForm}>
					<Input
						type='text'
						name='title'
						label='Title'
						register={register}
						validationFunction={titleValidation}
						errors={errors.title}
					/>

					<Textarea
						name='content'
            label='Content'
						register={register}
						validationFunction={contentValidation}
						errors={errors.content}
					/>
					<Button name='Add' type='submit' />
				</form>
			</section>
		</>
	);
};

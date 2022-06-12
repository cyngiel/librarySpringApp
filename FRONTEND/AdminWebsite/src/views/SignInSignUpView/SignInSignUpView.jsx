import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import styles from './SignInSignUpView.module.scss';

export const SignInSignUpView = () => {
	const [isLogIn, setIsLogIn] = useState(true);
	const handleChangeOption = () => setIsLogIn((prev) => !prev);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const onSubmit = (data) => {
		console.log('submit', data);
	};

	const loginValidate = {
		required: 'Name is required',
		minLength: {
			value: 3,
			message: 'Login must contain at least 3 characters',
		},
		maxLength: {
			value: 30,
			message: 'Login must not contain more than 30 characters',
		},
	};
	const passwordValidate = {
		required: 'Password is required',
		minLength: {
			value: 6,
			message: 'Password must contain at least 6 characters',
		},
		maxLength: {
			value: 30,
			message: 'Password must not contain more than 30 characters',
		},
	};
	const emailValidate = {
		required: 'Email is required',
		pattern: {
			value:
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Incorrect form of email ',
		},
	};

	return (
		<div className={styles.wrapper}>
			{isLogIn ? (
				<h2 className={styles.formTitle}>Log Into Online bookstore</h2>
			) : (
				<h2 className={styles.formTitle}>Create new account</h2>
			)}

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='login'
					label='Login'
					register={register}
					validationFunction={loginValidate}
					errors={errors.login}
				/>
				<Input
					type='password'
					name='password'
					label='Password'
					register={register}
					validationFunction={passwordValidate}
					errors={errors.password}
				/>
				{!isLogIn && (
					<Input
						type='text'
						name='email'
						label='Email'
						register={register}
						validationFunction={emailValidate}
						errors={errors.email}
					/>
				)}
				{isLogIn ? (
					<Button name='Log in' type='submit' />
				) : (
					<Button name='Sign Up' type='submit' />
				)}
			</form>
			<div className={styles.delimiter}></div>

			{isLogIn ? (
				<Button name='Create new account' handleOnClick={handleChangeOption} />
			) : (
				<Button name='Log in' handleOnClick={handleChangeOption} />
			)}
		</div>
	);
};
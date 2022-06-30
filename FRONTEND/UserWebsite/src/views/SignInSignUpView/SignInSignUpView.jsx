import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { addUserStatus } from '../../redux-toolkit/features/user/userSlice';
import styles from './SignInSignUpView.module.scss';


export const SignInSignUpView = () => {
const navigate = useNavigate()


	const dispatch = useDispatch()
	const [isLogIn, setIsLogIn] = useState(true);
	const handleChangeOption = () => setIsLogIn((prev) => !prev);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const onSubmit = (data) => {
		// console.log('submit', data);
		if (!isLogIn) {
			(async () => {
				const res = await fetch('http://localhost:8080/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});
				// console.log(await res.text());
				window.location.reload(false);
			})();
		} else {
			(async () => {
				try {
					const res = await fetch('http://localhost:8080/authenticate', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});
				const resdata = await res.json();
					localStorage.setItem('Authorization', resdata.token);
					dispatch(addUserStatus(resdata.token))
					navigate('/')
				} catch (error) {
					console.log('Incorrect login or password ')
					
				}
			})();
		}
	};

	const userNameValidate = {
		required: 'Name is required',
		minLength: {
			value: 3,
			message: 'User name must contain at least 3 characters',
		},
		maxLength: {
			value: 30,
			message: 'User name must not contain more than 30 characters',
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
					name='username'
					label='Username'
					register={register}
					validationFunction={userNameValidate}
					errors={errors.username}
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

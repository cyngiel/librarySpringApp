import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { addUserStatus } from '../../redux-toolkit/features/user/userSlice';
import styles from './SignInSignUpView.module.scss';

export const SignInSignUpView = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isLogIn, setIsLogIn] = useState(true);
	const handleChangeOption = () => setIsLogIn((prev) => !prev);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const onSubmit = (data) => {
		if (!isLogIn) {
			(async () => {
				await fetch('http://localhost:8080/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});
			})();
			window.location.reload(false);
		} else {
			(async () => {
				try {
					const res = await fetch('http://localhost:8080/authenticate_admin', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(data),
					});
					const resdata = await res.json();
					localStorage.setItem('AuthorizationAdmin', resdata.token);
					dispatch(addUserStatus(resdata.token));
					navigate('/admin-charts');
				} catch (error) {
					console.log('Incorrect login or password ');
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

	const { userStatus } = useSelector((state) => state.user);
	if (userStatus) {
	}
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.formTitle}>Log Into Online bookstore</h2>
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
				<Button name='Log in' type='submit' />
			</form>
		</div>
	);
};

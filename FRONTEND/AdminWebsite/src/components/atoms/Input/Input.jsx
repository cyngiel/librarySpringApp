import styles from './Input.module.scss';
import PropTypes from 'prop-types';

export const Input = ({
	name,
	label,
	type = 'text',
	validationFunction = null,
	register,
	errors,
}) => {
	return (
		<div className={styles.formFild}>
			<input
				type={type}
				className={styles.input}
				name={name}
				{...register(name, { ...validationFunction })}
				placeholder=' '
				noValidate
			/>
			<label className={styles.label}>{label}</label>
			{errors && <span className={styles.errorInfo}>{errors.message}</span>}
		</div>
	);
};

Input.propTypes = {
	inputData: PropTypes.shape({
		label: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string,
		validationFunction: PropTypes.func,
		errors: PropTypes.string,
	}),
};

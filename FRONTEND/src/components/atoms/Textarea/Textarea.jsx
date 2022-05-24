import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';

export const Textarea = ({
	name,
	validationFunction = null,
	register,
	errors,
}) => {
	return (
		<div className={styles.wrapper}>
			<textarea
				className={styles.textarea}
				name={name}
				{...register(name, { ...validationFunction })}
				placeholder=' '
				noValidate
			></textarea>
			<label className={styles.label}>{name}</label>
			{errors && <span className={styles.errorInfo}>{errors.message}</span>}
		</div>
	);
};

Textarea.propTypes = {
	name: PropTypes.string,
	validationFunction: PropTypes.func,
	errors: PropTypes.string,
};

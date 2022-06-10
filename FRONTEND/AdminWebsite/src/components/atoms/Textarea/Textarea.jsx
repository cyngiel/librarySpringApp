import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';

export const Textarea = ({
	name,
	label,
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
			<label className={styles.label}>{label}</label>
			{errors && <span className={styles.errorInfo}>{errors.message}</span>}
		</div>
	);
};

Textarea.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	validationFunction: PropTypes.object,
	errors: PropTypes.object,
};

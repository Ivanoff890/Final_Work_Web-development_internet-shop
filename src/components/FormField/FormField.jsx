import styles from './FormField.module.css';

function FormField({ label, name, type = 'text', value, onChange, required = true }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.input}
      />
    </div>
  );
}

export default FormField;
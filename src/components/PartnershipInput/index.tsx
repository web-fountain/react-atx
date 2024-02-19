import Icons from '@Icons';
import styles from './styles.module.css';


interface Props {
  label: string;
  type: 'text' | 'checkbox';
  placeholder?: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
  icon?: string;
}

function PartnershipInput({
  type,
  label,
  placeholder,
  name,
  id,
  onChange,
  value,
  checked,
  icon
}: Props) {
  if (type === 'text') {
    return (
      <li className={styles['list-info-item']}>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
      </li>
    );
  } else {
    return (
      <li className={styles['list-option-item']}>
        <input
          type="checkbox"
          name={name}
          id={id}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={id}>
          <span>
            <Icons name={`${icon}`} />
            {label}
          </span>
        </label>
      </li>
    );
  }
}

export default PartnershipInput;

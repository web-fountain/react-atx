import Icon from '@Icons';
import Venue from '@Icons/Venue';
import styles from './styles.module.css';


interface Props {
  icon?: string;
  id: string;
  label: string;
  name: string;
  checked: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SponsorSelection({
  checked, icon, id, label, name, onChange
}: Props) {
  return (
    <li className={styles['sponsor-selection-item']}>
      <label htmlFor={id}>
        <Icon name={`${icon}`} />
        <span>{label}</span>
      </label>

      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
      />
    </li>
  );
}


export default SponsorSelection;

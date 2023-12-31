import { InputHTMLAttributes, ChangeEvent, FC, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './consent-checkbox.module.scss';

interface IConsentCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isValid?: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const ConsentCheckbox: FC<IConsentCheckboxProps> = ({
  id,
  name,
  isChecked = false,
  isDisabled = false,
  isValid = true,
  onChange,
}): ReactElement => (
  <label className={styles.label} htmlFor={id}>
    <input
      className={classNames(styles.input, { [styles.error]: !isValid })}
      id={id}
      type="checkbox"
      name={name}
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
    <span className={styles.checkmark} />
  </label>
);

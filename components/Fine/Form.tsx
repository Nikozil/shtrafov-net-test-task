import { NextPage } from 'next';
import { ChangeEvent, FormEvent } from 'react';
import styles from '../../styles/Form.module.scss';
import { HelperUIN, UIN } from './CheckFine';
import Helper from './Helper';

const Form: NextPage<Props> = ({
  uin,
  helperUin,
  handleSubmit,
  handleChange,
  handleHelpClick,
}) => {
  return (
    <form className={styles['search-form']} onSubmit={handleSubmit}>
      <label htmlFor="UIN" className={styles['search-form__label']}>
        Введите УИН
      </label>
      <input
        id="UIN"
        className={styles['search-form__input']}
        placeholder="Введите УИН"
        autoComplete="off"
        onChange={handleChange}
        value={uin}
      />
      <button className={styles['search-form__button']}>Найти</button>
      {helperUin ? (
        <Helper uin={helperUin} handleClick={handleHelpClick} />
      ) : null}
    </form>
  );
};

export default Form;

interface Props {
  uin: UIN;
  helperUin: HelperUIN;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleHelpClick: () => void;
}

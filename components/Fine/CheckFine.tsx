import { NextPage } from 'next';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { getFine } from '../../api/api';
import Loader from '../../assets/Loader/Loader';
import getHelpUin from '../../lib/getHelpUin';
import styles from '../../styles/CheckFine.module.scss';
import FineFound from './FineFound';
import FineNotFound from './FineNotFound';
import Form from './Form';

const CheckFine: NextPage = () => {
  const [isStartSearch, setIsStartSearch] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [fine, setFine] = useState<Fine | null | false>(null);
  const [uin, setUin] = useState<UIN>('');
  const [helperUin, setHelperUin] = useState<HelperUIN>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsStartSearch(true);
    setFine(null);

    const fetchFine = async () => {
      setIsSearching(true);
      let responce = await getFine(uin);
      !responce && setStatus('Неверные данные');
      setFine(responce);
      setIsSearching(false);
    };
    uin.length === 25 || uin.length === 20
      ? fetchFine()
      : setStatus('Количество символов должно быть 20 или 25');
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsStartSearch(false);
    setUin(value);
    const helpUin = getHelpUin(value);

    setHelperUin(helpUin);
  };
  const handleHelpClick = () => {
    if (helperUin) {
      setUin(helperUin);
      setHelperUin(null);
    }
  };

  return (
    <div className={styles.content}>
      <div>Получение информации о штрафе по УИН</div>
      <Form
        uin={uin}
        helperUin={helperUin}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleHelpClick={handleHelpClick}
      />
      {isStartSearch ? (
        isSearching ? (
          <Loader />
        ) : fine ? (
          <FineFound fine={fine} />
        ) : fine === false ? (
          <FineNotFound uin={uin} />
        ) : (
          <div className={styles.status}> {status}</div>
        )
      ) : null}
    </div>
  );
};

export default CheckFine;

export type UIN = string;
export type HelperUIN = string | null;
export interface Fine {
  amount: string | null;
  amount_to_pay: string | null;
  bill_at: string | null;
  discount_size: string | null;
  division_name: string | null;
  doc_number: string | null;
  doc_type: string | null;
  kbk: string | null;
  koap_code: string | null;
  name: string | null;
  number: string | null;
  pay_status: string | null;
  payee_bank_account: string | null;
  payee_bank_bik: string | null;
  payee_bank_name: string | null;
  payee_inn: string | null;
  payee_kpp: string | null;
  payee_oktmo: string | null;
  payee_username: string | null;
  payment_status: string | null;
  quittance: string | null;
  violation_at: string | null;
  violator_name: string | null;
}

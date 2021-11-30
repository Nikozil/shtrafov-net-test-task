import { Fine } from '../components/Fine/CheckFine';

const getFineList = (fine: Fine) => [
  { name: 'Свидетельство о регистрации', value: fine.doc_number },
  {
    name: 'Дата постановления',
    value: fine.bill_at ? fine.bill_at.slice(0, 10) : '',
  },
  {
    name: 'Нарушение',
    value: fine.koap_code,
  },
  {
    name: 'Получатель платежа',
    value: fine.division_name,
  },
  {
    name: 'ИНН',
    value: fine.payee_inn,
  },
  {
    name: 'КПП',
    value: fine.payee_kpp,
  },
  {
    name: 'Расчетный счет',
    value: fine.payee_bank_account,
  },
  {
    name: 'Банк получателя',
    value: fine.payee_bank_name,
  },
  {
    name: 'БИК',
    value: fine.payee_bank_bik,
  },
  {
    name: 'ОКТМО(ОКАТО)',
    value: fine.payee_oktmo,
  },
  {
    name: 'КБК',
    value: fine.kbk,
  },
  {
    name: 'Cумма штрафа',
    value: getParcedPrice(fine.amount),
  },
  {
    name: 'Скидка',
    value: getParcedPrice(fine.discount_size),
  },
  {
    name: 'К оплате',
    value: getParcedPrice(fine.amount_to_pay),
  },
];

export default getFineList;

const getParcedPrice = (price: string | null) =>
  price
    ? parseInt(`${price.match(/\d+$/i)}`)
      ? price
      : price.match(/^\d+/i)
    : '0';

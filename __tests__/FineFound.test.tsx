import { render, waitFor } from '@testing-library/react';
import React from 'react';
import FineFound from '../components/Fine/FineFound';

const fine = {
  amount: '500.00',
  amount_to_pay: '0.00',
  bill_at: '2019-11-11T00:00:00Z',
  discount_at: null,
  discount_size: null,
  division_code: null,
  division_name:
    'Центр видеофиксации ГИБДД ГУ МВД России по Воронежской области',
  doc_number: '3620848239',
  doc_type: 'sts',
  fssp_ip: null,
  fssp_uin: null,
  is_cached: false,
  is_revoked: null,
  kbk: '18811630020016000140',
  koap_code: '12.9ч.2',
  koap_text: null,
  location:
    'ВОРОНЕЖСКАЯ ОБЛ., РАМОНСКИЙ Р-Н, УЧАСТОК А Д М4 ДОН С 469 КМ 934 М ПО 473 КМ 595 М НАПР. ИЗ Г.ВОРОНЕЖ',
  name: 'ШТРАФ ПО АДМИНИСТРАТИВНОМУ ПРАВОНАРУШЕНИЮ ПОСТАНОВЛЕНИЕ №18810136191111001035',
  number: '18810136191111001035',
  pay_status: '3',
  payee_bank_account: '40101810500000010004',
  payee_bank_bik: '042007001',
  payee_bank_name: 'отделение Воронеж г. Воронеж',
  payee_inn: '3666026374',
  payee_kpp: '366601001',
  payee_oktmo: '20701000',
  payee_username:
    'УФК по Воронежской области (ГУ МВД России по Воронежской области, л/с 04311294650)(Центр видеофиксации ГИБДД ГУ МВД России по Воронежской области)',
  payment_status: 'paid',
  quittance: '1',
  reg_cert: null,
  violation_at: '2019-11-08T11:54:00Z',
  violator_name: 'СИНЮКОВ ИВАН СЕРГЕЕВИЧ',
};

describe('FineFound', () => {
  it('renders unchanged', async () => {
    const finecomp = render(<FineFound fine={fine} />);
    await waitFor(() => {
      expect(finecomp).toMatchSnapshot();
    });
  });
});

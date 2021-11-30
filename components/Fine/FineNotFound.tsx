import { NextPage } from 'next';
import Image from 'next/image';
import NotFoundImg from '../../assets/images/NotFound.svg';
import styles from '../../styles/FineNotFound.module.scss';
import { UIN } from './CheckFine';

const FineNotFound: NextPage<Props> = ({ uin }) => {
  return (
    <div className={styles.loader}>
      <Image
        src={NotFoundImg}
        alt="Загрузка"
        className={styles['loader__spin']}
      />
      <span className={styles['loader__name']}>Штраф {uin} не найден</span>
    </div>
  );
};

export default FineNotFound;

interface Props {
  uin: UIN;
}

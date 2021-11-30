import { NextPage } from 'next';
import Image from 'next/image';
import NotFoundImg from '../../assets/images/NotFound.svg';
import styles from '../../styles/Helper.module.scss';
import { UIN } from './CheckFine';

const Helper: NextPage<Props> = ({ uin, handleClick }) => {
  return (
    <div className={styles.helper} onClick={handleClick}>
      <span className={styles['helper__name']}>{uin}</span>
    </div>
  );
};

export default Helper;

interface Props {
  uin: UIN;
  handleClick: () => void;
}

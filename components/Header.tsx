import { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../assets/images/Logo.svg';
import styles from '../styles/Header.module.scss';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" className={styles['logo__icon']} />
        <span className={styles['logo__name']}>
          <span className={styles['logo__name_bold']}>Штрафов</span> нет
        </span>
      </div>
    </header>
  );
};

export default Header;

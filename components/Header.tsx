import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/Logo.svg';
import styles from '../styles/Header.module.scss';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <a className={styles.logo}>
          <Image src={Logo} alt="Logo" className={styles['logo__icon']} />
          <span className={styles['logo__name']}>
            <span className={styles['logo__name_bold']}>Штрафов</span> нет
          </span>
        </a>
      </Link>
    </header>
  );
};

export default Header;

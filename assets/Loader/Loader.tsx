import { NextPage } from 'next';
import Image from 'next/image';
import LoaderImg from '../../assets/images/Loader.svg';
import styles from '../../styles/Loader.module.scss';

const Loader: NextPage = () => {
  return (
    <div className={styles.loader}>
      <Image
        src={LoaderImg}
        alt="Загрузка"
        className={styles['loader__spin']}
      />
      <span className={styles['loader__name']}>Загрузка</span>
    </div>
  );
};

export default Loader;

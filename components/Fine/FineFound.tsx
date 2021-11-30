import { NextPage } from 'next';
import Image from 'next/image';
import NotFoundImg from '../../assets/images/NotFound.svg';
import getFineList from '../../lib/getFineList';
import styles from '../../styles/FineFound.module.scss';
import { Fine } from './CheckFine';
import { uid } from 'react-uid';

const FineFound: NextPage<Props> = ({ fine }) => {
  const list = getFineList(fine);
  return (
    <div className={styles.fine}>
      <span>Постановление #{fine.number}</span>
      <ul className={styles['fine-list']}>
        {list.map((item: PropsItem) => (
          <Item name={item.name} value={item.value} key={uid(item)} />
        ))}
      </ul>
    </div>
  );
};

const Item: NextPage<PropsItem> = ({ name, value }) => {
  return (
    <li className={styles['fine-list__item']}>
      <div className={styles['fine-list__name']}>{name}:</div>
      <div className={styles['fine-list__value']}>{value}</div>
    </li>
  );
};

export default FineFound;

interface Props {
  fine: Fine;
}
interface PropsItem {
  name: string;
  value: string | number | RegExpMatchArray | null;
}

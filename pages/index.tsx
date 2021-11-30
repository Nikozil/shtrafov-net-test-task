import type { NextPage } from 'next';
import Head from 'next/head';
import CheckFine from '../components/Fine/CheckFine';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Head>
          <title>Проверка штрафов по номеру и СТС</title>
          <meta
            name="description"
            content="Штрафы ГИБДД. Сервис Штрафов Нет работает более трех лет, за это время он нашел более 1 000 000 штрафов ГИБДД и помог оплатить их тысячам наших пользователей."
          />
          <meta name="viewport" content="width=device-width" />
          <meta charSet="utf-8" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        <MainLayout>
          <CheckFine />
        </MainLayout>
      </div>
    </div>
  );
};

export default Home;
//@ts-ignore
export async function getStaticProps(context) {
  console.log(context);

  return {
    props: {}, // will be passed to the page component as props
  };
}

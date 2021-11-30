import { NextPage } from 'next';
import Header from './Header';

const MainLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default MainLayout;

interface Props {
  children: React.ReactElement;
}

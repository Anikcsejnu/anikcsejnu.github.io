import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

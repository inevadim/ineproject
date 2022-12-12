import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import styles from './App.module.scss';
import { Contacts } from './components/body/contacts/Contacts';
import { Routes, Route } from 'react-router-dom';
import { PageNotFound } from './components/body/pageNotFound/PageNotFound';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

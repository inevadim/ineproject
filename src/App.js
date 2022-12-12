import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import styles from './App.module.scss';
import { Contacts } from './components/body/contacts/Contacts';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Body />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;

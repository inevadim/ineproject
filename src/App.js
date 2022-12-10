import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

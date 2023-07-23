import logo from './logo.svg';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

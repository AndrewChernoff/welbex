import logo from './logo.svg';
import s from './App.module.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;

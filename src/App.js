import s from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import redBall from './imgs/red_ball.png';
import purpleBall from './imgs/purple_ball.png';
import smallRedBall from './imgs/smallRedBall.png';

function App() {
  return (
    <div className={s.app}>
      <div className={s.app__topGradientBlock}></div>
       <div className={s.app__gradientBlock}></div> 
        <img src={purpleBall} className={s.purpleBall}/>
        <Header />
        <img src={redBall} className={s.redball}/>
        <Main />
        <img src={smallRedBall} className={s.smallRedBall}/>
        <Footer />
      </div>
  );
}

export default App;

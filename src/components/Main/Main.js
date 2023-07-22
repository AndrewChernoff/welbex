import s from './Main.module.scss';

function Main() {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img src={logo} alt='logo'/>
                <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>

            <ul className={s.header__list}>
                <li>Услуги</li>
                <li>Виджеты</li>
                <li>Интеграции</li>
                <li>Кейсы</li>
                <li>Сертификаты</li>
            </ul>

            <div className={s.header__contacts}>
                <a tel='+75555555555'>+7 555 555-55-55</a>
                <a href='#' ><img src={telegram} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                <a href='#' ><img src={viber} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                <a href='#'><img src={whatsapp} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
            </div>
        </header>
    )
}

export default Header

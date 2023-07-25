import logo from '../../imgs/logo_welbex.png'
import s from './Header.module.scss';
import telegram from '../../imgs/telegram.png'
import viber from '../../imgs/viber.png'
import whatsapp from '../../imgs/whatsapp.png'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img src={logo} alt='logo'/>
                <p>крупный интегратор CRM <br/>
                в Росcии и ещё 8 странах</p>
            </div>

            <ul className={s.header__list}>
                <li>Услуги</li>
                <li>Виджеты</li>
                <li>Интеграции</li>
                <li>Кейсы</li>
                <li>Сертификаты</li>
            </ul>

            <div className={s.header__contacts}>
                <a tel='+75555555555' className={s.header__contacts_phone}>+7 555 555-55-55</a>
                <div className={s.header__contacts_logos}>
                    <a href='#' ><img src={telegram} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                    <a href='#' ><img src={viber} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                    <a href='#'><img src={whatsapp} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                </div>
            </div>
        </header>
    )
}

export default Header

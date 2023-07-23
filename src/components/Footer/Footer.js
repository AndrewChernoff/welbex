import telegram from '../../imgs/telegram.png'
import viber from '../../imgs/viber.png'
import whatsapp from '../../imgs/whatsapp.png'
import s from './Footer.module.scss';

function Footer() {

    return (
        <footer className={s.footer}>
            <div className={s.footer__company}>
                <h4 className={s.footer__company_title}>О компании</h4>
                <ul>
                    <li> <a href='#'>Политика конфиденциальности</a></li>
                    <li> <a href='#'>Вакансии</a></li>
                </ul>
            </div>

            <div className={s.footer__menu}>
                <h4 className={s.footer__menu_title}>Меню</h4>
                <div className={s.footer__menu_list}>
                    <ul>
                        <li> <a href='#'>Расчёт стоимости</a></li>
                        <li> <a href='#'>Услуги</a></li>
                        <li> <a href='#'>Виджеты</a></li>
                        <li> <a href='#'>Интеграции</a></li>
                        <li> <a href='#'>Наши клиенты</a></li>
                    </ul>

                    <ul>
                        <li> <a href='#'>Кейсы</a></li>
                        <li> <a href='#'>Благодарственные письма</a></li>
                        <li> <a href='#'>Сертификаты</a></li>
                        <li> <a href='#'>Блог на Youtube</a></li>
                        <li> <a href='#'>Вопрос / Ответ</a></li>
                    </ul>
                </div>
            </div>

            <div className={s.footer__contacts}>
            <h4 className={s.footer__contacts_title}>Контакты</h4>
                <div className={s.footer__contacts_items}>
                    <div>
                        <a tel='+75555555555' className={s.footer__contacts_phone}>+7 555 555-55-55</a>
                    </div>

                    <div className={s.footer__contacts_links}>
                        <a href='#' ><img src={telegram} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                        <a href='#' ><img src={viber} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                        <a href='#'><img src={whatsapp} className={s.header__contacts_icon} style={{color: '#E4E5EA'}}/></a>
                    </div>

                    <address>
                        Москва, Путевой проезд 3с1, к 902
                    </address>

                    <p className={s.footer__contacts_rights}>
                    ©WELBEX 2022. Все права защищены.
                    <a href='#'>Политика конфиденциальности</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
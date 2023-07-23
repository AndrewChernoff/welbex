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
                <ul>
                    <li> <a href='#'>Расчёт стоимости</a></li>
                    <li> <a href='#'>Услуги</a></li>
                    <li> <a href='#'>Виджеты</a></li>
                    <li> <a href='#'>Интеграции</a></li>
                    <li> <a href='#'>Наши клиенты</a></li>

                    <li> <a href='#'>Кейсы</a></li>
                    <li> <a href='#'>Благодарственные письма</a></li>
                    <li> <a href='#'>Сертификаты</a></li>
                    <li> <a href='#'>Блог на Youtube</a></li>
                    <li> <a href='#'>Вопрос / Ответ</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
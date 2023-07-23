import s from './Main.module.scss';

function Main() {

    const gifts = [
        {title: 'Виджеты', subtitle: '30 готовых решений'},
        {title: 'Dashboard', subtitle: 'с показателями вашего бизнеса'},
        {title: 'Skype Аудит', subtitle: 'отдела продаж и CRM системы'},
        {title: '35 дней', subtitle: 'использования CRM'},
    ]

    return (
        <div className={s.main}>
            <div className={s.main__title}>
                <h1>Зарабатывайте <br/> 
                больше <br/>
                    <span>с WELBEX</span>
                </h1>
                <p>Развиваем и контролируем <br/>
                продажи за вас</p>
            </div>

            <div className={s.main__content}>
                <h2>Вместе с <span>бесплатной 
                <br/> консультацией</span> мы дарим:</h2>

                <div className={s.main__content_gifts}>
                    {gifts.map(el => {
                        return <div className={s.main__content_giftsItem}>
                            <h3>{el.title}</h3>
                            <p>{el.subtitle}</p>    
                        </div>
                    })}
                </div>

                <button>Получить консультацию</button>

            </div>
        </div>
    )
}

export default Main
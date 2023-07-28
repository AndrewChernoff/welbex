import s from './Main.module.scss';
import style from '../../common/styles/container.module.scss'


function Main() {

    const gifts = [
        {title: 'Виджеты', subtitle: '30 готовых решений'},
        {title: 'Dashboard', subtitle: 'с показателями вашего бизнеса'},
        {title: 'Skype Аудит', subtitle: 'отдела продаж и CRM системы'},
        {title: '35 дней', subtitle: 'использования CRM'},
    ]
    const otherGifts = [ /*gifts user will see on tablet and 531 screen width */
        {title: 'Skype аудит'},
        {title: '30 виджетов'},
        {title: 'Dashboard'},
        {title: 'Месяц аmoCRM'},
    ]

    return (
        <div className={`${s.main} ${style.container}`}>
            {/* <div className={style.container}> */}
                

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
                <div className={s.main__content_otherGifts}>
                    {otherGifts.map(el => {
                        return <div className={s.main__content_otherGifts_item}>
                            <h3>{el.title}</h3>
                        </div>
                    })}
                </div>

                <button>Получить консультацию</button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Main
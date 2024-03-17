import React, { useState } from 'react'
import styles from './Allow.module.css'
import person from '../../assets/photos/photo1.png'
import IconArrow7 from '../../assets/icons/IconArrow7'
import IconArrow8 from '../../assets/icons/IconArrow8'
import IconArrow4 from '../../assets/icons/IconArrow4'
import IconArrow9 from '../../assets/icons/IconArrow9'
import IconArrow10 from '../../assets/icons/IconArrow10'
import IconArrow11 from '../../assets/icons/IconArrow11'
import IconArrow12 from '../../assets/icons/IconArrow12'
import IconArrow3 from '../../assets/icons/IconArrow3'
import IconStroke from '../../assets/icons/IconStroke'
import { Link } from 'react-router-dom'

const Allow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShow = () => {
    setIsModalOpen(true)

  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.divBig}>
      <div className={styles.div1}>
        <img className={styles.person} src={person} />
        <div className={styles.div1s}><p>Вы покупаете у</p><h4>Trust Bear</h4></div>
      </div>
      <p className={styles.codetext}>#OS-05678541</p>
      <div className={styles.div2}>
        <p className={styles.priceP}>0</p>
        <p className={styles.valP}>UZS</p>
      </div>
      <div className={styles.div3}>
        <div className={styles.div3s}>
          <IconArrow7 />
        </div>
        <p>Начать чат</p>
      </div>
      <div className={styles.div4}>
        <div className={styles.div4s1}>
          <IconArrow8 />
        </div>
        <div className={styles.div4s2}>
          <p className={styles.statustext}>Статус</p>
          <p className={styles.prodtext}>Продавец подтвердил сделку</p>
        </div>
      </div>
      <div className={styles.div5}>
        <div className={styles.div5s1}>
          <IconArrow4 />
        </div>
        <div className={styles.div5s2}>
          <p className={styles.atttext}>Внимание</p>
          <p className={styles.sendtext}>Отправьте средства в течение 15 мин</p>
        </div>
      </div>
      <p className={styles.endtext}>Совершите платёж</p>
      <div className={styles.div6}>
        <div className={styles.div6s1}>
          <div className={styles.div6s1Icon}>
            <IconArrow9 />
          </div>
          <div className={styles.div6s1P}>
            <p className={styles.methtext}>Метод оплаты</p>
            <p className={styles.humotext}>Humo</p>
          </div>
        </div>
        <div className={styles.div6s2}>
          <div className={styles.div6s2Icon}>
            <IconArrow10 />
          </div>
          <div className={styles.div6s2P}>
            <p className={styles.cardtext}>Номер карты или телефон</p>
            <p className={styles.nomtext}>+998 675 834 123</p>
          </div>
          <div className={styles.div6s2Icon1}>
            <IconArrow11 />
          </div>
        </div>
        <div className={styles.div6s3}>
          <div className={styles.div6s3Icon}>
            <IconArrow12 />
          </div>
          <div className={styles.div6s3P}>
            <p className={styles.sumtext}>Сумма</p>
            <p className={styles.uzstext}>624 545 UZS</p>
          </div>
          <div className={styles.div6sIcon1}>
            <IconArrow11 />
          </div>
        </div>
      </div>
      <p className={styles.timetext}>Произведите оплату в течение 15:00</p>
      <div className={styles.div7}>
        <div className={styles.div7s1}>
          <IconArrow3 />
        </div>
        <div className={styles.div7s2}>
          <p className={styles.comtext}>Комментарий</p>
          <p className={styles.hellotext}>Привет</p>
        </div>
      </div>
      <div className={styles.div8}>
        <div className={styles.div8s1}>
          <IconArrow4 />
        </div>
        <p className={styles.div8P}>Только мошенники предлагают общение и проведение сделок вне P2P Маркета</p>
      </div>
      <p className={styles.fiotext}>Данные покупателя</p>
      <div className={styles.div9}>
        <div className={styles.div9s1}>
          <p>Имя покупателя</p>
          <p>Trust Bear</p>
        </div>
        <div className={styles.div9s2}>
          <p>Статистика торгов</p>
          <p>сделок: 14 · 99%</p>
        </div>
      </div>
      <Link onClick={handleShow} className={styles.linkbtn}>
        <p>Подтвердить платёж</p>
      </Link>
      {isModalOpen && (
        <div className={styles.divShow}>
          <div className={styles.showtext}>
            <p>Вы подтверждаете что перевели продавцу <br /> 624 545 UZS?</p>
          </div>
          <div className={styles.showbtn}>
            <p className={styles.canceltext}>Отмена</p>
            <div><IconStroke /></div>
<Link to={"/wait"}>
<p className={styles.okaytext}>Подтвердить</p>
</Link>
          </div>
        </div>
      )}
    </div>

  )
}

export default Allow
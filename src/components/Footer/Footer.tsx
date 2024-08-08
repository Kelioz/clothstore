import styles from './Footer.module.scss'
import Container from "../../ui/Container/Container.tsx";
import {Link} from "react-router-dom";
import cardImg from '../../app/assets/Image/Group 50.png'

export default function Footer(){
    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div className={styles.root_footerLinksWrapper}>
                <div className={styles.root_FooterLimks}>
                    <Link to={'/'}><b>Помощь</b></Link>
                    <Link to={'/'}><span>Мой аккаунт</span></Link>
                    <Link to={'/'}><span>Где мой магазин</span> </Link>
                    <Link to={'/'}><span>Доставка и Оплата</span></Link>
                    <Link to={'/'}><span>правила возврата</span></Link>
                    <Link to={'/'}><span>найти магазин</span></Link>
                    <Link to={'/'}><span>подобрать размер</span></Link>
                </div>
                <div className={styles.root_FooterLimks}>
                    <Link to={'/'}><b>Каталог</b></Link>
                    <Link to={'/'}><span>новинки</span></Link>
                    <Link to={'/'}><span>одежда</span></Link>
                    <Link to={'/'}><span>Обувь</span></Link>
                    <Link to={'/'}><span>аксессуары</span></Link>
                    <Link to={'/'}><span>Любимые бренды</span></Link>
                    <Link to={'/'}><span style={{color:'#ED1331'}}>Sale%</span></Link>
                </div>
                <div className={styles.root_FooterLimks}>
                    <Link to={'/'}><b>Компания</b></Link>
                    <Link to={'/'}><span>О нас</span></Link>
                    <Link to={'/'}><span>Философия бренда</span></Link>
                    <Link to={'/'}><span>Блог</span></Link>
                    <Link to={'/'}><span>контакты</span></Link>
                    <Link to={'/'}><span>Faq</span></Link>
                </div>
            </div>
            <div className={styles.root_cardContainer}>
                <img src={cardImg} alt=""/>
            </div>
            <div className={styles.root_copyright}>
                <span>© Copyright 2022 very neat. All Rights reserved. Условия пользования сайтом</span>
            </div>

        </Container>
    )
}

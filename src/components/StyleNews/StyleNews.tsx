import styles from './StyleNews.module.scss'
import Container from "../../ui/Container/Container.tsx";
import newsImg1 from '../../app/assets/Image/newsImg/young-adult-men-woman-glasses-black-hoodies 1.png'

export default function StyleNews() {

    return (
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <div className={styles.root_headerNews}><h2>Актуальные новости</h2></div>
            <div className={styles.root_newsContentWrapper}>
                <div>
                    <div><img src={newsImg1} alt=""/></div>
                    <div className={styles.root_newsTitle}><span>Совершайте покупки </span></div>
                    <div><span>Которые сделают мир лучше </span></div>
                </div>
                <div>
                    <div><img src={newsImg1} alt=""/></div>
                    <div className={styles.root_newsTitle}><span>Совершайте покупки </span></div>
                    <div><span>Которые сделают мир лучше </span></div>
                </div>
                <div>
                    <div><img src={newsImg1} alt=""/></div>
                    <div className={styles.root_newsTitle}><span>Совершайте покупки </span></div>
                    <div><span>Которые сделают мир лучше </span></div>
                </div>
            </div>
        </Container>
    )
}

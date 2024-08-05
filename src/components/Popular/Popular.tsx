import Container from "../../ui/Container/Container.tsx";
import Goods from "../../ui/Goods/Goods.tsx";
import goods1 from '../../app/assets/Image/goods/goods1.png'
import styles from './Popular.module.scss'

export default function Popular(){
    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div className={styles.root_popularTextHeader}>
                <h2>Популярное</h2>
                <h4>в каталог ---</h4>
            </div>
            <div className={styles.root_goodsWrapper}>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'new'} promoType={'green'}>asdjksapod</Goods>

            </div>
        </Container>
    )
}

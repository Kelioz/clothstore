import Container from "../../ui/Container/Container.tsx";
import Goods from "../../ui/Goods/Goods.tsx";
import goods1 from '../../app/assets/Image/goods/goods1.png'
import styles from './SaleGoods.module.scss'

export default function SaleGoods(){
    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div className={styles.root_popularTextHeader}>
                <h2>Скидочные Товары</h2>
                <h4>в каталог ---</h4>
            </div>
            <div className={styles.root_goodsWrapper}>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>
                <Goods brand={'stone island'} url={goods1} price={12332} promoChildren={'-20%'} promoType={'red'}>asdjksapod</Goods>

            </div>
        </Container>
    )
}

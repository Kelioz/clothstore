import styles from './Goods.module.scss'
import {Props} from './type.ts'
import cn from 'classnames'

export default function Goods(props:Props){
    const classNames = cn(styles.root,{
        [styles[`root_promoType_${props.promoType}`]]: props.promoType
    })

    return(

            <div className={styles.root__wrapper}>
                <div className={styles.root_imageBox} >
                    <div className={classNames} >
                        <span>{props.promoChildren}</span>
                    </div>
                    <img src={props.url} alt=""/>
                </div>

                <div>
                    <div className={styles.root_priceCart}>
                        <div>{props.price}p</div>
                        <div><i className="fa fa-shopping-cart" ></i></div>
                    </div>
                    <div className={styles.root_goodsText}>
                        <div>{props.children}</div>
                        <div>{props.brand}</div>
                        <div>{props.size}</div>
                    </div>
                </div>
            </div>

    )
}

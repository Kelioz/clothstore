import styles from './TypeCloth.module.scss'
import {Props} from './type.ts'
import cn from "classnames";

export default function TypeCloth({type = 'mini', ...props}:Props){
    const classNames = cn(styles.root,{
        [styles[`root_type_${type}`]] : type

    })
    return(
        <div className={classNames}>
            <div className={styles.root__wrapper}>
                <div className={styles[`root_type_${type}_image`]}>
                    <img src={props.url} alt=""/>
                </div>
                <div className={styles.root_typeClothText}>
                    <h4>{props.children}</h4>
                </div>
            </div>
        </div>
    )
}

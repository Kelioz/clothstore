import {Props} from './type.ts'
import styles from './Container.module.scss'
import cn from 'classnames'
export default function Container(props:Props){
    const rootClassNames = cn(styles.root, props.rootClassName)
    const classNames = cn(styles.root__wrapper, props.className)
    return(
        <div className={rootClassNames}>
            <div className={classNames}>{props.children}</div>
        </div>
    )
}

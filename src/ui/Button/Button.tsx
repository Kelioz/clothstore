import styles from './Button.module.scss'
import {Props} from './type.ts'
import cn from 'classnames'

export default function Button(props:Props){
    const classNames = cn(styles.root,{
        [styles[`root_type_${props.type}`]] : props.type

    })
    return <button className={classNames} onClick={props.onClick}>{props.children}</button>
}

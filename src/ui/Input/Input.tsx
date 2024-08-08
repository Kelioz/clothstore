import styles from './Input.module.scss'
import cn from 'classnames'
import {Props} from "./type.ts";

export default function Input({inputSize = 'default', ...props}:Props){
    const classNames = cn(styles.root, {
        [styles[`root_inputSize_${inputSize}`]] :inputSize
    })

    return <input className={classNames} {...props} />
}

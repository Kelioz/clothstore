import styles from './SubscribeSale.module.scss'
import cn from 'classnames'
import {Props} from './type.ts'
import Input from "../../ui/Input/Input.tsx";
import Button from "../../ui/Button/Button.tsx";
import {useContext} from "react";
import {WindowContext} from "../../context.tsx";

export default function SubscribeSale({bgColor = 'yellow'} : Props){
    const winContext = useContext(WindowContext)
    const windowWidth = winContext.windowWidth

    const classNames = cn(styles.root,{
        [styles[`root_bgColor_${bgColor}`]]:bgColor
    })


    return(
        <div className={classNames}>
            <div className={styles.root__wrapper}>
                <div>
                    <h2>Скидки до 20% на подписку</h2>
                </div>
                <div className={styles.root_inoutAndBtn}>
                    <Input id={'1'} inputSize={'large'} placeHolder={'Email'} type={'email'} />
                    <Button type={'secondary'}>Подписаться</Button>
                </div>

                {windowWidth > 700?
                <div className={styles.root_iconsConeiner}>
                    <i className="fa fa-vk" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </div>:null}

            </div>
            {windowWidth < 700?
                <div className={styles.root_iconsConeiner}>
                    <div><span>Подпишись на Street Beat в VKontakte,
Telegram, YouTobe, чтобы не пропустить
свежие новости и посты о наших магазинах,
а также о приглашениях, распрадажах и мероприятиях.</span></div>
                    <div className={styles.root_IconsCOntainer}>
                        <i className="fa fa-vk" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                </div>:null}

        </div>
    )

}

import styles from './Actual.module.scss'
import Container from "../../ui/Container/Container.tsx";
import image1  from '../../app/assets/Image/actual/actual1.png'
import image2  from '../../app/assets/Image/actual/actualBig.png'
import {useContext} from "react";
import {WindowContext} from "../../context.tsx";

interface windowWidth {
    windowsWidth: number
}
export default function Actual(){
    const winContext = useContext(WindowContext)

    const  windowWidth :number  = winContext.windowWidth
    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div>
                <h2>Актуальное</h2>
            </div>
            {windowWidth > 0 ?
            <div className={styles.root_contentWrapper}>
                <div className={styles.root_mainImageBox}>
                    <div>
                        <img src={image1}/>
                        <h3>Джинсы</h3>
                        <span>Все ещё в тренде</span>
                    </div>
                    <div>
                        <img src={image1}/>
                        <h3>Джинсы</h3>
                        <span>Все ещё в тренде</span>
                    </div>
                </div>
                <div className={styles.root_mainImageBox}>
                    <div>
                        <img src={image1}/>
                        <h3>Джинсы</h3>
                        <span>Все ещё в тренде</span>
                    </div>
                    <div>
                        <img src={image1}/>
                        <h3>Джинсы</h3>
                        <span>Все ещё в тренде</span>
                    </div>
                </div>

                <div className={styles.root_bigImageBox}>
                    <img src={image2}/>
                    <h3>Джинсы</h3>
                    <span>Все ещё в тренде</span>
                </div>
            </div>
                :null}
        </Container>
    )
}

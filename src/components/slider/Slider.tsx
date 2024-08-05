import styles from './Slider.module.scss'
import Container from "../../ui/Container/Container.tsx";
import imageSlide1 from '../../app/assets/Image/slide1.png'
import imageSlide2 from '../../app/assets/Image/slide2.png'
import imageSlide3 from '../../app/assets/Image/slide3.png'
import {WindowContext} from "../../context.tsx";
import {useContext} from "react";
import Button from "../../ui/Button/Button.tsx";

export default function Slider(){
    //const winContext = useContext(WindowContext)
    //const windowWidth = winContext.windowWidth
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>

            <div className={styles.root_imageWrapper}>
                <div><img src={imageSlide1} alt=""/></div>
                <div><img src={imageSlide3} alt=""/></div>
                <div><img src={imageSlide2} alt=""/></div>
                <div className={styles.root_promotion}>
                    <div className={styles.root_promotion_promoInfo}>
                        <h1>Spring mood</h1>
                        <h3>-20% на новую коллекцию</h3>
                        <Button type={'primary'}>В каталог --</Button>
                    </div>
                </div>
            </div>



        </Container>
    )
}

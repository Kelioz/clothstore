import Container from "../../ui/Container/Container.tsx";
import styles from './CategoryForCloth.module.scss'
import bannerImage from '../../app/assets/Image/typeForCloth/BannerCategory.png'
import TypeCloth from "../../ui/TypeCloth/TypeCloth.tsx";
import forManImage from '../../app/assets/Image/typeForCloth/ForMan.png'
import forWomenImage from '../../app/assets/Image/typeForCloth/forWomen.png'
import forKidImage from '../../app/assets/Image/typeForCloth/forKid.png'
import bootsImage from '../../app/assets/Image/typeForCloth/boots.png'
import {useContext} from "react";
import {WindowContext} from "../../context.tsx";

export default function CategoryForCloth(){
    const winContext = useContext(WindowContext)
    const windowWidth = winContext.windowWidth

    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            {windowWidth >700 ?
                <>
            <div className={styles.root_bannerCategory}>
                <img src={bannerImage}/>
            </div>
            <div className={styles.root_categoryContent}>
                <div>
                 <h2><b>Категория товаров</b></h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, aspernatur beatae commodi debitis eius eligendi eos, est fugiat maiores minima nam nemo possimus quia recusandae repellendus voluptatum? Optio, rem?</p>
                </div>
                <div className={styles.root_clothCategory}>
                    <TypeCloth url={forManImage} type={'standard'}>Мужская одежда</TypeCloth>
                    <TypeCloth url={forWomenImage} type={'standard'}>Женская одежда</TypeCloth>
                    <TypeCloth url={forKidImage} type={'standard'}>Детская одежда</TypeCloth>
                    <TypeCloth url={bootsImage} type={'standard'}>Обувь</TypeCloth>
                    <TypeCloth url={forManImage} type={'standard'}>Мужская одежда</TypeCloth>
                    <TypeCloth url={forManImage} type={'standard'}>Мужская одежда</TypeCloth>
                </div>
            </div>
                </>:

                <>
                        <div>
                            <h2><b>Категория товаров</b></h2>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, aspernatur beatae commodi debitis eius eligendi eos, est fugiat maiores minima nam nemo possimus quia recusandae repellendus voluptatum? Optio, rem?</p>
                        </div>
                    <div className={styles.root_categoryContent}>
                      <div className={styles.root_bannerCategory}>
                        <img src={bannerImage} alt={`asd`}/>
                      </div>

                        <div className={styles.root_clothCategory}>
                            <TypeCloth url={forManImage} type={'standard'}>Мужская одежда</TypeCloth>
                            <TypeCloth url={forWomenImage} type={'standard'}>Женская одежда</TypeCloth>
                            <TypeCloth url={forKidImage} type={'standard'}>Детская одежда</TypeCloth>
                            <TypeCloth url={bootsImage} type={'standard'}>Обувь</TypeCloth>
                            <TypeCloth url={forManImage} type={'standard'}>Мужская одежда</TypeCloth>
                            <TypeCloth url={forManImage} type={'standard'}>Мужская одежда</TypeCloth>
                        </div>
                    </div>
                </>

            }




        </Container>
    )
}

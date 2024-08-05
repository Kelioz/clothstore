import styles from './ClothCategory.module.scss'
import Container from "../../ui/Container/Container.tsx";
import TypeCloth from "../../ui/TypeCloth/TypeCloth.tsx";
import tshirtIMG from '../../app/assets/Image/categoryCloth/tshirt.png'
import hoodieIMG from '../../app/assets/Image/categoryCloth/hoodie.png'
import jeansIMG from '../../app/assets/Image/categoryCloth/jeans.png'
import longslivIMG from '../../app/assets/Image/categoryCloth/longsliv.png'
import pantsIMG from '../../app/assets/Image/categoryCloth/pants.png'
import sportpantsIMG from '../../app/assets/Image/categoryCloth/sport pants.png'
import sweaterIMG from '../../app/assets/Image/categoryCloth/sweater.png'
import sweatshotIMG from '../../app/assets/Image/categoryCloth/sweetshot.png'
import shirtIMG from '../../app/assets/Image/categoryCloth/shirt.png'

export default function ClothCategory(){

    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <TypeCloth url={tshirtIMG}>T-shirt</TypeCloth>
            <TypeCloth url={hoodieIMG}>Hoodie</TypeCloth>
            <TypeCloth url={jeansIMG}>Jeans</TypeCloth>
            <TypeCloth url={longslivIMG}>LongSliv</TypeCloth>
            <TypeCloth url={pantsIMG}>Pants</TypeCloth>
            <TypeCloth url={sportpantsIMG}>Sport Pants</TypeCloth>
            <TypeCloth url={sweaterIMG}>Sweater</TypeCloth>
            <TypeCloth url={sweatshotIMG}>SweatShot</TypeCloth>
            <TypeCloth url={shirtIMG}>Shirt</TypeCloth>
        </Container>
    )
}

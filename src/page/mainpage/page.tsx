import Slider from "../../components/slider/Slider.tsx";
import ClothCategory from "../../components/ClothCategory/ClothCategory.tsx";
import CategoryForCloth from "../../components/CategoryForCloth/CategoryForCloth.tsx";
import Popular from "../../components/Popular/Popular.tsx";
import Actual from "../../components/Actual/Actual.tsx";



export default function page(){
    return(
        <div>
            <Slider />
            <ClothCategory />
            <CategoryForCloth />
            <Popular />
            <Actual />
        </div>
    )
}

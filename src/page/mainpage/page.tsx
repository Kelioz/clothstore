import Slider from "../../components/slider/Slider.tsx";
import ClothCategory from "../../components/ClothCategory/ClothCategory.tsx";
import CategoryForCloth from "../../components/CategoryForCloth/CategoryForCloth.tsx";
import Popular from "../../components/Popular/Popular.tsx";
import Actual from "../../components/Actual/Actual.tsx";
import SaleGoods from "../../components/SaleGoods/SaleGoods.tsx";
import SubscribeSale from "../../components/SubscribeSale/SubscribeSale.tsx";
import StyleNews from "../../components/StyleNews/StyleNews.tsx";
import Footer from "../../components/Footer/Footer.tsx";



export default function page(){
    return(
        <div>
            <Slider />
            <ClothCategory />
            <CategoryForCloth />
            <Popular />
            <Actual />
            <SaleGoods />
            <SubscribeSale bgColor={'yellow'} />
            <StyleNews />
            <Footer />
        </div>
    )
}

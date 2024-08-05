import {ReactNode} from "react";

export type Props = {
    brand: string
    url: string
    size?: string
    price: number
    promoType?: `${Promo}`
    promoChildren?: string
    children: ReactNode
}

enum Promo{
    green = 'green',
    red = 'red'
}

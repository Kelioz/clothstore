import {ReactNode} from "react";


export type Props = {
    type?: `${Type}`
    children: ReactNode
    url: string
}

enum Type {
    mini = "mini",
    standart = "standard"
}

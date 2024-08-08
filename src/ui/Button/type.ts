import React, {ReactNode} from "react";

export type Props = Omit<
    React.HtmlHTMLAttributes<HTMLElement>&
    React.ButtonHTMLAttributes<HTMLElement>&
    React.AnchorHTMLAttributes<HTMLElement>,
    'type'
> & {
    type?: `${ButtonType}`
    children: ReactNode
    onClick?: ()=>void
}

enum ButtonType {
    primary = 'primary',
    sale = 'sale',
    secondary = 'secondary'
}

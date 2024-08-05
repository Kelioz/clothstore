import React, {ReactNode, useEffect, useState} from "react";

export const WindowContext = React.createContext(0)
type Props = {
    children: ReactNode,
    windowWidth : number

}
function Context(props:Props ){

    const[windowWidth, setWindowWidth] = useState(props.windowWidth)
    function onResize(){
        const windowWidth = window.outerWidth;
        console.log(windowWidth)
        setWindowWidth(windowWidth)

    }
    useEffect(()=>{
        onResize()
    },[])
    window.addEventListener('resize', onResize)

    const value = {
        windowWidth ,
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
    return <WindowContext.Provider value={value}>
    {props.children}
</WindowContext.Provider>
}
export default Context

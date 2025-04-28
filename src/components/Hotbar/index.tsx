import * as style from './Hotbar.styles'

interface HotbarProps {
    children: object
}

function HotBar({ children } : HotbarProps) {
    return ( 
        <style.hotbar>
            { children }
        </style.hotbar>
     );
}

export default HotBar;
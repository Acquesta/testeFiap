import * as H from './Hotbar.styles'

interface HotbarProps {
    children: object
}

function HotBar({ children } : HotbarProps) {
    return ( 
        <H.hotbar>
            { children }
        </H.hotbar>
     );
}

export default HotBar;
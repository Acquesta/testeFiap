import * as style from './Hotbar.styles'
import { HotbarProps } from './Hotbar.types';

function HotBar({ children } : HotbarProps) {
    return ( 
        <style.hotbar>
            { children }
        </style.hotbar>
     );
}

export default HotBar;
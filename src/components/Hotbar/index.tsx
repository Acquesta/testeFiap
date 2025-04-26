import logoFiap from '../../assets/svg/logo.svg'
import * as style from './Hotbar.styles'

function HotBar() {

    console.log(logoFiap);

    return ( 
        <style.hotbar>
            <img src={`${logoFiap.src}`} alt="" />
            <style.teste>
                Teste
            </style.teste>
        </style.hotbar>
     );
}

export default HotBar;
import style from './buttons.module.scss';
import { useRouter } from 'next/router';
import { routerEnum } from '../../enum/enum';

export function BtnEnviarPedido() {
    return (
        <div className={style.btnEnviarPedido}>
            <span>Enviar pedido</span>
        </div>
    )
}

export function BtnFiltrar() {
    return (
        <div className={style.btnFiltrar}>
            <span>Filtrar</span>
        </div>
    )
}

export function BtnLogar() {
    const router = useRouter();

    const clickEvent = (e) => {
        e.preventDefault();
        router.push(routerEnum.CARDAPIO);
    }

    return (
        <div className={style.btnLogar} onClick={(e) => clickEvent(e)}>
            <span>Logar</span>
        </div>
    )
}
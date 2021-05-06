import style from './buttons.module.scss';
import { useRouter } from 'next/router';
import { routerEnum } from '../../enum/enum';
import { useContext } from 'react';
import { MyGlobalContext } from '../context/GlobalContext';

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

export function BtnSalvar() {
    const { setIsVisible } = useContext(MyGlobalContext);

    const clickEvent = (e) => {
        e.preventDefault();
        setIsVisible(true);
        console.log("salvar");
    }

    return (
        <div className={style.btnSalvar} onClick={(e) => clickEvent(e)}>
            <span>Salvar</span>
        </div>
    )
}
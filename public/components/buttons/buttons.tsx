import style from './buttons.module.scss';

export function BtnEnviarPedido(){
    return(
        <div className={style.btnEnviarPedido}>
            <span>Enviar pedido</span>
        </div>
    )
}

export function BtnFiltrar(){
    return(
        <div className={style.btnFiltrar}>
            <span>Filtrar</span>
        </div>
    )
}
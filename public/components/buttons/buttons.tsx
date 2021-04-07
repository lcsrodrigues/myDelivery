import style from './buttons.module.scss';

export function BtnEnviarPedido(){
    return(
        <div className={style.btnEnviarPedido}>
            <span>Enviar pedido</span>
        </div>
    )
}
import style from './closeOrder.module.scss';
import { BtnEnviarPedido } from '../../components';

export function CloseOrder() {
    return (
        <div className={style.closeOrder}>
            <div className={style.sideLeft}>
                <div className={style.orderQuantiy}>
                    <span><strong>2</strong> PEDIDO(S) SELECIONADO(S)</span>
                </div>
                <div className={style.priceTotal}>
                    <span><strong>R$ 19,98</strong> VALOR TOTAL</span>
                </div>
            </div>
            <div className={style.sideRight}>
                <BtnEnviarPedido />
            </div>
        </div>
    )
}
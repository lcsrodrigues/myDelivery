import { useEffect, useContext } from 'react';
import style from './modal.module.scss';
import { MyGlobalContext } from '../context/GlobalContext';
import { Input } from '../input/Input';
import { BtnSalvar } from '../buttons/buttons';

export interface IModal {
    type?: string
}

export function ModalNovoProduto({ ...props }: IModal) {

    return (
        < div className={style.modalNovoProduto} >
            <div className={style.header}>
                <span>NOVO PRODUTO</span>
            </div>
            <div className={style.content}>
                <Input type={"text"} placeholder={"Nome do produto"} size={'x100'} />
                <Input type={"number"} placeholder={"Preço"} size={'x100'} />
                <Input type={"text"} placeholder={"Descrição"} size={'x100'} />
            </div>
            <div className={style.actions}>
                <BtnSalvar />
            </div>
        </div >
    )
}
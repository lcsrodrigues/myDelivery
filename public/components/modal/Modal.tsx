import style from './modal.module.scss';
import { Input } from '../input/Input';
import { useContext, useEffect, useState } from 'react';
import { MyGlobalContext } from '../context/GlobalContext';

export function ModalNovoProduto() {

    const { showModalProduto, setShowModalProduto, setIsVisible, setTypeAlert, setAlertMsg } = useContext(MyGlobalContext);

    const clickEvent = (e, typeAlert) => {
        e.preventDefault();
        setIsVisible(true);
        setTypeAlert(typeAlert);
        setAlertMsg('Salvo com sucesso');
    }

    const closeModal = () => {
        setShowModalProduto(false);
    }

    return (
        <>
            {
                showModalProduto &&
                <div className={style.modalNovoProduto} >
                    <div className={style.header}>
                        <div className={style.title}>
                            <span>NOVO PRODUTO</span>
                        </div>
                        <div className={style.close}>
                            <img src="/images/close.svg" alt="Fechar Modal" onClick={() => closeModal()} />
                        </div>
                    </div>
                    <div className={style.content}>
                        <Input type={"text"} placeholder={"Nome do produto"} size={'x100'} />
                        <Input type={"number"} placeholder={"Preço"} size={'x100'} />
                        <Input type={"text"} placeholder={"Descrição"} size={'x100'} />
                    </div>
                    <div className={style.actions}>
                        <div className={style.btnSalvar} onClick={(e) => clickEvent(e, 'success')}>
                            <span>Salvar</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
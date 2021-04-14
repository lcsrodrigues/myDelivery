import React, { useState } from 'react';
import style from './body.module.scss';
import { CardProduto, Maps, CloseOrder, Filter, Address, Alerts } from '../../components';
import { MyGlobalContext } from '../context/GlobalContext';

export function Body() {

    const [totalPrice, setTotalPrice] = useState(0);
    const [produtos, setProdutos] = useState(0);
    const [alertMsg, setAlertMsg] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    return (
        <MyGlobalContext.Provider value={{ totalPrice, setTotalPrice, produtos, setProdutos, alertMsg, setAlertMsg, isVisible, setIsVisible }}>
            <Alerts />
            <div className={style.body}>
                <div className={style.container}>
                    <section className={style.sectionFilter}>
                        <Filter />
                    </section>
                    <section className={style.sectionProduto}>
                        <CardProduto name={"Delicia de Chocolate"} image={"../../images/bolo-chocolate.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Morango"} image={"../../images/bolo-morango.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Paçoca"} image={"../../images/bolo-pacoca.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Ninho com Nutella"} image={"../../images/bolo-ninho-nutella.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Maracujá"} image={"../../images/bolo-maracuja.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Limão"} image={"../../images/bolo-limao.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Cenoura com Chocolate"} image={"../../images/bolo-cenoura-chocolate.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                        <CardProduto name={"Delicia de Coco"} image={"../../images/bolo-coco.jpg"} price={9.99} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                    </section>
                    <section className={style.sectionAddress}>
                        <Address />
                    </section>
                    <section className={style.sectionMaps}>
                        <Maps />
                    </section>
                    <section className={style.sectionCloseOrder}>
                        <CloseOrder />
                    </section>
                </div>
            </div>
        </MyGlobalContext.Provider>
    )
}
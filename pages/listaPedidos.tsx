import { Header, Footer, Wizard } from '../public/components';
import React, { useState, useEffect } from 'react';
import style from '../public/css/listaPedidos.module.scss';
import { CardProdutoAdm, Alerts } from '../public/components';
import { MyGlobalContext } from '../public/components/context/GlobalContext';
import axios from 'axios';

const ListaPedidos = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [produtos, setProdutos] = useState(0);
    const [alertMsg, setAlertMsg] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [produtoSelected, setProdutoSelected] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getAllProdutos = () => {
            axios.get('https://webapimydelivery.com.br/Cardapio')
                .then(response => {
                    setMenu(response.data);
                }).catch(err => { console.log(err) })
        }

        getAllProdutos();
    }, []);

    const limitDesc = (descricao) => {
        if (descricao.length > 170) {
            return descricao.substring(0, 170) + "...";
        }
        return descricao;
    }

    return (
        <>
            <Header />
            <MyGlobalContext.Provider value={{ totalPrice, setTotalPrice, produtos, setProdutos, alertMsg, setAlertMsg, isVisible, setIsVisible, produtoSelected, setProdutoSelected }}>
                <div className={style.body}>
                    <div className={style.container}>
                        <section className={style.sectionProduto}>
                            <div className={style.sideLeft}>
                                {
                                    menu.length &&
                                    menu.map((item) => {
                                        return (
                                            <CardProdutoAdm name={item.TITULO} price={item.PRECO} description={limitDesc(item.DESCRICAO)} produtoID={item.id} key={item.id} />
                                        )
                                    })
                                }
                            </div>
                            <div className={style.sideRight}>
                                <div className={style.resumoPedido}>
                                    <h1>Resumo Pedido</h1>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </MyGlobalContext.Provider>
            <Footer />
        </>
    )
}

export default ListaPedidos;
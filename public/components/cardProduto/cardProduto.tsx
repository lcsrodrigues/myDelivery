import React, { useState, useContext } from 'react';
import style from './cardProduto.module.scss';
import ICardProduto from './../../interface/ICardProduto';
import { MyGlobalContext } from './../../components/Context/PriceContext';

export function CardProduto({ name, image, price, description, ...props }: ICardProduto) {

    const [IsSelected, setIsSelected] = useState(false);
    const { totalPrice, setTotalPrice, produtos, setProdutos } = useContext(MyGlobalContext);

    const changeCheck = () => {
        setIsSelected(!IsSelected);
        if (!IsSelected) {
            setProdutos(produtos + 1);
            setTotalPrice(totalPrice + price);
        }else{
            setProdutos(produtos - 1);
            setTotalPrice(totalPrice - price);
        }
    }

    return (
        <div className={`${style.cardProduto} ${IsSelected ? style.selected : ''}`} onClick={() => changeCheck()}>
            <div className={style.name}>
                <span>{name}</span>
            </div>
            <div className={style.image}>
                <img src={image} />
            </div>
            <div className={style.price}>
                <span>R$ {price}</span>
            </div>
            <hr className={style.divisor} />
            <div className={style.description}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
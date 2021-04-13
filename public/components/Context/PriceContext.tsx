import { createContext, useState } from 'react';

export type GlobalContent = {
    totalPrice:number
    setTotalPrice:(p:number) => void
    produtos:number
    setProdutos:(p:number) => void
};

export const MyGlobalContext = createContext<GlobalContent>({
    totalPrice:0,
    setTotalPrice:() => {},
    produtos:0,
    setProdutos:() =>{}
});
import styles from './menu.module.scss';
import { useRouter } from 'next/router';
import { routerEnum } from '../../enum/enum';
import { MyGlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

export function Menu() {

    const router = useRouter();

    const { setShowModalProduto } = useContext(MyGlobalContext);

    const clickEvent = () => {
        setShowModalProduto(true);
    }

    return (
        <div className={styles.menu}>
            <ul>
                <li onClick={clickEvent}>Cadastrar Produto</li>
                <li onClick={() => router.push(routerEnum.CARDAPIO)}>Cardápio</li>
                <li onClick={() => router.push(routerEnum.LISTA_PEDIDOS)}>Lista de Pedidos</li>
            </ul>
        </div>
    )
}
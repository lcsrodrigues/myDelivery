import styles from './menu.module.scss';
import { useRouter } from 'next/router';
import { routerEnum } from '../../enum/enum';

export function Menu() {

    const router = useRouter();

    return (
        <div className={styles.menu}>
            <ul>
                <li onClick={() => router.push(routerEnum.CARDAPIO)}>Cardápio</li>
                <li onClick={() => router.push(routerEnum.LISTA_PEDIDOS)}>Lista de Pedidos</li>
            </ul>
        </div>
    )
}
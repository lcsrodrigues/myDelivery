import { useEffect, useContext } from 'react';
import style from './alerts.module.scss';
import { MyGlobalContext } from '../context/GlobalContext';

export interface IAlerts {
    type?: string
}

export function Alerts({ ...props }: IAlerts) {

    const { isVisible, setIsVisible, alertMsg } = useContext(MyGlobalContext);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setIsVisible(false);
            }, 3000)
        }
    }, [isVisible])

    return (
        <>
            {
                isVisible &&
                < div className={style.alerts} >
                    <span>{alertMsg}</span>
                </div >
            }
        </>
    )
}
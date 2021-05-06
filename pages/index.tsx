import styles from '../public/css/login.module.scss';
import { Header, Footer } from '../public/components'
import { BtnLogar } from '../public/components/buttons/buttons';

const Login = () => {
    return (
        <div className={styles.login}>
            <Header />
            <section>
                <div className={styles.sideLeft}>
                    <div className={styles.backgroundImage}></div>
                </div>
                <div className={styles.sideRight}>
                    <div className={styles.boxLogin}>
                        <div className={styles.boxLoginHeader}>
                            <span>LOGIN</span>
                        </div>
                        <div className={styles.boxLoginContent}>
                            <input type={"text"} placeholder={"Email"} />
                            <input type={"password"} placeholder={"Senha"} />
                        </div>
                        <div className={styles.boxLoginActions}>
                            <BtnLogar />
                            <p>
                                Não tem conta? <strong>Cadastre-se</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Login;
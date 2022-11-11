import styles from "./App.module.css";
import poweredImg from "./assets/images/powered.png";

export default function App() {
    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImg} alt={"IMC - Powered by Leonardo Dvulatk"} width={150} />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>...</div>
                <div className={styles.rightSide}>...</div>
            </div>
        </div>
    );
}

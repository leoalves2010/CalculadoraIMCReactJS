import { Levels } from "../../../../data/services/imc";
import styles from "./GridItem.module.css";
import upImage from "../../../../assets/images/up.png";
import downImage from "../../../../assets/images/down.png";

type Props = {
    level: Levels;
};

export function GridItem({ level }: Props) {
    return (
        <div className={styles.main} style={{ backgroundColor: level.color }}>
            <div className={styles.gridIcon}>
                <img
                    src={level.icon === "up" ? upImage : downImage}
                    alt={level.title}
                    width={30}
                />
            </div>
            <div className={styles.gridTitle}>{level.title}</div>
            {level.yourImc && (
                <div className={styles.yourImc}>
                    Seu IMC é de {level.yourImc} kg/m²
                </div>
            )}
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{level.imc[0]}</strong> e{" "}
                    <strong>{level.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}

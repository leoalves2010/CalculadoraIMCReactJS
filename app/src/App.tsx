import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/images/powered.png";
import leftArrowImage from "./assets/images/leftarrow.png";
import { levels, calculateImc, Levels } from "./data/services/imc";
import { GridItem } from "./ui/components/data-display/GridItem/GridItem";

export default function App() {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShowLevel, setToShowLevel] = useState<Levels | null>(null);

    function handleCalculateButton() {
        if (heightField && weightField) {
            setToShowLevel(calculateImc(heightField, weightField));
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function handlePrevButton(){
        setHeightField(0);
        setWeightField(0);
        setToShowLevel(null);
    }

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img
                        src={poweredImage}
                        alt={"IMC - Powered by Leonardo Dvulatk"}
                        width={150}
                    />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calculadora de IMC.</h1>
                    <p>
                        IMC é a sigla para Índice de Massa Corpórea, parâmetro
                        adotado pela Organização Mundial de Saúde para calcular
                        o peso ideal de cada pessoa.
                    </p>
                    <input
                        type={"number"}
                        placeholder={
                            "Digite a sua altura. Ex.: 1.5 (em metros)"
                        }
                        step={0.1}
                        value={heightField > 0 ? heightField : ""}
                        onChange={(e) =>
                            setHeightField(parseFloat(e.target.value))
                        }
                    />
                    <input
                        type={"number"}
                        placeholder={"Digite o seu peso. Ex.: 75.3 (em kg)"}
                        step={0.1}
                        value={weightField > 0 ? weightField : ""}
                        onChange={(e) =>
                            setWeightField(parseFloat(e.target.value))
                        }
                    />
                    <button onClick={handleCalculateButton}>Calcular</button>
                </div>
                <div className={styles.rightSide}>
                    {!toShowLevel && (
                        <div className={styles.grid}>
                            {levels.map((level, index) => (
                                <GridItem key={index} level={level} />
                            ))}
                        </div>
                    )}

                    {toShowLevel && (
                        <div className={styles.rightBig}>
                            <div className={styles.btnPrev} onClick={handlePrevButton}>
                                <img src={leftArrowImage} width={25}/>
                            </div>
                            <GridItem level={toShowLevel} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

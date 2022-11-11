import { useState } from "react";
import styles from "./App.module.css";
import poweredImg from "./assets/images/powered.png";
import { levels, calculateImc } from "./helpers/imc";

export default function App() {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    function handleCalculateButton() {
        if (heightField && weightField) {
            return true;
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img
                        src={poweredImg}
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
                <div className={styles.rightSide}>...</div>
            </div>
        </div>
    );
}

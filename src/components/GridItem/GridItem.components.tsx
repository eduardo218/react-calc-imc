import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level,
    key?: number
}

export const GridItem = ({item}: Props, {key}: Props) => {
    return(
        <div key={key} className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>

            {item.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC é de {item.yourImc.toFixed(2)} kg/m²
                </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}
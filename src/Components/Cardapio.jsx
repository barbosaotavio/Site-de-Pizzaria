import styles from './Cardapio.module.css'

function Cardapio() {

    return(
        
        <div className={styles.lista}>
            <h3>Escolha suas opções</h3>
            <li>
                Pizzas
            </li>
            <li>
                Pizzas docê
            </li>
            <li>
                Combos
            </li>
            
        </div>
    )
}

export default Cardapio
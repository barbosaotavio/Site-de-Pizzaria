import styles from './Bebidas.module.css'

function bebidas () {
    return (
     <div className={styles.container}>
        <ul className={styles.caixa}>
            <li>
               <li>Brahma</li>
               <li>Skol</li>
               <li>Antartica</li>
               <li>Império</li>
               <li>Estella</li>
            </li>
        </ul>
     </div>
    )
}

export default bebidas

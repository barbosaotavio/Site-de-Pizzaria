import styles from './Button.module.css'
import verificar from './verificar'

function Button() {
    return(
 <div>
    <input type='number' placeholder="verificar velocidade!"/>
        
<button onClick={verificar}>        
    Verificar
</button>
 </div>
)
}
export default Button
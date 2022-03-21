import  Link  from 'next/link';
import styles from '../styles/Navegador.module.css'


export default function Navegador(props) {
    /* Vamso encapsular o compoente */
    return(
        <div>
            <Link href={props.destino}>
                <div className={styles.navegador} style={{
                    /* aplicando de forma dinâmica a cor dos links */
                    backgroundColor: props.cor ?? 'dodgerblue'
                }}>
                    {props.texto}
                </div>
               
            </Link>
        </div>
    )
}
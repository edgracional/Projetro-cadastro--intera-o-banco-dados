import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

/* Criou uma função chamada estiloso */
export default function Estiloso() {
    
    return (
        <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estilo usando módulos</h1>
        </div>
    )
}
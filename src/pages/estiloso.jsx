import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'


/* Criou uma função chamada estiloso */
export default function Estiloso() {
    
    return (
        <Layout titulo="Exemplo de css Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando módulos</h1>
            </div>
        </Layout>
       
    )
}
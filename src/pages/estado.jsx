import { useState } from 'react';
import Layout from './../components/Layout';

export default function Estado() {
    
    const [numero, setNumero] = useState(0) //esta dentro de um grupo de funções chamdas de React Hooks

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}

/* O array pode ser feito desta maneira também
    
    let numero = state[0]
    let alterarNumero = state[1]

    function incrementar() {
        alterarNumero(numero + 1)
    }
*/
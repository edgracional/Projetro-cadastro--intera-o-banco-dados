import Cabecalho from "../components/Cabecalho"
import Layout from './../components/Layout';

export default function App() {
    return (
        /* Quando você quizer colocar mais de um elemento ao invés de div coloca vazio <> </> */
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprende Next na prática" />
        </Layout>
        
    )
}
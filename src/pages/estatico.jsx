import Layout from './../components/Layout';

/* utilizando o método getStaticProps você irá tratar um número 
qualquer como propriedade  gerada apenas uma vez*/
/* criou esse método */
export function getStaticProps() {
    /* retornou um obejto e dentro desse objeto terá um atributo props */
    return {
        props: {
            numero: Math.random()
        }
    }
}
/* Gera o número apenas uam vez */
                                /* você poderá acessar as propriedades (props) */
export default function Estatico(props){
    return(
        <Layout titulo="Conteúdo Estático">
            {/* acessar props.numero */}
            <div>{props.numero}</div>
        </Layout>
    )
}



/* Gerar um valor aleatório
export default function Estatico(props){
    return(
        <Layout titulo="Conteúdo Estático">
            <div>{Math.random()}</div>
        </Layout>
    )
}
*/
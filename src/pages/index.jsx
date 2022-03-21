import Navegador from "../components/Navegador"


export default function Inicio() {
    return (
        /* uma forma de trabalhar estilo interno styles -
        primeiro par de chaves vc acessara javaScript o segundo interno 
        será a representação de um objeto*/
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
           
          
        }}>
           <Navegador texto="Estiloso"  destino="/estiloso" />
           <Navegador texto="App"  destino="/app" cor="#9400d3"/>
           <Navegador texto="jsx"  destino="/jsx" cor="#dc143c" />
           <Navegador texto="Navegação #01"  destino="/navegacao/" cor="green" />
           <Navegador texto="Navegação #02"  destino="/cliente/sp-2/123" cor="blue" />
           <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
           <Navegador texto="Integração com API #01" destino="/integracao_1" cor="yellow" />
        </div>
    )

}
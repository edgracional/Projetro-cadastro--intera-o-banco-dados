export default function Jsx() {
    const titulo = <h1>Jsx é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitulo()}

            <p>
                {/* {{dsdad}} quer dizer um objeto duas chaves*/}
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </div>
    )
}


/*Para você acessar o jvascript dentro de um jsx 
terá que acessar dentro de {}  

return (
        <div>
            <h1>Jsx é um conceito Central</h1>
            {a* b}
        </div>
    ) */
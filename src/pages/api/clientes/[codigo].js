
export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).jason({
        id: req.codigo,
        nome:`Maria ${codigo}`,
        email: `raqueli69${codigo}@sexmail.com`
    })
}
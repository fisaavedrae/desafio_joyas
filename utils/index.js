const prepararHATEOAS = (joyas) => {
    let totalStock = 0;
    const results = joyas.map((m) => {
        totalStock += m.stock
        return {
            name: m.nombre,
            href: `/joyas/joya/${m.id}`,
        }
    }).slice(0, 4)
    const totalJoyas = joyas.length
    const HATEOAS = {
        totalJoyas,
        totalStock,
        results
    }
    return HATEOAS
}

module.exports = { prepararHATEOAS }
const pool = require("./config");

const readJoyas = async (id, titulo, img, descripcion, likes) => {
    try {
        const { rows } = await pool.query("SELECT * FROM inventario")
        console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
    }
}

const readJoyasFiltros = async (id, titulo, img, descripcion, likes) => {
    try {
        const { rows } = await pool.query("SELECT * FROM inventario")
        console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    readJoyas,
    readJoyasFiltros
}

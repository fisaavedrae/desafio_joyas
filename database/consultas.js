const pool = require("./config");
const format = require('pg-format');

const readJoyas = async (limits, page, order_by) => {
    //console.log(limits, page, order_by)
    const [campo, direccion] = order_by.split('_')
    const offset = (page - 1) * limits
    const formattedQuery = format('SELECT id, nombre, categoria, metal, precio, stock FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset);
    //console.log(formattedQuery)
    try {
        const { rows } = await pool.query(formattedQuery)
        //console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
    }
}

const readJoyasFiltros = async (precio_max, precio_min, categoria, metal) => {
    //console.log(precio_max, precio_min, categoria, metal)
    const formattedQuery = format(`SELECT id, nombre, categoria, metal,precio, stock FROM inventario WHERE metal = '%s' AND categoria = '%s' AND precio <= %s AND precio >= %s`, metal, categoria, precio_max, precio_min);
    //console.log(formattedQuery)
    try {
        const { rows } = await pool.query(formattedQuery)
        //console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
    }

}


const validaExisteCampo = async (campo) => {
    //console.log(campo)
    try {
        const formattedQuery = format(`SELECT column_name 
                         FROM information_schema.columns 
                         WHERE table_schema='public' 
                           and table_name='inventario' 
                           and column_name='%s'`, campo)
        const { rows } = await pool.query(formattedQuery)
        return rows

    }
    catch (error) {
        console.log(error)
    }
}

const validaExisteCategoria = async (categoria) => {
    //console.log(limits, page, order_by)

    const formattedQuery = format(`SELECT categoria FROM inventario WHERE categoria = '%s'  limit 1`, categoria);
    //console.log(formattedQuery)
    try {
        const { rows } = await pool.query(formattedQuery)
        //console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
    }
}
const validaExisteMetal = async (metal) => {
    //console.log(limits, page, order_by)

    const formattedQuery = format(`SELECT metal FROM inventario WHERE metal = '%s'  limit 1`, metal);
    //console.log(formattedQuery)
    try {
        const { rows } = await pool.query(formattedQuery)
        //console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    readJoyas,
    readJoyasFiltros,
    validaExisteCampo,
    validaExisteCategoria,
    validaExisteMetal
}

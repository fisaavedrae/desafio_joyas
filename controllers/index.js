const { readJoyas, readJoyasFiltros } = require("../database/consultas");
const { prepararHATEOAS } = require("../utils/index")

const readGetController = async (req, res, next) => {
    const { data } = req;
    const { limits, page, order_by, dataValid } = data;
    try {
        if (dataValid) {
            const post_query = await readJoyas(limits, page, order_by);

            if (post_query != "") {
                const HATEOAS = await prepararHATEOAS(post_query)
                //console.log(HATEOAS)
                res.json(HATEOAS);
            }
            else {
                res.status(200).json({
                    status: 'Success',
                    message: 'No existe información de Joyas que cumplan los criterios de búsqueda',
                    posts: post_query,
                });
            }
        }

    } catch (error) {
        next(error);
    }
};

const readGetFiltrosController = async (req, res, next) => {
    const { data } = req;
    const { precio_max, precio_min, categoria, metal, dataValid } = data;
    //console.log(precio_max, precio_min, categoria, metal, dataValid)
    try {
        if (dataValid) {
            const post_query = await readJoyasFiltros(precio_max, precio_min, categoria, metal);

            if (post_query != "") {
                res.status(200).json(post_query);
            }
            else {
                res.status(200).json({
                    status: 'Success',
                    message: 'No existe información de Joyas que cumplan los criterios de búsqueda',
                    posts: post_query,
                });
            }
        }

    } catch (error) {
        next(error);
    }
};



module.exports = {
    readGetController, readGetFiltrosController
}
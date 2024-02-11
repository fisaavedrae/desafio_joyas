const { validaExisteCampo, validaExisteCategoria, validaExisteMetal } = require("../database/consultas");

const readGetMiddleware = async (req, res, next) => {
    const { limits, page, order_by } = req.query
    //console.log(limits, page, order_by)

    // Aca debe ir el informe
    const parametros = req.params
    const querys = req.query
    const url = req.url
    console.log("---\n")
    console.log(` Hoy ${new Date()} Se ha recibido una consulta en la ruta ${url} con los parámetros: `, parametros, ` y con los querys: `, querys)
    console.log("\n---\n")
    //

    try {


        if (limits == "" || page == "" || order_by == "" || limits == undefined || page == undefined || order_by == undefined) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Debe ingresar todos los parametros',
            });
        }
        else {
            if (page <= 0 || !Number(page)) {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: 'La pagina debe numerico y ser mayor a 0',
                });
            }
            else {
                if (limits <= 0 || !Number(limits)) {
                    return res.status(400).json({
                        status: 'Bad Request',
                        message: 'El limite debe ser numerico y mayor a 0',
                    });
                }
                else {
                    const [campo, direccion] = order_by.split('_')
                    //console.log(campo, "direccion", direccion)
                    const post_query = await validaExisteCampo(campo);
                    //console.log("respuesta si existe campo", post_query)
                    if (post_query == "") {
                        return res.status(400).json({
                            status: 'Bad Request',
                            message: 'El campo de ordenamiento no existe',
                        });
                    }
                    else {
                        if (direccion != "ASC" && direccion != "DESC") {
                            return res.status(400).json({
                                status: 'Bad Request',
                                message: 'El orden debe ser ASC o DESC',
                            });
                        }
                        else {
                            req.data = {
                                limits: limits,
                                page: page,
                                order_by: order_by,
                                dataValid: true,
                            };
                            next();
                        }
                    }
                    /*
                                        
                                        */
                }
            }

        }

    } catch (error) {
        next(error);
    }
};

const readGetFiltrosMiddleware = async (req, res, next) => {
    const { precio_max, precio_min, categoria, metal } = req.query;

    // console.log(precio_max, precio_min, categoria, metal)

    // Aca debe ir el informe
    const parametros = req.params
    const querys = req.query
    const url = req.url
    console.log("---\n")
    console.log(` Hoy ${new Date()} Se ha recibido una consulta en la ruta ${url} con los parámetros: `, parametros, ` y con los querys: `, querys)
    console.log("\n---\n")
    //

    try {
        //console.log(precio_max, precio_min, categoria, metal);
        if (precio_max == "" || precio_min == "" || categoria == "" || metal == "" || precio_max == undefined || precio_min == undefined || categoria == undefined || metal == undefined) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Debe ingresar todos los parametros',
            });
        }
        else {
            if ((precio_max <= 0 || isNaN(precio_max))) {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: 'El valore de precio_max debe ser numerico y mayor a 0',
                });
            }
            else {
                if (precio_min <= 0 || isNaN(precio_min)) {
                    return res.status(400).json({
                        status: 'Bad Request',
                        message: 'El valore de precio_min debe ser numerico y mayor a 0',
                    });
                }
                else {
                    //validar si categoria existe
                    const query_categoria = await validaExisteCategoria(categoria);
                    //console.log("respuesta si existe categoria", query_categoria)
                    if (query_categoria == "") {
                        return res.status(400).json({
                            status: 'Bad Request',
                            message: 'La categoria no existe',
                        });
                    }
                    else {
                        //validar si metal existe
                        const query_metal = await validaExisteMetal(metal);
                        if (query_metal == "") {
                            return res.status(400).json({
                                status: 'Bad Request',
                                message: 'El metal no existe',
                            });
                        }
                        else {
                            //.log("entro al else");

                            req.data = {
                                precio_max: precio_max,
                                precio_min: precio_min,
                                categoria: categoria,
                                metal: metal,
                                dataValid: true,
                            };
                            next();
                        }
                    }

                }
            }

        }
        /*
                if (limits == "" || page == "" || order_by == "") {
                    return res.status(400).json({
                        status: 'Bad Request',
                        message: 'Debe ingresar todos los datos',
                    });
                }
                else {
                    if (page <= 0) {
                        return res.status(400).json({
                            status: 'Bad Request',
                            message: 'La pagina debe ser mayor a 0',
                        });
                    }
                    else {
                        if (limits <= 0) {
                            return res.status(400).json({
                                status: 'Bad Request',
                                message: 'El limite debe ser mayor a 0',
                            });
                        }
                        else {
                            if (order_by != "stock_ASC" || order_by != "stock_DESC") {
                                return res.status(400).json({
                                    status: 'Bad Request',
                                    message: 'El orden debe ser ASC o DESC',
                                });
                            }
                            else {
                                req.data = {
                                    limits: limits,
                                    page: page,
                                    order_by: order_by,
                                };
                                next();
                            }
                        }
                    }
        
                }
                */
    } catch (error) {
        next(error);
    }
};

module.exports = {
    readGetMiddleware, readGetFiltrosMiddleware
};

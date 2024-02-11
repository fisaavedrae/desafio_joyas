

const readGetMiddleware = async (req, res, next) => {
    const { limits, page, order_by } = req.query
    console.log(limits, page, order_by)

    // Aca debe ir el informe

    //

    try {


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
                    if (order_by != "stock_ASC" && order_by != "stock_DESC") {
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
            }

        }

    } catch (error) {
        next(error);
    }
};

const readGetFiltrosMiddleware = async (req, res, next) => {
    const { limits, page, order_by } = req.params
    console.log(limits, page, order_by)

    // Aca debe ir el informe

    //

    try {

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
    } catch (error) {
        next(error);
    }
};

module.exports = {
    readGetMiddleware, readGetFiltrosMiddleware
};

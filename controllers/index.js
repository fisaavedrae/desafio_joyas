const { readJoyas, readJoyasFiltros } = require("../database/consultas");

const readGetController = async (req, res, next) => {
    const { data } = req;
    const { dataValid } = data;
    try {
        if (dataValid) {
            const post_query = await readJoyas();

            if (post_query != "") {
                res.status(200).json({
                    totaljoyas: 'Success',
                    message: 'Joyas leidas',
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
    const { dataValid } = data;
    try {
        if (dataValid) {
            const post_query = await readJoyasFiltros();

            if (post_query != "") {

                res.status(200).json({
                    status: 'Success',
                    message: 'Joyas leidas',
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
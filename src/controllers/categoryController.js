const categoryService = require("../services/categoryService");

const create = async (req, res) => {
    try {

        const category = await categoryService.create({
            nombre: req.body.nombre,
            user: req.user.id
        });

        res.status(201).json(category);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};

const getAll = async (req, res) => {

    const categories = await categoryService.getAll(req.user.id);

    res.json(categories);

};

const update = async (req, res) => {

    const category = await categoryService.update(
        req.params.id,
        req.body
    );

    res.json(category);

};

const remove = async (req, res) => {

    await categoryService.remove(req.params.id);

    res.json({
        message: "Categoría eliminada"
    });

};

module.exports = {
    create,
    getAll,
    update,
    remove
};
const categoryRepository = require("../repositories/categoryRepository");

const create = async (data) => {
    return await categoryRepository.createCategory(data);
};

const getAll = async (userId) => {
    return await categoryRepository.getCategories(userId);
};

const update = async (id, data) => {
    return await categoryRepository.updateCategory(id, data);
};

const remove = async (id) => {
    return await categoryRepository.deleteCategory(id);
};

module.exports = {
    create,
    getAll,
    update,
    remove
};
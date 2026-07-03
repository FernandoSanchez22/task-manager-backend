const taskRepository=require("../repositories/taskRepository");

const create=(data)=>
taskRepository.createTask(data);

const getAll=(userId)=>
taskRepository.getTasks(userId);

const update=(id,data)=>
taskRepository.updateTask(id,data);

const remove=(id)=>
taskRepository.deleteTask(id);

module.exports={
    create,
    getAll,
    update,
    remove
};
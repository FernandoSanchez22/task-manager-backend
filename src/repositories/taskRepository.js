const Task=require("../models/task");

const createTask=(data)=>Task.create(data);

const getTasks=(userId)=>Task.find({user:userId}).populate("categoria");

const updateTask=(id,data)=>
Task.findByIdAndUpdate(id,data,{new:true});

const deleteTask=(id)=>
Task.findByIdAndDelete(id);

module.exports={
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
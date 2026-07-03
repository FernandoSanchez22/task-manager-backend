const taskService=require("../services/taskService");

const create=async(req,res)=>{

    try{

        const task=await taskService.create({

            titulo:req.body.titulo,

            descripcion:req.body.descripcion,

            categoria:req.body.categoria,

            user:req.user.id

        });

        res.status(201).json(task);

    }catch(error){

        res.status(400).json({

            message:error.message

        });

    }

};

const getAll=async(req,res)=>{

    const tasks=await taskService.getAll(req.user.id);

    res.json(tasks);

};

const update=async(req,res)=>{

    const task=await taskService.update(

        req.params.id,

        req.body

    );

    res.json(task);

};

const remove=async(req,res)=>{

    await taskService.remove(req.params.id);

    res.json({

        message:"Tarea eliminada"

    });

};

module.exports={

    create,

    getAll,

    update,

    remove

};
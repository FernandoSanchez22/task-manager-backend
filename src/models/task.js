const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
{
    titulo:{
        type:String,
        required:true
    },

    descripcion:{
        type:String
    },

    estado:{
        type:String,
        enum:["Pendiente","En progreso","Finalizada"],
        default:"Pendiente"
    },

    categoria:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
}
);

module.exports=mongoose.model("Task",taskSchema);
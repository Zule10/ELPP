var mongoose=require("mongoose");//llamo la libreria de mongoose
//var searchable = require('mongoose-searchable');
var Schema=mongoose.Schema;//guardo los Schemas de mongoose en una variable

mongoose.connect("mongodb://localhost/phishing");//conexion a mongo

//creo el schema que dira como son los documentos de mongo
var user_schema= new Schema({
name:{type:String ,required:[true,"name required"]},//le digo el tipo y que se necesita sino  se ingresa name manda error
lastname:{type:String ,required:[true,"lastname required"]},
address:{type:String,required:[true,"address required"]},
identification:{type:Number,required:[true,"identification required"],unique:[true,"Identification already exists"],min:[1000000,"Invalid identification"]}//se le puede poner minimo
//unique para que sea unica

});



var User=mongoose.model("User",user_schema);//Creacion del modelo se llama User

module.exports.User=User; // digo que voy a exportar

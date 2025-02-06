import mongoose from "mongoose";

mongoose.connect ("mongodb+srv://JuanmaFalero:Juanma1986@juanmafalero.b2bfb.mongodb.net/")
    .then(() => console.log("conexion exitosa"))
    .catch((error) => console.log("error", error))
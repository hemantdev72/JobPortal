import mongoose from "mongoose";

const dbConnect=async ()=>{
    try{
        const connect=mongoose.connect(process.env.MONGO);
        console.log("db connected");
    } catch(err){
        console.log(err);
    }
}

export default dbConnect;
import  jwt  from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

 const createToken = async  (data)=>{
     console.log("process.env.TOKKEN_SECRET",process.env.TOKKEN_SECRET,
         JSON.stringify(data));
     return  jwt.sign(JSON.stringify(data), process.env.TOKKEN_SECRET);
 }

 const verifyToken = async  (token)=>{
     console.log("process.env.TOKKEN_SECRET",process.env.TOKKEN_SECRET);
     return  jwt.decode(token,{complete: true});
 }

 export  default {
     createToken,
     verifyToken

 };
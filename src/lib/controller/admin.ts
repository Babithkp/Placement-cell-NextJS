"use server"

import { connectDB } from "../dbConnect";
import Admin from "../models/admin";

export const addAdmin = async()=>{
    try{
        await connectDB()
        const isFound = await Admin.findOne({email: "admin@gmail.com"})
        if(isFound !== null){
            return
        }else{
            const admin = new Admin({
                email: "admin@gmail.com",
                password: "admin@123",
                type: "admin",
            })
            admin.save()
            if(admin){
                console.log("Admin Created");
                
            }
        }

    }catch(error){
        console.log(error);
        
    }
}

export const adminLogin = async(email:string,password:string)=>{
    try{
        const admin = await Admin.findOne({email: email, password: password})
        if(admin){
            const filter = JSON.stringify(admin)
            return filter
        }
        return false
    }catch(error){
        console.log(error);
        
    }
}
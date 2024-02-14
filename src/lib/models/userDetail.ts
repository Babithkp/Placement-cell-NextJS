import mongoose from "mongoose";

const UserDetails = new mongoose.Schema({
     name: {
        type: String,
        required: true,
        minlength: [3, "name cannot be less than 3 characters"]
     },
     gender:{
        type: String,
        enum: ["male", "female"],
        required: true
     },
     phone: {
        
     }
})
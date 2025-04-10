import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import {generateToken} from "../lib/utils.js"

export const signup = async (req,res)=>{
    try{
        const {email, password, fullName} = req.body
        if (!email || ! password || !fullName){
            res.status(400).json({message:"All fields are required."})
        }
        if (password.length < 6){
            res.status(400).json({message:"Password must be at least 6 characters."})
        }

        const alreadyExists = await User.findOne({email})
        if (alreadyExists){
            res.status(400).json({message:"Email already exists."})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        })
        if(!newUser){
            res.status(400).json({message:"Invalid user data."})
        }
        generateToken(newUser._id, res)
        await newUser.save()
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic
        })

    }catch(error){
        console.log("Error in signup controller.",error.message)
        res.status(500).json({message:"Internal server error."})
    }
}

export const login = (req,res)=>{
    
}

export const logout = (req,res)=>{
    
}

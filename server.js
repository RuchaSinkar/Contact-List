const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const connectDB=require("./db");
const Contact=require("./models/Contact");
const app=express();
const PORT=7000;
//connect to mongodb
connectDB();
//middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

//routes
//add a contact
app.post("/add/:name/:phone/:email",async (req,res)=>{
    try{
        const name=req.params.name;
        const phone=req.params.phone;
        const email=req.params.email;
        const result=await Contact.find({name:name});
        if(result.length>0){
            return res.status(404).json({error:"Contact already present"});
        }
        //save to mongodb
        await Contact.create({
            name:name,
            phone:phone,
            email:email
        });
        return res.status(201).json({message:"Contact added successfully"});
    }
    catch(error){
        return res.status(500).json({error:"Failed to add contact"});
    }
});
//get all contacts
app.get("/list",async (req,res)=>{
    try{
        const contacts=await Contact.find().sort({name:1});//name:1 means ascending by name
        res.json(contacts);
    }
    catch(error){
        return res.status(500).json({error:"Items not found"});
    }
})

//find name
app.get("/find/:name",async(req,res)=>{
    try{
        const name=req.params.name;
        const contact= await Contact.findOne({name:req.params.name});
        return res.status(200).json(contact);
    }
    catch(error){
        return res.status(500).json({error:"Contact not found"});
    }
    
})
app.delete("/delete/:name",async (req,res)=>{
    try{
        const name=req.params.name;
        const result=await Contact.deleteOne({name:req.params.name});
        if(result.deletedCount>0){
            return res.status(200).json({message:"Contact deleted"});
        }
        else{
            return res.status(500).json({error:"Contact not found"});
        }
        
    }
    catch(error){
        return res.status(500).json({error:"Contact not found"});
    }
})
//update
app.put("/update/:name/:newPhone/:newEmail",async (req,res)=>{
    try{
        const name=req.params.name;
        const newPhone=req.params.newPhone;
        const newEmail=req.params.newEmail;
        const result=await Contact.updateOne(
            {name:name},//filter
            {phone:newPhone,email:newEmail}//update
        )
        if(result.modifiedCount>0){
            return res.status(201).json({message:"Contact updated successfully"});
        }
        else{
            return res.status(500).json({error:"Contact not found"});
        }
    }
    catch(error){
        return res.status(500).json({error:"Contact not found"});
    }
})
//start server
app.listen(PORT,()=>{
    console.log("Server started");
})
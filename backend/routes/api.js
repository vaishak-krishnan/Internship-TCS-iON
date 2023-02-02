const express = require('express');
const router = express.Router();
const signupdata = require('../models/signup');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifytoken');
const contentDATA = require('../models/content');
const categoryDATA = require('../models/category');

//signup
router.post('/signup',async(req,res)=>{
    console.log("test",req.body)
    try{
 let item ={
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.body.password,
    status: req.body.status

}    

let user = await signupdata.findOne({ email: req.body.email })
if (!user) {
    const newuser = new signupdata(item)
    const saveuser = await newuser.save()
    res.send(saveuser);
    console.log(saveuser);
}
console.log("test",req.body);
 return res.json({message: "Email already registered" });
    }catch(error){
        console.log(error)

    }

})

// get signup list
router.get('/listsignup', async (req, res) => {

    try{
        const contents = await (await signupdata.find({'status':null}).sort({'createdAt':-1}));
        res.status(200).send(contents);
    }catch(error) {
        res.status(400).send(error.message);
    }

})
// get list of admin 
router.get('/listsignupadmin', async (req, res) => {

    try{
        const contents = await (await signupdata.find({'status':'admin'}).sort({'createdAt':-1}));
        res.status(200).send(contents);
    }catch(error) {
        res.status(400).send(error.message);
    }

})




//login
router.post('/login',async(req,res)=>{
    console.log("test",req.body);

   
        try {
	let user = await signupdata.findOne({ email: req.body.email, password: req.body.password })
	        let payload = {'email':req.body.email,'password':req.body.password}
	        let token = jwt.sign(payload,'secretkey')
	
	        if (!user) {
	            
	            return res.json({ message: "Invalid Credentials" });
	
	
	        }
	        console.log("test",req.body);
	        res.send({ 'token': token, 'email': user.email, 'password': user.password });
	
	
} catch (error) {
    console.log(error)

}
    
})

// full list read
router.get('/listcontent', async (req, res) => {

    try{
        const contents = await contentDATA.find().sort({'createdAt':-1});
        res.status(200).send(contents);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// add
router.post('/addcontent', async(req,res)=>{
    console.log(req.body)
    try {
        const contents = new contentDATA({
            title:req.body.title,
            creator:req.body.creator,
            category:req.body.category,
            content:req.body.content
        });
        let savedData= await contents.save();
        res.status(200).send(savedData);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// get single data

router.get('/singlecontent/:id', async (req, res) => {

    try{
        let id = req.params.id;
        const files = await contentDATA.findById(id);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// update

router.put('/editcontent/:id', async(req,res)=>{
    try {
        let id=req.params.id
        let item ={
            title:req.body.title,
            creator:req.body.creator,
            category:req.body.category,
            content:req.body.content
        };
        let update={
            $set:item
        }
        const updateContent=await contentDATA.findByIdAndUpdate({'_id':id},update)
        res.status(200).send(updateContent)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// delete

router.delete('/deletecontent/:id',async (req,res)=>{
    try {
        let id=req.params.id
        const deleteContent= await contentDATA.findByIdAndDelete(id)
        res.send(deleteContent)
    } catch (error) {
        console.log(error)
        
    } 
})
// status changed to admin
router.put('/statusupdate', async (req, res) => {
    let id = req.body._id
    let item = {  //to fetch and save data from front end in server
        status: req.body.status,

    }
    let updateData = { $set: item }

    await signupdata.findOneAndUpdate({ _id: id }, updateData)

    res.json();
})

//status changed to user
router.put('/statusupdateUser', async (req, res) => {
    let id = req.body._id
    let item = {  //to fetch and save data from front end in server
        status: req.body.status,

    }
    let updateData = { $set: item }

    await signupdata.findOneAndUpdate({ _id: id }, updateData)

    res.json();
})

// category list all
router.get('/listcategory', async (req, res) => {

    try{
        const categorys = await categoryDATA.find().sort({'date':-1});
        res.status(200).send(categorys);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// add category
router.post('/addcategory', async(req,res)=>{
    console.log(req.body)
    try {
        const contents = new categoryDATA({
            name:req.body.name,
            description:req.body.description,
            date:req.body.date
        });
        let savedData= await contents.save();
        res.status(200).send(savedData);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// get single list
router.get('/singlecategory/:id', async (req, res) => {

    try{
        let id = req.params.id;
        const files = await categoryDATA.findById(id);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// update category

router.put('/editcategory/:id', async(req,res)=>{
    try {
        let id=req.params.id
        let item ={
            name:req.body.name,
            description:req.body.description,
            date:req.body.date
        };
        let update={
            $set:item
        }
        const updateCategory=await categoryDATA.findByIdAndUpdate({'_id':id},update)
        res.status(200).send(updateCategory)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// delete category

router.delete('/deletecategory/:id',async (req,res)=>{
    try {
        let id=req.params.id
        const deleteCategory= await categoryDATA.findByIdAndDelete(id)
        res.send(deleteCategory)
    } catch (error) {
        console.log(error)
        
    } 
})



module.exports = router;
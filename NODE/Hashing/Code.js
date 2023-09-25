// Hashing the Password 

// route.post("/register",async(req,res)=>{
//     const{email,password,age,name}=req.body
//     try {
//         bcrypt.hash(password,4,async(err,hash)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 const user= new UserModel({email,age,name,password:hash})
//                 await user.save()
//                 res.send("user registerd")
//             }
//         })
       
//     } catch (error) {
//         res.send(error)
//     }
// })




// Comparing the Hashed Password

// route.post("/login",async(req,res)=>{
//     const{email,password}=req.body
// try {
//     //returns the first document that matches this email
//     const user= await UserModel.findOne({email})

// if(user){
//     bcrypt.compare(password,user.password,(err,result)=>{
//         if(result){
//             const token=jwt.sign({"authorId":user._id,"authorname":user.name},"harshi")
//             res.send({"msg":"login successfuly","token":token})
//         }
//         else{
//             res.send("wrong data")
//         }
//     })
   
// }
// else{
// res.send("Wrong credentials")
// }
// } catch (error) {
//     res.send(error)
// }

// })
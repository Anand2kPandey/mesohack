const app=require("express")();
var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let users=[];





app.post("/create",urlencodedParser,(req,res)=>{
    console.log("User Created Successfully");
    // console.log(req.body);`
    users.push(req.body);
    console.log(users);

})
app.post("/authen",urlencodedParser,(req,res)=>{
    console.log("POST request initiated....");
    let obj=req.body;
    console.log("object is "+JSON.stringify(obj));
    let found=false;
    users.forEach((data)=>{
        if(data.username==obj.username && data.password==obj.password){
                found=true;
                console.log("Login Success");
                res.send({message:true});
        }
    })
    if(found==false){
        console.log("Login failed");
        res.send({message:false});
    }

})


app.listen(3000,(req,res)=>{
    console.log("Server Running.....");
});
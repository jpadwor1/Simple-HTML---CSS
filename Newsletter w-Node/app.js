const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const apiKey = '{yourKey}';
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/signup.html");
});

app.post("/", (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.inputEmail;

    let data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merged_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    let jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/89855e8f06"
    const options = {
    method: "POST",
    auth: "johnpad:{apiKey}"
}
    const request = https.request(url, options, (response)=>{

        if(response.statusCode === 200){
            res.sendFile(__dirname +"/success.html");
        }else{
             res.sendFile(__dirname +"/failure.html");
         }
        response.on("data", (data)=>{
            console.log(JSON.parse(data));
        });
    });


    request.write(jsonData);
    request.end();
});

app.post("/failure", (req,res)=>{
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, ()=>{
    console.log("I am listening...");
});


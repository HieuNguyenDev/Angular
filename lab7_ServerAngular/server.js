const fs = require('fs');
var cors = require('cors')
const exp = require("express");
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");

const app = exp();
const port = 3000;
const PRIVATE_KEY = fs.readFileSync('private-key.txt');

app.use(bodyParser.json()); 
app.use(cors());

app.get("/", (req, res) => {
     res.send("<h1>Đây là trang home</h1>");
});

app.post('/login', (req, res) => {
     const username = req.body.un;
     const password = req.body.pw;
     if (checkUserPass(username, password)) {
          const userInfo = getUserInfo(username);   
          const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
             algorithm: 'RS256',  
             expiresIn: 120, 
             subject: userInfo.id
          })          
          //res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
          res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
       }
       else res.sendStatus(401); // send status 401 Unauthorized  
});

checkUserPass = (username, password) => {  
     if (username == 'member' && password == '123') { return true}
     if (username == 'admin' && password == '123') { return true}
     return false; 
}

getUserInfo = (username) =>{  
     if (username == 'member') return { "id": "1", hoten:"Nguyễn Minh Hiếu" }  
     if (username == 'admin')  return { "id":"2", hoten:"Admin" }  
     return {"id":"-1", "hoten":""}
}

app.listen(port, () =>{
     console.log(`>>> App is running with port ${port}`);
});
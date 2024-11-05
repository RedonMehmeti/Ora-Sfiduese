// const express = require('express');
// const app = express()

// app.get('/hello', (req,res) => {
//     res.send("Hello nga Jcoders")
// });


// app.listen(3000, () => {
//     console.log("Server is online on port 3000");
// });






const express = require('express');
const app = express()

var user = [
    {id:1, name: "Filan Fisteku", email:"filanfisteku2@gmail.com"},
    {id:2, name: "Filan Fisteku", email:"filanfisteku2@gmail.com"},
]


 app.get('/hello/', (req,res) => {
     res.json({
        user: user
     })

     
 });


app.listen(3000, () => {
    console.log("Server is online on port 3000");
});
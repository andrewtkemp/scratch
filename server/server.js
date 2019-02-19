const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({}));


app.listen(PORT,()=>{
    console.log("Tell My Mom That I'm Sorry");
})
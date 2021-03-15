const express = require('express');

const app = express();
const userRoutes = require('./routes/userRoutes');

app.use("/user", userRoutes);


app.listen(8080, ()=>{
    console.log("Listening on port 8080")
});

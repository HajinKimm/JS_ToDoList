const express = require('express');
const app = express();
const cors = require('cors');
const todoRouter = require('./routes/todoRouter');
const port = 3000;

app.use(express.json()) 
app.use(cors());

app.use('/todo', todoRouter);   
 
app.listen(port, ()=>{ 
    console.log(`서버 접속 완료 : ${port}`)
})
import express from 'express';
import 'dotenv/config'
import data from './DB/data.js';
import cors from 'cors'
import apiRouter from './routers/apiRouter.js'



const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001 || 3002;

app.use('/api', apiRouter)



app.get('/', (req,res) => {
    res.send("hello from server")
    console.log(data);
    console.log("hi from servr");
    
})

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})
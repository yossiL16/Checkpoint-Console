import express from 'express';


const app = express();
app.use(express.json());

const port = process.env.PORT || 3001 || 3002;

app.use('/api', apiRouter)



app.get('/', (req,res) => {
    res.send("hello from server")
    console.log("hi from servr");
    
})

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})
import express from 'express';
import data from '../DB/data.js';
import { createToken, tokenExtractor } from '../utils/token.js'

const apiRouter = express();

apiRouter.post('/login', (req,res) => {
    
    const { username, password } = req.body;
    const user = data.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' })}
    const token = createToken(user)
    res.json({token: token, operator: {
        id:user.id,
        name: user.username,
        role: user.role
    }})
})


apiRouter.get('/status', tokenExtractor, (req,res) => {
    res.json({ checkpoint : false, isOpen : true, trafficLevel : 5, lastUpdated : '26-07-2020' })
})


apiRouter.get('/messages', tokenExtractor, (req,res) => {
    const {messages} = req.user;
    res.json({messages})
})


apiRouter.post('/messages', tokenExtractor, (req,res) => {
    const text = req.body;
    res.json({"mewMessage": text})
})



export default apiRouter;


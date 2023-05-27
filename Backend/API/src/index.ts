import express from 'express';
import cors from 'cors';
import personaRouter from './routes/persona.router';

const app = express();
const port = 3000;

app.use (cors());
app.use(express.json());
app.use('/api/persona',personaRouter);

app.get("/",(req:express.Request, res:express.Response)=>{
    res.send("Esta es la respuesta desde la API por GET");
});

app.post("/",(req:express.Request, res:express.Response)=>{
    console.log(req.body);
    res.send("Esta es la respuesta desde la API por POST");
});

app.listen(port,()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`);
});

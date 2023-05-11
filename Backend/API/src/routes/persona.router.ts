import express from 'express';
import * as controller from '../controller/personal.controller';
import { persona } from '../model/persona1';

const router = express.Router();

router.get('/', (_, res)=>{
    controller.GetPersonas()
    .then((obj) => {
        res.json(obj);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/',(req, res) => {
    controller.AddPersona(req.body as persona)
    .then((f) => {
        if(f)
            res.status(201).send();
        else
            res.status(500).send();
    })
    .catch((e) => {
        res.status(500).json(e);
    })
});

export default router;
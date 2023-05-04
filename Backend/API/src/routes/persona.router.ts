import express from 'express';
import * as controller from '../controller/personal.controller';

const router = express.Router();

router.get('/', (_, res)=>{
    controller.GetPersonas()
    .then((obj) => {
        res.json(obj);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
});

export default router;
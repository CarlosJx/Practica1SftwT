import express from 'express';
import * as controller from '../controller/personal.controller';

const router = express.Router();

router.get('/', (_, res)=>{
    res.json(
    controller.GetPersonas()
    );
});

export default router;
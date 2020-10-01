import {Router} from 'express';
import * as transactionController from '../controllers/transactionController';

const transactionRouter = Router();

transactionRouter.post('/', transactionController.postTransaction);

export default transactionRouter;
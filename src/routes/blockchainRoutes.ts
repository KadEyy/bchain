import {Router} from 'express';
import * as blockchainController from '../controllers/blockchainController';

const blockchainRouter = Router();

blockchainRouter.get('/', blockchainController.getBlocks);

blockchainRouter.get('/mine', blockchainController.mine);

export default blockchainRouter;
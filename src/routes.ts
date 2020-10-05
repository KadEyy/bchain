import { Application } from 'express';
import transactionRouter from './routes/transactionRoutes';
import blockchainRouter from './routes/blockchainRoutes';

/**
* Inject routes into app.
*/
export default (app: Application): void => {
    app.use('/transaction', transactionRouter);
    app.use('/blockchain', blockchainRouter);
}
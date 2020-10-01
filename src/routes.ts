import { Application } from 'express';
import transactionRouter from './routes/transactionRoutes';

/**
* Inject routes into app.
*/
export default (app: Application): void => {
    app.use('/transaction', transactionRouter);
}
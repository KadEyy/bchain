import {Request, Response} from 'express';
import Transaction, {TransactionType} from '../assets/transaction';

/**
* Post new transaction to the server.
*/
export const postTransaction = async (req: Request, res: Response): Promise<void> => {
    const {from, to, amount} = req.body;
    //Create new transaction
    const transaction = new Transaction(from, to, amount);
    if(req.app.transactions){
        req.app.transactions = [...req.app.transactions, transaction];
    }
    res.status(201).json(transaction);
}
import {Request, Response} from 'express';
import Transaction from '../assets/transaction';
import transactions from '../assets/transactionStore';

/**
* Post new transaction to the server.
*/
export const postTransaction = async (req: Request, res: Response): Promise<void> => {
    const {from, to, amount} = req.body;
    //Create new transaction
    const transaction = new Transaction(from, to, amount);
    if(req.app.blockChain) req.app.blockChain.signTransaction(transaction);
    transactions.add(transaction);
    res.status(201).json(transaction);
}
import {Request, Response} from 'express';
import transactionStore from '../assets/transactionStore';

/**
* Post new transaction to the server.
*/
export const getBlocks = async (req: Request, res: Response): Promise<void> => {
    //Check if Blockchain exists and send message
    req.app.blockChain ? res.status(200).send(req.app.blockChain.blocks) : res.status(404).send('No Blockchain initiated!');
}

export const mine = async (req: Request, res: Response) => {
    const block = req.app.blockChain ? req.app.blockChain.getNextBlock(transactionStore.get()) : undefined;
    if(block){
        transactionStore.flush();
        if(req.app.blockChain) req.app.blockChain.addBlock(block);
        res.status(201).json(block);
    }else{
        res.status(404).send('No Blockchain initiated!')
    }
}
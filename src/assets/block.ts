import { TransactionType } from './transaction';

/**
* Block interface.
*/
export interface BlockType{
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transactions: TransactionType[];
    timestamp: number;
    key: string;
    addTransaction(transaction: TransactionType): void
}

/**
* Block class.
*/
export default class Block implements BlockType{
    public index: number;
    public hash: string;
    public previousHash: string;
    public nonce: number;
    public transactions: TransactionType[];
    public timestamp: number;

    constructor(index?: number, previousHash?: string){
        this.index = index || 0;
        this.timestamp = Date.now()
        this.hash = '';
        this.previousHash = previousHash || '';
        this.nonce = 0;
        this.transactions = [];
    }

    /**
    * Generate block key.
    */
    get key(): string {
        return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce;
    }

    /**
    * Add new transaction into the block.
    */
    public addTransaction(transaction: TransactionType): void {
        this.transactions = [...this.transactions, transaction];
    }
}
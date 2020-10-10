import { RSAKey } from 'jsrsasign';
import {getHash, sign} from './crypto';

/**
* Transaction interface.
*/
export interface TransactionType{
    from: string;
    to: string;
    amount: number;
    signature: string;
    signWithPrivate(key: RSAKey): void;
}

/**
* Transaction class.
*/
export default class Transaction implements TransactionType{
    public from: string;
    public to: string;
    public amount: number;
    public signature: string;
    constructor(from: string, to: string, amount: number){
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.signature = '';
    }

    /**
    * Sign transaction with private key.
    */
    public signWithPrivate = (key: RSAKey) => {
        const dataHash = getHash(this.from + this.to + this.amount);
        this.signature = sign(key, dataHash);
    }
}
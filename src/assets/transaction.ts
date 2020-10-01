/**
* Transaction interface.
*/
export interface TransactionType{
    from: string;
    to: string;
    amount: number;
}

/**
* Transaction class.
*/
export default class Transaction implements TransactionType{
    public from: string;
    public to: string;
    public amount: number;
    constructor(from: string, to: string, amount: number){
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}
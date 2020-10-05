import {TransactionType} from './transaction';

//Global transaction store
let transactions: TransactionType[] = [];

//Transaction store methods
export default {
    /**
    * Add transaction to transaction store
    * .
    */
    add: (transaction: TransactionType) => transactions = [...transactions, transaction],
     /**
    * Get all transactions stored.
    */
    get: () => transactions,
     /**
    * Clear transaction store.
    */
    flush: () => transactions = []
};
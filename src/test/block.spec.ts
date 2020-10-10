import {expect} from 'chai';
import Block, { BlockType } from '../assets/block';
import Transaction, { TransactionType } from '../assets/transaction';

describe('Block test!', () => {
    const transactions: TransactionType[] = [new Transaction('admin', 'me', 10), new Transaction('me', 'admin', 5)];
    const block: BlockType = new Block();
    block.transactions = transactions;
    let testValue: string = JSON.stringify(block.transactions) + block.index + block.previousHash + block.nonce;
    it('Checks if block key is equal sum of few values', () => {
        expect(block.key).to.equal(testValue, `${block.key} is equal to ${testValue}?`)
    })
    it('Checks if transaction adding works properly', () => {
        const transaction = new Transaction('admin', 'me', 10);
        block.addTransaction(transaction);
        expect(block.transactions[2]).to.equal(transaction, `${block.transactions[2]} is equal to ${transaction}?`)
    })
})
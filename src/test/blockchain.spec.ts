import {expect} from 'chai';
import Block, { BlockType } from '../assets/block';
import BlockChain, {BlockChainType} from '../assets/blockchain';
import Transaction, { TransactionType } from '../assets/transaction';

describe('Blockchain test!', () => {
    let block: BlockType, blockchain: BlockChainType, transaction: TransactionType;
    beforeEach(() => {
        block = new Block();
        blockchain = new BlockChain(block);
        transaction = new Transaction('admin', 'me', 190);

    })
    it('Check if previous block hash is equal to current previousHash property', () => {
        const mined = blockchain.getNextBlock([transaction]);
        expect(mined.previousHash).to.equal(blockchain.getPreviousBlock().hash,
        `${mined.previousHash} is equal to ${block.hash}?`);
    })
})
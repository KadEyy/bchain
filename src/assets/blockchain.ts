import Transaction, {TransactionType} from './transaction';
import Block, {BlockType} from './block';
import {getHash} from './crypto';

/**
* Blockchain interface.
*/
interface BlockChainType{
    blocks: BlockType[];
    genesisBlock: BlockType;
    addBlock(block: BlockType): void;
    getNextBlock(transactions: TransactionType[]): BlockType;
    getPreviousBlock(): BlockType;
    genHash(block: BlockType): string;
}

/**
* Blockchain class.
*/
export default class BlockChain implements BlockChainType{

    public blocks: BlockType[];
    public genesisBlock: BlockType;
    private difficulty: number;

    constructor(genesisBlock: BlockType){
        this.genesisBlock = genesisBlock;
        this.blocks = [];
        this.addBlock(genesisBlock);
        this.difficulty = 4;
    }

    /**
    * Add new block into blockchain.
    */
    public addBlock(block: BlockType): void {
        if(this.blocks.length === 0){
            block.previousHash = '0000000000';
            block.hash = this.genHash(block);
        }
        this.blocks = [...this.blocks, block];
    }

    /**
    * Generate hash of new block.
    */
    public genHash = (block: BlockType): string => {
        let hash: string = getHash(block.key)
        const zeroString: string = '0'.repeat(this.difficulty);
        while(!hash.startsWith(zeroString)){
            block.nonce++;
            hash = getHash(block.key);
            console.log(`nonce: ${block.nonce}, hash: ${hash}`);
        }
        console.log(`Finished with hash: ${hash}!`)
        return hash;
    };

    /**
    * Generate next block.
    */
    public getNextBlock = (transactions: TransactionType[]): BlockType => {
        const previousBlock = this.getPreviousBlock();
        const block: Block = new Block(this.blocks.length, previousBlock.hash);
        transactions.map((transaction: TransactionType) => {
            block.addTransaction(transaction);
        })
        block.hash = this.genHash(block);
        return block;
    }

    /**
    * Get previous block before new block insertion.
    */
    public getPreviousBlock = () => this.blocks[this.blocks.length - 1];
}
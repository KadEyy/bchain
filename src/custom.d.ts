interface BlockChainType{
    blocks: BlockType[];
    genesisBlock: BlockType;
    publicKey: RSAKey;
    addBlock(block: BlockType): void;
    getNextBlock(transactions: TransactionType[]): BlockType;
    getPreviousBlock(): BlockType;
    genHash(block: BlockType): string;
    signTransaction(transaction: TransactionType): void;
}

declare namespace Express {
    export interface Application {
       blockChain?: BlockChainType
    }
}
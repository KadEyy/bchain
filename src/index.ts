//Server imports
import express from 'express';
import bodyParser from 'body-parser';
import injectRoutes from './routes';

//Blockchain imports
import Block from './assets/block';
import BlockChain from './assets/blockchain';

//Initialize express app and middlewares
const app = express();
app.use(bodyParser.json());
injectRoutes(app);

//Initialize blockchain
const genesisBlock: Block = new Block();
app.blockChain = new BlockChain(genesisBlock);

//Listen to port
app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
})

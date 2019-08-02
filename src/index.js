const Block = require('./Block')
const args = process.argv.slice(2);

function createBaseBlock() {
  return new Block(0, new Date().getTime(), 'Base Block', '0');
}

function nextBlock(lastBlock) {
  const data = `Block nr ${lastBlock.index + 1}`;
  return new Block(lastBlock.index + 1, new Date().getTime(), data, lastBlock.hash);
}

function main() {
  let blockchain = [];
  blockchain[blockchain.length] = createBaseBlock();
  let previousBlock = blockchain[0];

  for (let i = 0; i < args[0] || 0; i++) {
    let addBlock = nextBlock(previousBlock);
    blockchain[blockchain.length] = addBlock;
    previousBlock = addBlock;
    console.log(`Block ${addBlock.index} has been added!`);
    console.log(`Hash: ${addBlock.hash}\n`);
  }
}

main();

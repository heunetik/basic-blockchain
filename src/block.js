const crypto = require('crypto')

const Block = class Block {
  constructor (index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.hashBlock();
  }

  hashBlock () {
    const hash = crypto.createHash('sha256');
    return hash.update(`${+this.index}+${+this.timestamp}+${+this.data}+${+this.previousHash}`).digest('hex');
  }
}

module.exports = Block;

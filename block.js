const { GENESIS_DATA } = require('./config')

class Block {
    constructor ({ timestamp, lastHash, hash, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    };

    static genesis() {
        const genesis = new Block({GENESIS_DATA})
        return genesis 
    };

};

module.exports = Block;

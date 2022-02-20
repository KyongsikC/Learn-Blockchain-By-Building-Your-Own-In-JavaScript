const util = require("util");

const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, "87S8DFAS8DF7SA", "08S80SF0SFFSDA");
bitcoin.createNewTransaction(100, "000000", "111111");
bitcoin.createNewBlock(123123, "08S80SF0SFFSDA", "0FDAS8F8S0F89S");
bitcoin.createNewTransaction(200, "000000", "111111");
bitcoin.createNewTransaction(300, "000000", "111111");
bitcoin.createNewTransaction(400, "000000", "111111");
bitcoin.createNewBlock(75675, "0FDAS8F8S0F89S", "A89SF7D98S7FD");

console.log(util.inspect(bitcoin, false, null, true));

var bitcore = require('bitcore-lib')
var privateKey = new bitcore.PrivateKey();
var publicKey = privateKey.publicKey;
var address = publicKey.toAddress();
console.log("Your public key is " + address);
var exported = privateKey.toWIF();
console.log("Your private key is " + exported);


#!/usr/bin/env node

const EC = require('elliptic').ec;
const { program } = require('commander');

// Initialize the command line arguments
// Use node index --help to display the arguments details
program
    .version('0.0.1')
    .description("This command verify the DER elliptic signature")
    .argument('<publicKey>', 'Public key used to sign')
    .argument('<text>', 'Text which was signed')
    .argument('<signature>', 'Signature produced by the private key owner');

program.parse();


// Get required parameters coming from command line
const publicKey = program.args[0];
const messageHash = program.args[1];
const signature = program.args[2];


// Initialize elliptic with the secp256k1 algorithm
var ec = new EC('secp256k1');

// Function to check the validity of the signature
const verifySignature = (publicKey, signature, messageHash) => {
    let key = ec.keyFromPublic(publicKey, 'hex');
    return key.verify(messageHash, signature);
}

// Run the signature verification
try {
    if (verifySignature(publicKey, signature, messageHash)) {
        console.log("Signature is correct");
        process.exit(0);
    } else {
        console.log("Signature is incorrect");
        process.exit(1);
    }
} catch (err) {
    console.log("Invalid signature");
    process.exit(2);
}
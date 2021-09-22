const EC = require('elliptic').ec;
const { program } = require('commander');
program
    .version('0.0.1')
    .description("This command verify the DER elliptic signature")
    .argument('<publicKey>', 'Public key used to sign')
    .argument('<text>', 'Text which was signed')
    .argument('<signature>', 'Signature produced by the private key owner');

program.parse();

const publicKey = program.args[0];
const messageHash = program.args[1];
const signature = program.args[2];

var ec = new EC('secp256k1');

verifySignature = (publicKey, signature, messageHash) => {
    let key = ec.keyFromPublic(publicKey, 'hex');
    return key.verify(messageHash, signature);
}

if (verifySignature(publicKey, signature, messageHash)) {
    console.log("Signature is correct");
    process.exit(0);
} else {
    console.log("Signature is incorrect");
    process.exit(1);
}
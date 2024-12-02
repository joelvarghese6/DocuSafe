import { generateKeyPairSync } from 'crypto';

function generateKeyPair() {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 2048, // Key size in bits
        publicKeyEncoding: {
            type: 'spki', // Subject Public Key Info
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8', // Private Key Info
            format: 'pem',
        },
    });

    return { publicKey, privateKey };
}

const keys = generateKeyPair();

console.log('Public Key:', keys.publicKey);
console.log('Private Key:', keys.privateKey);

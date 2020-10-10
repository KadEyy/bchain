import crypto from 'crypto';
import {KEYUTIL, RSAKey, KJUR} from  'jsrsasign';

const curve = 'secp256k1';

interface KeyObj{
    prvKeyObj: RSAKey;
    pubKeyObj: RSAKey;
}

/**
* Generates hash for passed string.
*/
export const getHash = (string: string): string => crypto
.createHash('sha256')
.update(string)
.digest('hex');

/**
* Public and private keys generator.
*/
export const generateKeys = (): KeyObj => {
    return KEYUTIL.generateKeypair('EC', curve);
}

/**
* Generate signature from private key.
*/
export const sign = (privateKey: RSAKey, hash: string): string => {
    const signature = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});
    signature.init(privateKey);
    return signature.signHex(hash);
}

/**
* Verify signature by public key.
*/
export const verify = (publicKey: RSAKey, hash: string): boolean => {
    const signature = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});
    signature.init(publicKey);
    return signature.verify(hash);
}

export {RSAKey} from 'jsrsasign';
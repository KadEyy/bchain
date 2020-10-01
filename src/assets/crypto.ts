import crypto from 'crypto';

/**
* Generates hash for passed string.
*/
export const getHash = (string: string) => crypto
.createHash('sha256')
.update(string)
.digest('hex');
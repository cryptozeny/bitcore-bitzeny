var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  // magic: hex('daa5bef9'),
  magic: hex('9f263b54'),
  // addressVersion: 81,
  addressVersion: 48,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    // hash: hex('CEF5B89F4EBF38A73CD440439EDACA4AFA7C7AD82BE281473B9E5EE5F7090000'),
    hash: hex('ABCC4CB36B9390F1EA8C7FED0F7F390D1AE4D6D9B5F1EBCDE0DC926471E33BBD'),
    // merkle_root: hex('D2A4DB3BCE9F2044558211B401DC45C72806A9FFC7F8A3DF9C3A58B491E526A6'),
    merkle_root: hex('AF6F6D8612F4A8726A46E61D30DDC23AF34F50AEBBA3C08F252A6D2B41838B55'),
    height: 0,
    // nonce: 369858,
    nonce: 3033548,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    // timestamp: 1415384723,
    timestamp: 1514764800,
    // bits: 507510783,  // 0x1e3fffff
    bits: 504365040,  // 0x1e3fffff(제니) >> 0x1e0ffff0(안즈)
  },
  dnsSeeds: [
  ],
  // defaultClientPort: 9253
  defaultClientPort: 9333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('59454e59'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('5C22DE9B02E71502FD7EDDA7B61A543CD23FB62EA2377FDBBD95F5790C3A0000'),
    merkle_root: hex('D2A4DB3BCE9F2044558211B401DC45C72806A9FFC7F8A3DF9C3A58B491E526A6'),
    height: 0,
    nonce: 855811,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1415386241,
    bits: 507510783,  // 0x1e3fffff
  },
  dnsSeeds: [
  ],
  defaultClientPort: 19253
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid climb frame sugar fire ridge remember coin gesture pet swap genre'; 
let testAccounts = [
"0x0e3092b72dcb50dd3af1c90a0aadc04616ff5c9e67c176bece4f6ac03dd9f95f",
"0xf9596c9ed118276c699cd647d3caad3d5c2c0622408b650a2ccc7e1091a11d0e",
"0xb8b7a3ea05057dce53c1b210fb5b20f12e87b0c50b784d5cf8db4b4300cefe1b",
"0x02720762ef7148af73091ad82f0794a881e537cb806a93ad7fbdebdb1d8fe6d9",
"0x65a72ab821b69d25cb7cde5fb9fb84801b3bf250d4f3be7b7d3f7c4e50a670f2",
"0x496d67ff39b29e3b07f8dd462d986ecd790bb2c1c77c25fb7941a2c7c47b72bb",
"0x4605faec1360078c04977d2a1820cb95e2bdd1d49845f4cf13be63232822ead9",
"0xab8a05ccc0e7b597887eb2ed6555cadce33a1e4b2806dc5ac051623c7ca92d4f",
"0x0857c3ac1acf65fe8f5b15f27661b31f423fd89fcff27222bb903d2781e3439b",
"0x2fb9bf97600e1d354af04f9e25f3fbc99b08c4802cc9c230df178e49674d90c6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


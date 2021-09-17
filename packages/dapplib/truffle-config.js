require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name return saddle atom gesture inflict sunset giant'; 
let testAccounts = [
"0x2d7f435a12cbe6de8741df58404079aac887e5af4083a5815830c93704faa7d1",
"0x210a6c7141b5858db23716ac41955cc7b6361ccb5d080ceb1ecb1fa3dc0daa10",
"0xe42c01244e106720cea2e79316922abef800b6d7d95f7bd5174a7b450b771b6e",
"0x01b24a40593851d335c3c163e862f3605947465961c54e9e67b85b2edb2f2140",
"0x7a250b91010a4f6ec9ec8989e2280867effe683f15d97e135169fad58f4d95fc",
"0xc3b58ab9bf36cb456d7c6e888d337be798a7e4979b744e78ffeccfaab2ee3315",
"0x1a2965bfea2eb8b04ac672b72edb955ce7066f276598cf73d842e65961d0f66a",
"0xd02b872015d5398b95b1a96e0158aae0537a1cd0d85a57152c2c97d72f901129",
"0xe7aeede685c3accf8f58379db88dd711bf182a304a393eceb0b501b7ff59ebda",
"0x4f0d92d253746f92bba788ddcbfc13190e1f762945dac677086687b14f6818c1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


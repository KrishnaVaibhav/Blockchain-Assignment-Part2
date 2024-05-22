const {Web3} = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); 

const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "docHash",
          "type": "string"
        }
      ],
      "name": "storeDocument",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        }
      ],
      "name": "getDocument",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
const contractAddress = '0x9870683dC9a94A1cc8e3D3E7964975E5D4bfF771'; 

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function storeDocument432(docId, content) {
    const docHash = web3.utils.sha3(content);
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.storeDocument(docId, content, docHash).send({ from: accounts[0], gas: 3000000 });
    console.log('[B00968432] - Document stored successfully.');
    console.log('[B00968432] - Document Hash:', docHash);
    console.log('[B00968432] - Transaction:', result);
}

async function getDocument432(docId) {
    const result = await contract.methods.getDocument(docId).call();
    console.log('[B00968432] - Document Content:', result[0]);
    console.log('[B00968432] - Document Hash:', result[1]);
    console.log('[B00968432] - Transaction:', result);
}

const args = process.argv.slice(2);
const command = args[0];

if (command === 'store') {
    const docId = args[1];
    const content = args[2];
    storeDocument432(docId, content).catch(console.error);
} else if (command === 'get') {
    const docId = args[1];
    getDocument432(docId).catch(console.error);
}

const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient({
  host: 'localhost',
  port: 5001
})

export default ipfs

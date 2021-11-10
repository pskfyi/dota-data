const fs = require('fs')

const axios = require('axios')
const httpAdapter = require('axios/lib/adapters/http')

module.exports = async function downloadFile(fileUrl, outputLocationPath) {
  const output = fs.createWriteStream(outputLocationPath)

  return await axios.get(fileUrl, { responseType: 'stream', adapter: httpAdapter })
    .then(response => new Promise((resolve, reject) => {
      const stream = response.data

      stream.on('data', (chunk /* chunk is an ArrayBuffer */) => {
        output.write(new Buffer.from(chunk))
      })
      stream.on('end', () => {
        output.end()
        resolve()
      })
    }))
}
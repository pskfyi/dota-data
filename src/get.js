const axios = require('axios').default

module.exports = async function get(endpoint) {
  const response = await axios.get(endpoint)

  if (response.status !== 200 || response?.data === undefined) {
    throw new Error('API request failed')
  }

  return response.data
}

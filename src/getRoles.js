const get = require('./get')
const ROLES_ENDPOINT = "https://api.stratz.com/api/v1/Hero/roles"

module.exports = async function getRoles() {
  return await get(ROLES_ENDPOINT).then(roles => roles.map(role => role.name))
}

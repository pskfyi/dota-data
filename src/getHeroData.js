const get = require('./get')
const HEROES_ENDPOINT = 'https://api.stratz.com/api/v1/Hero'

const RANGE_HIERARCHY = {
  Melee: 0,
  Short: 1,
  Medium: 2,
  Long: 3
}

module.exports = async function getHeroes(roleNames) {
  return await get(HEROES_ENDPOINT)
    .then(heroes => Object.values(heroes)
      .map(({ displayName, shortName, roles, stat, language }) => {
        const { attackType, primaryAttribute, attackRange } = stat
        const { bio, hype: teaser } = language

        const attribute = primaryAttribute.toUpperCase()

        const range =
          attackType === 'Melee' ? 'Melee'
          : attackRange < 401 ? 'Short'
          : attackRange < 601 ? 'Medium'
          : 'Long'

        return {
          id: shortName,
          name: displayName,
          roles: roles.map(({ roleId }) => roleNames[roleId]),
          attribute,
          range,
          bio: bio.replace(/\t/g, '').replace(/<br>/g, ''),
          teaser
        }
      })
      .sort(({ range: A }, { range: B }) => RANGE_HIERARCHY[B] - RANGE_HIERARCHY[A])
  )
}

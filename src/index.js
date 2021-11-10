const getRoles = require('./getRoles')
const getHeroData = require('./getHeroData')
const downloadAllHeroPortraits = require('./downloadAllHeroPortraits')
const saveHeroData = require('./saveHeroData')

async function main() {
  const roles = await getRoles()
  const heroData = await getHeroData(roles)
  const heroNames = heroData.map(hero => hero.shortName)

  await saveHeroData(heroData)
  await downloadAllHeroPortraits(heroNames)

  console.log('Done!')
}

main()

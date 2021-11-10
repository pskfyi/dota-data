const path = require('path')

const downloadFile = require('./downloadFile')
const { DATA_DIR } = require('./constants')

const HERO_PORTRAIT_ENDPOINT = "https://cdn.dota2.com/apps/dota2/images/heroes/"
const HERO_PORTRAIT_SUFFIX = "_vert.jpg"

module.exports = async function downloadHeroPortrait(heroName) {
  const endpoint = HERO_PORTRAIT_ENDPOINT + heroName + HERO_PORTRAIT_SUFFIX
  const fileName = path.resolve(DATA_DIR, heroName+'.jpg')
  
  await downloadFile(endpoint, fileName)
}

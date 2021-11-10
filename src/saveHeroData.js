const path = require('path')
const fs = require('fs')

const { DATA_DIR } = require('./constants')

const HERO_DATA_PATH = path.resolve(DATA_DIR, 'heroData.json')

module.exports = async function saveHeroData(heroData) {
  await fs.promises.writeFile(HERO_DATA_PATH, JSON.stringify(heroData, null, 2), 'utf-8')
}

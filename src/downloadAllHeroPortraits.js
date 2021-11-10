const downloadHeroPortrait = require('./downloadHeroPortrait')

module.exports = async function downloadAllHeroPortraits(heroNames) {
  let index = 1
  
  await Promise.all(heroNames.map(async (name) => {
    await downloadHeroPortrait(name)
      .then(() => {
        console.log("  " + index + " " + name)
        index++
      })
      .catch(() => {
        console.error("! " + index + " " + name)
        index++
      })
  }))
}

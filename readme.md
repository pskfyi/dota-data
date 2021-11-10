# Dota Data

Distilling scattered walkthroughs around programatically obtaining information related to the video game Dota 2 using JavaScript.

This focuses on obtaining hero information including their portrait images, but the methods and resources used contain much more information. The source code is simple and can serve as a starting point for other operations.

## Steps
- Clone this repository.
- With [Volta](https://volta.sh/) installed, run `node src/index.js` at the root of the directory.

Files will be saved to the `./data/` directory.

## Notes
- Most data was intentionally stripped from the data file. If you want the raw data, remove the `.map()` method call from [`getHeroData.js`](./src/getHeroData.js) 
- Attack range has been converted from type (Melee / Ranged) and distance (a number) to the following:
  - "Melee" - Unchanged. Note one oddity: there are a couple of Ranged heroes with shorter range than the longest-range Melee hero, Monkey King.
  - "Short" - Ranged attacks w/ range 400 or less.
  - "Medium" - Ranged attacks w/ range 401 to 600.
  - "Long" - Ranged attacks w/ range over 600.

## Missing Vertical Portraits
The official Dota 2 CDN used to provide square-ish portrait images for all heroes. This is no longer the case for the two most recent heroes: Dawnbringer and Marci. I prefer this old portrait style for my purposes, so I created my own [Dawnbringer](./dawnbringer.jpg) and [Marci](./marci.jpg) portraits in this same style. You can find them at the repository root.

## Acknowledgements
- Hero data is from [Stratz](https://docs.stratz.com/index.html)
- [Official Dota 2 API info](https://dev.dota2.com/forum/dota-2/spectating/replays/webapi/60177-things-you-should-know-before-starting)

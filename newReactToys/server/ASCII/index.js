const fs = require('fs')
// const readline = require('readline')

// function create () {
//   return readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
// }

showFish()

async function showFish () {
  const fishData = await fs.readFile('./fish')
  console.log(fishData)
}

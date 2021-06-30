const korona = require("./covid.js")

async function output() {
    let country = await korona.country("Afghanissstan")
    console.log(country)
}
output()

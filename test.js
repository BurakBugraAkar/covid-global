const korona = require("./covid.js")

async function output() {
    let country = await korona.country("Turkey")
    console.log(country)
}
output()

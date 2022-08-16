const axios = require('axios');
const chalk = require('chalk')
module.exports = {
    country: async function(ülke) {
        let err = (code, message) => {
            text = {
                status: code,
                message: message
            }
            console.error(text)
        }
        try {
        const body = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${encodeURI(ülke)}`)
            if (typeof body?.data === 'string') return err(404, "[COVID] Unfortunately, there is no such a country!")
            return body?.data
        } catch (error) {
            console.log(chalk.red("[COVID] Unfortunately, I could not access this data."))
            return err(500, "[COVID] Unfortunately, I could not access this data.")
        }
    },
}
# covid-global

```shell
npm install crypto-global
```

A fast and stable module that provides information about country's current situation of COVID-19

```javascript
const korona = require("./covid.js")

async function output() {
    let country = await korona.country("Afghanistan")
    console.log(country)
}
output()
```

Data output

```cmd
output() 

> {
>   stats: 202,
>   country: 'Afghanistan',
>   cases: 118659,
>   todayCases: 0,
>   deaths: 4871,
>   todayDeaths: 0,
>   recovered: 70016,
>   active: 43772,
>   critical: 1124,
>   casesPerOneMillion: 2982,
>   deathsPerOneMillion: 122,
>   totalTests: 607061,
>   testsPerOneMillion: 15255
> }

```

#Units
```cmd
You can pull information of COVID-19 current situation by typing the name of the country you choose on the world!
```


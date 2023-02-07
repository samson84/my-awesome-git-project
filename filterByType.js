const getBeers = require('./data')

function main(type) {
    console.log('type:', type)
    const beers = getBeers()
    const filtered = beers.filter(function(beer) {
        return beer.type.includes(type)
    })
    filtered.forEach(function(beer) {console.log(beer.name)})
}

main(process.argv[2])

// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE
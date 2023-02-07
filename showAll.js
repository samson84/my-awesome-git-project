const getBeers = require('./data')

function main() {
    const beers = getBeers();

    beers.forEach(function (beer) {
        console.log(`${beer.name}, ${beer.brewery}`)
    })

}

main()

// Usage: node showAll.js
const getBeers = require('./data')


function main(keyword) {
    console.log('keyword:', keyword)
    const beers = getBeers()
    const searchResult = beers.filter((beer) => beer.name.includes(keyword))
    searchResult.forEach((beer) => console.log(beer.name))
}

main(process.argv[2])

// Usage: node searchByName.js <keyword>
// Example: node searchByName.js Rabbit
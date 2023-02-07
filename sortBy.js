const getBeers = require('./data')

function main(property) {
    console.log('property:', property)

}

main(process.argv[2])

// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score
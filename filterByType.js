const getBeers = require('./data')

function main(type) {
    console.log('type:', type)

}

main(process.argv[2])

// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE
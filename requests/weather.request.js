const rp = require('request-promise')

module.exports = async function(city = '') {
    if(!city) {
        throw new Error('Error missing city value');
        return
    } 

    console.log('City:', city);
}
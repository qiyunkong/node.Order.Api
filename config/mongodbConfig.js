const Port = 27017
const Host = "localhost"
const Database = "ganfanhun"
const Driver = `mongodb`
const ConnectString = `${Driver}://${Host}:${Port}/${Database}`

module.exports = ConnectString
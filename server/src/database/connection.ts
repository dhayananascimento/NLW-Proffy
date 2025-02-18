import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite3')
    },
    useNullAsDefault: true
})

//migrations - controlam a versão do banco de dados
export default db
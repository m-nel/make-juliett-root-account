const CurrencyFormatter = require('currency-formatter')

module.exports = (config) => {
    const rootApi = require('./root')(config)

    async function getBalance(app) {
        const account = await rootApi.getAccount()
        const balance = CurrencyFormatter.format(account.balance, { code: 'ZAR' })
        app.tell(`You have ${balance}`)
    }

    return new Map([
        ['get_balance', getBalance],
    ])
}


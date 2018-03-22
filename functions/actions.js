const CurrencyFormatter = require('currency-formatter')

module.exports = (config) => {
    const rootApi = require('./root')(config)

    async function getBalance(app) {
        const account = await rootApi.getAccount()
        const balance = CurrencyFormatter.format(account.balance, { code: 'ZAR' })
        app.tell(`You have ${balance}`)
    }

    async function listTags(app) {
        const tags = await rootApi.listTags()
        const tagNames = tags.map((tag) => tag.name).join(', ')
        app.tell(`You have the following tags: ${tagNames}`)
    }

    return new Map([
        ['get_balance', getBalance],
        ['list_tags', listTags],
    ])
}


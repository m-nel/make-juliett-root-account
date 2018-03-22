const axios = require('axios');

module.exports = (config) => {
    const client = axios.create({
        baseURL: `https://${config.root.banking.env || 'sandbox'}.root.co.za/v1/`,
        auth: { username: config.root.banking.apiKey }
    })

    const ApiCalls = {
        getAccount: () => client.get(`account`).then((response) => response.data).catch(console.error),
    }

    return ApiCalls
}


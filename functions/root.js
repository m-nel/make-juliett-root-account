const axios = require('axios');

module.exports = (config) => {
    const client = axios.create({
        baseURL: `https://${config.root.banking.env || 'sandbox'}.root.co.za/v1/`,
        auth: { username: config.root.banking.apiKey }
    })

    const ApiCalls = {
        getAccount: () => client.get(`account`).then(grabData).catch(console.error),
        listTags: () => client.get(`tags`).then(grabData).catch(console.error),
    }

    return ApiCalls
}

const grabData = (response) => response.data

const request = require('request')

// main application
module.exports = async ({webhookUrl, message}) => {
  return await sendMessage({webhookUrl, message})
}

async function sendMessage ({webhookUrl, message}) {
  const payload = {
    url: webhookUrl,
    method: 'POST',
    json: {text: message}
  }
  return await request(payload)
}

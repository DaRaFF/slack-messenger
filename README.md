# Scope

Sends a message to Slack via a webhook.

# Example

### Precondition

Create a webhook Url via https://api.slack.com/apps.

### via CLI

```bash
# message = your message you want to post to a slack channel
# url = webhook url
npx github:DaRaFF/slack-messenger \
  --message='Hi, I am a Slack bot.' \
  --url=https://hooks.slack.com/services/<your-individual-service-link>
```

### as module

Add an entry to your dependencies in package.json `"slack-messenger": "git+https://git@github.com/DaRaFF/slack-messenger.git"` (because this repository is currently not published on npm)

```js
#!/usr/bin/env node

// index.js
const slackMessenger = require('slack-messenger')
await slackMessenger({
  webhookUrl: 'https://hooks.slack.com/services/<your-individual-service-link>',
  message: 'I am a Slack bot :-)'
})
  .catch((err) => {
    console.log('this is an error', err)
  })
```

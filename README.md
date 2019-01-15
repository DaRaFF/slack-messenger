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

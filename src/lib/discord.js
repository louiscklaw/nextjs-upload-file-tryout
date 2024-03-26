const fetch = require('node-fetch');

const hook_url = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

var params = content => {
  return {
    username: 'share.louislabs.com',
    avatar_url: '',
    content: 'file uploaded',
    embeds: [
      {
        title: 'file uploaded !',
        color: 15258703,
        thumbnail: { url: '' },
        fields: [{ name: 'url', value: content, inline: true }],
      },
    ],
  };
};

function sendMessage(content) {
  return fetch(hook_url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(params(content)),
  }).then(res => {
    console.log(res);
  });
}

function discordSendErrorMessage(content) {
  return fetch(hook_url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(params(content)),
  }).then(res => {
    console.log(res);
  });
}

export { sendMessage, discordSendErrorMessage };

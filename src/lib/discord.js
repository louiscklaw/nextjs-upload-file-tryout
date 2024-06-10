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
  try {
    if (hook_url == '') throw Error('hook url not found, please check .env.local file');

    return fetch(hook_url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params(content)),
    }).then(res => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
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

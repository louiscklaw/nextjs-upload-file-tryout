const isValidUrl = require('is-valid-http-url');

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('instrumentation nodejs register');

    const hook_url = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    if (!hook_url || !isValidUrl(hook_url)) {
      console.error('No discord webhook URL found, please define it in .env.local file. Exiting...');
      process.exit(1);
    }
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    console.log('instrumentation edge register');
  }
}

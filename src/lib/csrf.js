// "lib/csrf"
import { nextCsrf } from 'next-csrf';
var randomize = require('randomatic');

let csrf_token = '1234567890';

const { csrf, setup } = nextCsrf({
  // eslint-disable-next-line no-undef
  secret: csrf_token,
  httpOnly: true,
});

export { csrf, setup };

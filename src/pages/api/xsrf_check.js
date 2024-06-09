// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const XCSRF = req.headers.cookie
    ?.split(';')
    .find(cookie => cookie.trim().startsWith('XSRF-TOKEN='))
    ?.split('=')[1];

  if (!XCSRF) {
    return res.status(200).json({ result: 'xsrf not exist' });
  }

  return res.status(200).json({ result: 'xsrf exist' });
}

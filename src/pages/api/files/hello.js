// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * A Next.js API route handler that returns a JSON object with a name property.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A Promise that resolves when the response is sent.
 */
export default function handler(req, res) {
  // Set the HTTP status code to 200 (OK)
  res.status(200);

  // Send a JSON response with the name property set to '/api/files/hello'
  res.json({ name: '/api/files/hello' });
}

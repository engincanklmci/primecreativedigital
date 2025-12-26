// API endpoint for lead capture (Vercel serverless function) - DISABLED
// Lead capture functionality has been removed from the system

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Return disabled message for all requests
  res.status(403).json({
    error: 'Lead capture functionality has been disabled',
    message: 'This feature is no longer available'
  });
}
// API endpoint for lead capture (Vercel serverless function)
import { emailMarketingService } from '../src/api/emailMarketing.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const leadData = req.body;
      
      // Validate required fields
      if (!leadData.email || !leadData.source) {
        return res.status(400).json({ 
          error: 'Email and source are required' 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(leadData.email)) {
        return res.status(400).json({ 
          error: 'Invalid email format' 
        });
      }

      // Process the lead
      const result = await emailMarketingService.captureLeadAndStartSequence(leadData);
      
      res.status(200).json({
        success: true,
        message: 'Lead captured successfully',
        leadId: result.leadId,
        sequence: result.sequence
      });

    } catch (error) {
      console.error('Lead capture error:', error);
      res.status(500).json({ 
        error: 'Failed to capture lead',
        message: error.message 
      });
    }
  } else if (req.method === 'GET') {
    // Get leads (for admin dashboard)
    try {
      const leads = JSON.parse(process.env.LEADS_DATA || '[]');
      res.status(200).json({ leads });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch leads' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
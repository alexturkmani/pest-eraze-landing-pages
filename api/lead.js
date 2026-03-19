module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, suburb, email, pest_type, subject } = req.body || {};

    const web3res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '2628fc63-2069-4661-8e18-34826cadb806',
        subject: subject || 'New Lead - Pest Eraze',
        name: name || 'Not provided',
        phone: phone || 'Not provided',
        suburb: suburb || 'Not provided',
        email: email || '',
        pest_type: pest_type || 'General'
      })
    });

    const web3data = await web3res.json();

    // Send follow-up SMS via Twilio (if configured)
    if (process.env.TWILIO_SID && process.env.TWILIO_AUTH && process.env.TWILIO_FROM && phone) {
      try {
        var cleanPhone = phone.replace(/\s/g, '');
        var toNumber = cleanPhone.startsWith('+') ? cleanPhone : '+61' + cleanPhone.replace(/^0/, '');
        var smsBody = 'Hi' + (name ? ' ' + name : '') + ', thanks for requesting a quote from Pest Eraze!\n\nA specialist will call you within 60 seconds.\n\nNeed us now? Call 0416 528 547\n\n- Pest Eraze Melbourne';
        var twilioUrl = 'https://api.twilio.com/2010-04-01/Accounts/' + process.env.TWILIO_SID + '/Messages.json';
        var authHeader = 'Basic ' + Buffer.from(process.env.TWILIO_SID + ':' + process.env.TWILIO_AUTH).toString('base64');
        await fetch(twilioUrl, {
          method: 'POST',
          headers: { 'Authorization': authHeader, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ To: toNumber, From: process.env.TWILIO_FROM, Body: smsBody }).toString()
        });
      } catch (e) { console.error('SMS failed:', e); }
    }

    if (web3data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: 'Submission failed' });
    }
  } catch (err) {
    console.error('API error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};
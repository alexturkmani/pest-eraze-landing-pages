module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, suburb, email, pest_type, subject } = req.body || {};

  // 1. Send lead to Web3Forms (notifies Alex via email)
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

  // 2. Send follow-up SMS to the lead via Twilio (if configured)
  if (process.env.TWILIO_SID && process.env.TWILIO_AUTH && process.env.TWILIO_FROM && phone) {
    try {
      const cleanPhone = phone.replace(/\s/g, '');
      const toNumber = cleanPhone.startsWith('+') ? cleanPhone : '+61' + cleanPhone.replace(/^0/, '');

      const smsBody = 'Hi' + (name ? ' ' + name : '') + ', thanks for requesting a quote from Pest Eraze!\n\nA specialist will call you within 60 seconds to discuss your situation.\n\nNeed us right now? Call 0416 528 547\n\n- Pest Eraze Melbourne';

      const twilioUrl = 'https://api.twilio.com/2010-04-01/Accounts/' + process.env.TWILIO_SID + '/Messages.json';
      const authHeader = 'Basic ' + Buffer.from(process.env.TWILIO_SID + ':' + process.env.TWILIO_AUTH).toString('base64');

      await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          To: toNumber,
          From: process.env.TWILIO_FROM,
          Body: smsBody
        }).toString()
      });
    } catch (smsError) {
      console.error('SMS send failed:', smsError);
    }
  }

  if (web3data.success) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(500).json({ success: false, error: 'Form submission failed' });
  }
};
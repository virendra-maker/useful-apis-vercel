import axios from 'axios';

export default async function handler(req, res) {
  const { from = 'USD', to = 'EUR', amount = 1 } = req.query;

  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const rate = response.data.rates[to];
    const result = amount * rate;
    
    res.status(200).json({
      from,
      to,
      amount,
      rate,
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
}

// pages/api/data.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { value } = req.body;
    console.log('Received value:', value);
    res.status(200).json({ message: `Received value: ${value}` });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: 'Hello World!' });
  }
}

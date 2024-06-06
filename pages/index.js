// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const res = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    
    const data = await res.json();
    setResponse(data.message);
  };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Next.js API Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a value"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

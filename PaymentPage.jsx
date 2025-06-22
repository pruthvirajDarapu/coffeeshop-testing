import React, { useState } from 'react';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!cardNumber || !expiry || !cvv || !name) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Here you would integrate with a payment API
    alert('Payment submitted!');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name on Card:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            maxLength={16}
          />
        </div>
        <div>
          <label>Expiry (MM/YY):</label>
          <input
            type="text"
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            placeholder="MM/YY"
            maxLength={5}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="password"
            value={cvv}
            onChange={e => setCvv(e.target.value)}
            maxLength={4}
          />
        </div>
        {error && <div style={{color: 'red'}}>{error}</div>}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;

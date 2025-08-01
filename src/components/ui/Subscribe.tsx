'use client';

import { useState } from 'react';

export function Subscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-secondary text-white py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">Subscribe for Updates</h2>
        <p className="mt-2 text-center">Get notified when we launch our service.</p>
        {submitted ? (
          <p className="mt-4 text-center">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded text-gray-900"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="mt-2 w-full bg-accent p-2 rounded text-white">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

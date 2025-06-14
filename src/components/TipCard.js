import React, { useEffect, useState } from 'react';
import { fetchTip } from '../services/api';

export default function TipCard() {
  const [tip, setTip] = useState('');

  useEffect(() => {
    fetchTip()
      .then(setTip)
      .catch(console.error);
  }, []);

  return (
    <div className="bg-green-100 p-4 rounded shadow text-green-900">
      <h4 className="font-bold mb-2">Wellness Tip</h4>
      <p>{tip}</p>
    </div>
  );
}

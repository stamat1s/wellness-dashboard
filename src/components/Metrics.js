import React, { useState, useEffect } from 'react';
import { fetchMetrics } from '../services/api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Metrics() {
  const [type, setType] = useState('activity_minutes');
  const [duration, setDuration] = useState('weekly');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMetrics(type, duration).then(setData).catch(console.error);
  }, [type, duration]);

  const isDaily = duration === 'daily';

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="mb-4 flex space-x-4">
        <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
          <option value="activity_minutes">Activity Minutes</option>
          <option value="sleep_hours">Sleep Hours</option>
          <option value="water_intake_liters">Water Intake</option>
        </select>
        <select value={duration} onChange={(e) => setDuration(e.target.value)} className="border p-2 rounded">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {isDaily ? (
        <div className="text-2xl font-bold">Latest: {data?.value}</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
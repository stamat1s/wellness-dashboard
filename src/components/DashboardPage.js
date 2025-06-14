import React from 'react';
import UserProfile from '../components/UserProfile';
import Metrics from '../components/Metrics';
import TipCard from '../components/TipCard';
import LogoutButton from '../components/LogoutButton';

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-end">
        <LogoutButton />
      </div>
      <UserProfile />
      <Metrics />
      <TipCard />
    </div>
  );
}
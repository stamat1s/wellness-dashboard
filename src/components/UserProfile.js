import React, { useEffect, useState } from 'react';
import { fetchUser } from '../services/api';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(setUser).catch(console.error);
  }, []);

  if (!user) return <p>Loading user...</p>;

  return (
   
   
    <div className="bg-white p-4 rounded shadow flex space-x-6 items-start">
  <div className="flex flex-col items-center">
    <img src={user.profile_picture} alt="ProfilePicture" className="w-16 h-16 rounded-full" />
    {/* <h1 className="text-sm break-all mt-1">{user.profile_picture}</h1> */}
  </div>
  <div>
    <h3 className="text-lg font-bold">{user.first_name} {user.last_name}</h3>
    <p>{user.role} - {user.team_name}, {user.department_name}</p>
    <p className="text-blue-600 font-semibold">Wellness Score: {user.wellness_score}</p>
  </div>
</div>

  );
}
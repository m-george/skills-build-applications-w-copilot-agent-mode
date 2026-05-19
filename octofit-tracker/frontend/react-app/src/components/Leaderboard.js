import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched Leaderboard:', data);
        setLeaders(data.results || data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index}>{leader.name || leader.username || `Leader ${index + 1}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
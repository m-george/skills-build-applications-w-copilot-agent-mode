import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched Teams:', data);
        setTeams(data.results || data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.name || `Team ${index + 1}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
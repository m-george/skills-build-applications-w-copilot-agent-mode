import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched Activities:', data);
        setActivities(data.results || data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
// Leaderboard.jsx
import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const data = [
    { rank: 1, name: 'Alex', rating: 125, tasksDid: 18, tasksRequested: 12, reward: 900 },
    { rank: 2, name: 'Smith', rating: 125, tasksDid: 15, tasksRequested: 12, reward: 900 },
    { rank: 3, name: 'John', rating: 98, tasksDid: 12, tasksRequested: 9, reward: 500 },
    { rank: 4, name: 'Alen', rating: 98, tasksDid: 12, tasksRequested: 9, reward: 250 },
    { rank: 5, name: 'Charlie', rating: 75, tasksDid: 11, tasksRequested: 5, reward: 200 },
  ];

  return (
    <div className="leaderboard-container">
      <h2>TaskLoop Leaderboard</h2>
      <div className="table-wrapper">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Rating points</th>
              <th>Tasks did (Number of)</th>
              <th>Tasks Requested (Number of)</th>
              <th>Reward (in respect)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.rank}>
                <td className="rank-cell">{entry.rank}</td>
                <td className="name-cell">{entry.name}</td>
                <td className="number-cell">{entry.rating}</td>
                <td className="number-cell">{entry.tasksDid}</td>
                <td className="number-cell">{entry.tasksRequested}</td>
                <td className="number-cell">{entry.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
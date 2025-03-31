// src/pages/SavedCandidates.tsx
import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('acceptedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  if (savedCandidates.length === 0) {
    return <h2>No accepted candidates yet!</h2>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name / Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((cand) => (
            <tr key={cand.login}>
              <td>
                <img src={cand.avatar_url} alt={cand.login} width="50" />
              </td>
              <td>
                {cand.name ? cand.name : cand.login} ({cand.login})
              </td>
              <td>{cand.location ? cand.location : 'N/A'}</td>
              <td>{cand.email ? cand.email : 'N/A'}</td>
              <td>{cand.company ? cand.company : 'N/A'}</td>
              <td>
                <a href={cand.html_url} target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;

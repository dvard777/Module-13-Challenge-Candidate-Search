// src/pages/CandidateSearch.tsx
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch a batch of candidate summaries when the component mounts
  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      const data = await searchGithub();
      setCandidates(data);
      setLoading(false);
    };
    fetchCandidates();
  }, []);

  // When candidates or index changes, fetch full details for the current candidate
  useEffect(() => {
    const fetchCandidateDetails = async () => {
      // If there are no candidates, do nothing
      if (candidates.length === 0) return;

      // If we have reached the end of the current batch, fetch a new batch and reset index
      if (index >= candidates.length) {
        setIndex(0);
        const data = await searchGithub();
        setCandidates(data);
        return;
      }

      setLoading(true);
      const candidateSummary = candidates[index];
      const details = await searchGithubUser(candidateSummary.login);
      setCurrentCandidate(details);
      setLoading(false);
    };

    fetchCandidateDetails();
  }, [candidates, index]);

  // Save accepted candidate to local storage
  const handleAccept = () => {
    if (currentCandidate) {
      const saved = localStorage.getItem('acceptedCandidates');
      const acceptedCandidates: Candidate[] = saved ? JSON.parse(saved) : [];
      acceptedCandidates.push(currentCandidate);
      localStorage.setItem('acceptedCandidates', JSON.stringify(acceptedCandidates));
    }
    setIndex((prev) => prev + 1);
  };

  // Move to next candidate without saving
  const handleReject = () => {
    setIndex((prev) => prev + 1);
  };

  if (loading || !currentCandidate) {
    return <h2>Loading candidate...</h2>;
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <div className="candidate-card">
        <img src={currentCandidate.avatar_url} alt={currentCandidate.login} width="100" />
        <h2>{currentCandidate.name ? currentCandidate.name : currentCandidate.login}</h2>
        <p><strong>Username:</strong> {currentCandidate.login}</p>
        <p>
          <strong>Location:</strong> {currentCandidate.location ? currentCandidate.location : 'N/A'}
        </p>
        <p>
          <strong>Email:</strong> {currentCandidate.email ? currentCandidate.email : 'N/A'}
        </p>
        <p>
          <strong>Company:</strong> {currentCandidate.company ? currentCandidate.company : 'N/A'}
        </p>
        <a href={currentCandidate.html_url} target="_blank" rel="noreferrer">
          View GitHub Profile
        </a>
      </div>
      <div className="buttons">
        <button onClick={handleReject} style={{ marginRight: '1rem' }}>
          –
        </button>
        <button onClick={handleAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;

const API_BASE = 'http://localhost:5000/api';

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) throw new Error('Failed to load project telemetry');
  return response.json();
};

export const sendAcarsMessage = async (payload) => {
  const response = await fetch(`${API_BASE}/acars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('ACARS transmission failed');
  return response.json();
};
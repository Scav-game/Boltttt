import { useState } from 'react';
import { allTeams } from './data/teams';
import TeamPage from './components/TeamPage';

function App() {
  const [activeTeamId, setActiveTeamId] = useState(allTeams[0].id);

  const activeTeam = allTeams.find(t => t.id === activeTeamId) || allTeams[0];

  return (
    <TeamPage
      team={activeTeam}
      allTeams={allTeams}
      onTeamSelect={setActiveTeamId}
    />
  );
}

export default App;

import type { TeamData } from '../types/team';
import Nav from './Nav';
import HeroSection from './HeroSection';
import Sidebar from './Sidebar';
import ScheduleStrip from './ScheduleStrip';
import RosterTable from './RosterTable';
import FullSchedule from './FullSchedule';
import DraftPicks from './DraftPicks';
import Footer from './Footer';

interface TeamPageProps {
  team: TeamData;
  allTeams: TeamData[];
  onTeamSelect: (id: string) => void;
}

export default function TeamPage({ team, allTeams, onTeamSelect }: TeamPageProps) {
  return (
    <div className="min-h-screen" style={{ background: team.colors.bgDeep }}>
      <Nav team={team} onTeamSelect={onTeamSelect} allTeams={allTeams} />

      {/* Hero + Sidebar combined section */}
      <div className="relative">
        <div className="absolute inset-0">
          <HeroSection team={team} />
        </div>
        {/* Sidebar overlay — right 35% */}
        <div className="relative z-20 h-screen min-h-[700px] hidden lg:block">
          <div className="absolute right-0 top-0 bottom-0 w-[35%] pt-20 pb-8 pr-8 pl-4">
            <Sidebar team={team} />
          </div>
        </div>
      </div>

      {/* Schedule strip */}
      <ScheduleStrip team={team} />

      {/* Below the fold */}
      <RosterTable team={team} />
      <FullSchedule team={team} />
      <DraftPicks team={team} />
      <Footer team={team} />
    </div>
  );
}

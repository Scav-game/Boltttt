import type { TeamData } from '../types/team';

interface NavProps {
  team: TeamData;
  onTeamSelect: (id: string) => void;
  allTeams: TeamData[];
}

export default function Nav({ team, onTeamSelect, allTeams }: NavProps) {
  const links = ['HOME', 'TEAM', 'SCHEDULE', 'NEWS', 'SHOP', 'CONTACT'];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-white/10"
      style={{ background: `${team.colors.bgDeep}F0`, backdropFilter: 'blur(12px)' }}
    >
      {/* Logo + Name + Team Switcher */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onTeamSelect(team.id)}
          className="flex items-center gap-3 group"
        >
          <img
            src={team.logoPath}
            alt={team.name}
            className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-200"
          />
          <div className="hidden md:flex flex-col leading-none">
            <span className="text-xs font-bold tracking-widest text-white/50 uppercase">MFGA</span>
            <span className="text-sm font-black tracking-wider uppercase" style={{ color: team.colors.accent }}>
              {team.name}
            </span>
          </div>
        </button>

        {/* Team switcher dropdown */}
        <div className="relative group hidden lg:block">
          <button className="text-xs text-white/40 hover:text-white/70 tracking-wider uppercase transition-colors border border-white/10 rounded px-2 py-1">
            SWITCH TEAM
          </button>
          <div className="absolute top-full left-0 mt-1 w-56 rounded-lg overflow-hidden border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            style={{ background: team.colors.bgDeep }}>
            {allTeams.map(t => (
              <button
                key={t.id}
                onClick={() => onTeamSelect(t.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors"
              >
                <img src={t.logoPath} alt={t.name} className="h-7 w-7 object-contain flex-shrink-0" />
                <span className="text-xs font-bold tracking-wide text-white/80 uppercase">{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="text-xs font-bold tracking-widest transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            onMouseEnter={e => (e.currentTarget.style.color = team.colors.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >
            {link}
          </a>
        ))}
      </div>

      {/* League badge */}
      <div className="flex items-center gap-2">
        <div className="text-right hidden sm:block">
          <div className="text-xs font-black tracking-widest" style={{ color: '#D4A017' }}>MFGA</div>
          <div className="text-xs text-white/40 tracking-wider">LEAGUE</div>
        </div>
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center font-black text-xs border-2"
          style={{ borderColor: '#D4A017', color: '#D4A017', background: 'transparent' }}
        >
          M
        </div>
      </div>
    </nav>
  );
}

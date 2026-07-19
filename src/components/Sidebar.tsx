import type { TeamData } from '../types/team';

interface SidebarProps {
  team: TeamData;
}

export default function Sidebar({ team }: SidebarProps) {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* NEXT GAME */}
      <div
        className="rounded-lg p-5 border border-white/10"
        style={{ background: `${team.colors.primary}18` }}
      >
        <div
          className="text-xs font-black tracking-[0.25em] uppercase mb-4 pb-2 border-b border-white/10"
          style={{ color: team.colors.accent }}
        >
          NEXT GAME
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-center gap-2">
            <img src={team.logoPath} alt={team.name} className="h-14 w-14 object-contain" />
            <span className="text-xs font-black tracking-wider text-white/60 text-center leading-tight max-w-[80px]">
              {team.nameLine1}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-white/20 tracking-widest">VS</span>
            <div
              className="mt-1 w-8 h-px"
              style={{ background: team.colors.accent }}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src={team.nextGame.opponentLogo || '/assets/images/teams/pakistan-bombers/Pakitsaan_Bombers.png'}
              alt={team.nextGame.opponent}
              className="h-14 w-14 object-contain"
            />
            <span className="text-xs font-black tracking-wider text-white/60 text-center leading-tight max-w-[80px]">
              {team.nextGame.opponent}
            </span>
          </div>
        </div>
        <div className="text-center border-t border-white/10 pt-3">
          <div className="font-black text-white text-sm tracking-wider">{team.nextGame.date}</div>
          <div className="text-xs text-white/50 mt-0.5">{team.nextGame.time} · {team.nextGame.city}</div>
        </div>
      </div>

      {/* STANDINGS / STATS */}
      <div
        className="rounded-lg p-5 border border-white/10"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <div
          className="text-xs font-black tracking-[0.25em] uppercase mb-4 pb-2 border-b border-white/10"
          style={{ color: team.colors.accent }}
        >
          STANDINGS
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'RECORD', value: team.record },
            { label: 'PTS SCORED', value: team.pointsScored.toLocaleString() },
            { label: 'DIV RANK', value: `#${team.divisionRank}` },
            { label: 'WIN STREAK', value: `${team.winStreak}W` },
          ].map(stat => (
            <div
              key={stat.label}
              className="rounded p-3 flex flex-col gap-1"
              style={{ background: `${team.colors.primary}22` }}
            >
              <span className="text-xs text-white/40 tracking-widest font-semibold">{stat.label}</span>
              <span className="text-lg font-black text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SHOP THE LOOK */}
      <div
        className="rounded-lg p-5 border border-white/10 flex-1"
        style={{ background: 'rgba(255,255,255,0.03)' }}
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
          <div
            className="text-xs font-black tracking-[0.25em] uppercase"
            style={{ color: team.colors.accent }}
          >
            SHOP THE LOOK
          </div>
          <a
            href="#"
            className="text-xs tracking-widest uppercase hover:text-white transition-colors"
            style={{ color: team.colors.accent + '99' }}
          >
            VIEW ALL
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {team.merchandise.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group cursor-pointer rounded-lg p-2 hover:bg-white/5 transition-colors"
            >
              <div
                className="h-14 w-14 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
                style={{ background: `${team.colors.primary}33` }}
              >
                <img src={item.image} alt={item.name} className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white/80 truncate">{item.name}</div>
                <div className="text-xs font-black mt-0.5" style={{ color: team.colors.accent }}>{item.price}</div>
              </div>
              <svg className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

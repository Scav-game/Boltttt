import type { TeamData } from '../types/team';

interface ScheduleStripProps {
  team: TeamData;
}

export default function ScheduleStrip({ team }: ScheduleStripProps) {
  const upcoming = team.schedule.filter(g => !g.result).slice(0, 5);
  const display = upcoming.length > 0 ? upcoming : team.schedule.slice(-5);

  return (
    <div
      className="w-full border-y border-white/10"
      style={{ background: `${team.colors.bgDeep}EE` }}
    >
      <div className="flex items-stretch overflow-x-auto">
        {/* Label */}
        <div
          className="flex-shrink-0 flex items-center px-6 py-4 border-r border-white/10"
          style={{ background: `${team.colors.primary}22` }}
        >
          <span
            className="font-black text-xs tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ color: team.colors.accent }}
          >
            SCHEDULE
          </span>
        </div>

        {/* Matchup cells */}
        {display.map((game, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col justify-center px-5 py-3 border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group min-w-[160px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-white/30 font-bold">WK {game.week}</span>
              {game.result && (
                <span
                  className="text-xs font-black px-1.5 rounded-sm"
                  style={{
                    background: game.result === 'W' ? '#16a34a33' : '#dc262633',
                    color: game.result === 'W' ? '#4ade80' : '#f87171',
                  }}
                >
                  {game.result}
                </span>
              )}
            </div>
            <div className="text-xs font-black text-white/80 group-hover:text-white transition-colors truncate">
              VS {game.opponent}
            </div>
            <div className="text-xs text-white/40 mt-0.5">
              {game.date} · {game.location}
            </div>
            {game.score && (
              <div className="text-xs font-bold mt-0.5" style={{ color: team.colors.accent }}>
                {game.score}
              </div>
            )}
          </div>
        ))}

        {/* View all */}
        <div className="flex-shrink-0 flex items-center px-6 ml-auto">
          <a
            href="#schedule"
            className="text-xs font-black tracking-widest uppercase whitespace-nowrap hover:text-white transition-colors"
            style={{ color: team.colors.accent + 'AA' }}
          >
            VIEW FULL SCHEDULE →
          </a>
        </div>
      </div>
    </div>
  );
}

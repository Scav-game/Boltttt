import type { TeamData } from '../types/team';

interface FullScheduleProps {
  team: TeamData;
}

export default function FullSchedule({ team }: FullScheduleProps) {
  const wins = team.schedule.filter(g => g.result === 'W').length;
  const losses = team.schedule.filter(g => g.result === 'L').length;

  return (
    <section id="schedule" className="py-16 px-6 md:px-16" style={{ background: `${team.colors.bg}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: `${team.colors.primary}44` }} />
          <h2 className="text-2xl font-black tracking-widest uppercase text-white">FULL SCHEDULE</h2>
          <div className="h-px flex-1" style={{ background: `${team.colors.primary}44` }} />
        </div>

        {/* Summary bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'WINS', value: wins, color: '#4ade80' },
            { label: 'LOSSES', value: losses, color: '#f87171' },
            { label: 'REMAINING', value: 14 - wins - losses, color: team.colors.accent },
          ].map(s => (
            <div
              key={s.label}
              className="rounded-lg p-4 text-center border border-white/10"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs font-black tracking-widest text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden border border-white/10">
          <table className="w-full">
            <thead>
              <tr style={{ background: `${team.colors.primary}33` }}>
                <th className="text-left py-3 pl-4 text-xs font-black tracking-widest text-white/50 uppercase w-12">WK</th>
                <th className="text-left py-3 px-3 text-xs font-black tracking-widest text-white/50 uppercase">OPPONENT</th>
                <th className="text-left py-3 px-3 text-xs font-black tracking-widest text-white/50 uppercase hidden md:table-cell">DATE</th>
                <th className="text-left py-3 px-3 text-xs font-black tracking-widest text-white/50 uppercase hidden lg:table-cell">LOCATION</th>
                <th className="text-right py-3 pr-4 text-xs font-black tracking-widest text-white/50 uppercase">RESULT</th>
              </tr>
            </thead>
            <tbody>
              {team.schedule.map((game, i) => (
                <tr
                  key={i}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  style={!game.result ? { background: `${team.colors.primary}0A` } : {}}
                >
                  <td className="py-3 pl-4">
                    <span className="text-sm font-black text-white/30">{game.week}</span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="text-sm font-bold text-white/80">{game.opponent}</span>
                  </td>
                  <td className="py-3 px-3 hidden md:table-cell">
                    <span className="text-sm text-white/40">{game.date}</span>
                  </td>
                  <td className="py-3 px-3 hidden lg:table-cell">
                    <span className="text-xs text-white/30">{game.location}</span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    {game.result ? (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-xs text-white/40">{game.score}</span>
                        <span
                          className="text-sm font-black w-7 h-7 rounded-sm flex items-center justify-center"
                          style={{
                            background: game.result === 'W' ? '#16a34a33' : '#dc262633',
                            color: game.result === 'W' ? '#4ade80' : '#f87171',
                          }}
                        >
                          {game.result}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-xs text-white/30">{game.time}</span>
                        <span
                          className="text-xs font-black px-2 py-0.5 rounded-sm tracking-wider"
                          style={{ background: `${team.colors.accent}22`, color: team.colors.accent }}
                        >
                          UPCOMING
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

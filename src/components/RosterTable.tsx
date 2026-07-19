import type { TeamData, RosterPlayer } from '../types/team';

interface RosterTableProps {
  team: TeamData;
}

function PlayerRow({ player, accent, isStarter }: { player: RosterPlayer; accent: string; isStarter: boolean }) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
      <td className="py-3 pl-4 pr-2">
        {isStarter ? (
          <span className="text-xs font-black px-2 py-0.5 rounded-sm" style={{ background: accent + '33', color: accent }}>
            START
          </span>
        ) : (
          <span className="text-xs font-bold text-white/25 px-2 py-0.5">BENCH</span>
        )}
      </td>
      <td className="py-3 px-3">
        <span
          className="text-xs font-black tracking-wider px-2 py-1 rounded"
          style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
        >
          {player.position}
        </span>
      </td>
      <td className="py-3 px-3">
        <span className="text-sm font-bold text-white group-hover:text-white transition-colors">
          {player.name}
        </span>
      </td>
      <td className="py-3 px-3">
        <span className="text-xs font-semibold text-white/40 tracking-wider">{player.team}</span>
      </td>
      <td className="py-3 px-3 text-right pr-4">
        {player.points !== undefined && (
          <span className="text-sm font-black" style={{ color: accent }}>
            {player.points}
            <span className="text-xs font-normal text-white/30 ml-1">avg</span>
          </span>
        )}
      </td>
    </tr>
  );
}

export default function RosterTable({ team }: RosterTableProps) {
  return (
    <section id="roster" className="py-16 px-6 md:px-16" style={{ background: team.colors.bgDeep }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: `${team.colors.primary}44` }} />
          <h2 className="text-2xl font-black tracking-widest uppercase text-white">ROSTER</h2>
          <div className="h-px flex-1" style={{ background: `${team.colors.primary}44` }} />
        </div>

        <div className="rounded-lg overflow-hidden border border-white/10">
          <div className="px-4 py-3" style={{ background: `${team.colors.primary}33` }}>
            <span className="text-xs font-black tracking-widest uppercase" style={{ color: team.colors.accent }}>
              STARTERS — WEEK {team.schedule.filter(g => !g.result).length > 0 ? team.schedule.find(g => !g.result)?.week : 14}
            </span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pl-4 pr-2 text-xs font-black tracking-widest text-white/30 uppercase w-20">STATUS</th>
                <th className="text-left py-2 px-3 text-xs font-black tracking-widest text-white/30 uppercase w-16">POS</th>
                <th className="text-left py-2 px-3 text-xs font-black tracking-widest text-white/30 uppercase">PLAYER</th>
                <th className="text-left py-2 px-3 text-xs font-black tracking-widest text-white/30 uppercase w-16">NFL</th>
                <th className="text-right py-2 px-3 pr-4 text-xs font-black tracking-widest text-white/30 uppercase w-24">AVG PTS</th>
              </tr>
            </thead>
            <tbody>
              {team.starters.map((p, i) => (
                <PlayerRow key={i} player={p} accent={team.colors.accent} isStarter={true} />
              ))}
            </tbody>
          </table>

          <div className="px-4 py-3 border-t border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <span className="text-xs font-black tracking-widest uppercase text-white/40">BENCH</span>
          </div>
          <table className="w-full">
            <tbody>
              {team.bench.map((p, i) => (
                <PlayerRow key={i} player={p} accent={team.colors.accent} isStarter={false} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

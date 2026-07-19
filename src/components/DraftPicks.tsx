import type { TeamData } from '../types/team';

interface DraftPicksProps {
  team: TeamData;
}

export default function DraftPicks({ team }: DraftPicksProps) {
  const years = [...new Set(team.draftPicks.map(p => p.year))].sort();

  return (
    <section className="py-16 px-6 md:px-16 border-t border-white/10" style={{ background: team.colors.bgDeep }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: `${team.colors.primary}44` }} />
          <h2 className="text-2xl font-black tracking-widest uppercase text-white">DRAFT PICKS</h2>
          <div className="h-px flex-1" style={{ background: `${team.colors.primary}44` }} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {years.map(year => (
            <div
              key={year}
              className="rounded-lg overflow-hidden border border-white/10"
            >
              <div
                className="px-5 py-3"
                style={{ background: `${team.colors.primary}33` }}
              >
                <span className="font-black text-lg tracking-widest text-white">{year}</span>
                <span className="text-xs font-bold text-white/40 ml-2 tracking-widest">NFL DRAFT</span>
              </div>
              <div>
                {team.draftPicks.filter(p => p.year === year).map((pick, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-4 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-8 w-8 rounded-sm flex items-center justify-center font-black text-sm"
                        style={{ background: `${team.colors.accent}33`, color: team.colors.accent }}
                      >
                        R{pick.round}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Round {pick.round}</div>
                        {pick.from && (
                          <div className="text-xs text-white/40">Via {pick.from}</div>
                        )}
                      </div>
                    </div>
                    <span
                      className="text-xs font-black tracking-widest px-2 py-1 rounded-sm"
                      style={{ background: `${team.colors.accent}22`, color: team.colors.accent }}
                    >
                      OWNED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

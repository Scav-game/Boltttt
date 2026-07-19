import type { TeamData } from '../types/team';

interface FooterProps {
  team: TeamData;
}

export default function Footer({ team }: FooterProps) {
  return (
    <footer
      className="border-t border-white/10 py-10 px-6 md:px-16"
      style={{ background: team.colors.bgDeep }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={team.logoPath} alt={team.name} className="h-12 w-12 object-contain" />
          <div>
            <div className="font-black text-white tracking-wider uppercase text-sm">{team.name}</div>
            <div className="text-xs text-white/30 tracking-widest">{team.stadium} · {team.division} Division</div>
          </div>
        </div>

        <div className="text-center">
          <div className="font-black tracking-[0.4em] text-sm" style={{ color: '#D4A017' }}>MFGA</div>
          <div className="text-xs text-white/20 tracking-widest mt-0.5">MAKE FANTASY GREAT AGAIN</div>
        </div>

        <div className="text-xs text-white/20 tracking-wider text-center md:text-right">
          <div>© 2026 MFGA Fantasy League</div>
          <div className="mt-0.5">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}

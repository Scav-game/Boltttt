import type { TeamData } from '../types/team';

interface HeroSectionProps {
  team: TeamData;
}

const COLOR_MAP: Record<string, string> = {
  white: '#FFFFFF',
  accent: 'accent',
  secondary: 'secondary',
  primary: 'primary',
};

function resolveColor(key: string | undefined, team: TeamData): string {
  const k = key ?? 'accent';
  if (k === 'white') return '#FFFFFF';
  return team.colors[k as 'accent' | 'secondary' | 'primary'];
}

export default function HeroSection({ team }: HeroSectionProps) {
  const line1Color = resolveColor(team.nameLine1Color, team);
  const line2Color = resolveColor(team.nameLine2Color, team);
  const line1Size = team.nameLine1Size ?? 'clamp(4rem, 10vw, 9rem)';
  const line2Size = team.nameLine2Size ?? 'clamp(4rem, 10vw, 9rem)';
  const heroObjectPosition = team.heroObjectPosition ?? 'center center';

  return (
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden flex">
      {/* Background hero image — right side dominant */}
      <div className="absolute inset-0">
        <img
          src={team.heroImagePath}
          alt={team.name}
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: heroObjectPosition }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(90deg, ${team.colors.bgDeep} 0%, ${team.colors.bgDeep}CC 30%, ${team.colors.bgDeep}44 60%, transparent 80%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(0deg, ${team.colors.bgDeep} 0%, transparent 40%)`
        }} />
        {/* Color tone overlay */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 70% 50%, ${team.colors.primary}22 0%, transparent 60%)`
        }} />
      </div>

      {/* Content — left column */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 pt-24 pb-8 w-full md:w-[65%] max-w-4xl">
        {/* Division badge */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="h-px flex-1 max-w-12"
            style={{ background: team.colors.accent }}
          />
          <span
            className="text-xs font-black tracking-[0.3em] uppercase px-3 py-1 rounded-sm border"
            style={{ color: team.colors.accent, borderColor: `${team.colors.accent}44`, background: `${team.colors.accent}11` }}
          >
            {team.division} DIVISION
          </span>
          <div className="h-px flex-1 max-w-12" style={{ background: `${team.colors.accent}44` }} />
        </div>

        {/* Team name — massive display */}
        <div className="mb-6">
          <h1
            className="font-black uppercase leading-none tracking-tighter"
            style={{
              fontSize: line1Size,
              color: line1Color,
              textShadow: `0 0 60px ${team.colors.primary}88`,
              fontFamily: '"Impact", "Arial Black", sans-serif',
            }}
          >
            {team.nameLine1}
          </h1>
          <h1
            className="font-black uppercase leading-none tracking-tighter"
            style={{
              fontSize: line2Size,
              color: line2Color,
              textShadow: `0 0 60px ${line2Color === '#FFFFFF' ? team.colors.primary : line2Color}88`,
              fontFamily: '"Impact", "Arial Black", sans-serif',
            }}
          >
            {team.nameLine2}
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="text-base md:text-xl font-semibold tracking-widest uppercase mb-3"
          style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.2em' }}
        >
          {team.tagline}
        </p>

        {/* Stadium */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-px w-8" style={{ background: team.colors.accent }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: team.colors.accent + 'AA' }}>
            {team.stadium} — {team.location}
          </span>
        </div>

        {/* Record pill */}
        <div className="flex items-center gap-4 mb-10">
          <div
            className="px-5 py-2 rounded-sm font-black text-lg tracking-widest"
            style={{ background: `${team.colors.primary}33`, border: `1px solid ${team.colors.primary}66`, color: '#FFFFFF' }}
          >
            {team.record} <span className="text-sm font-semibold text-white/50">RECORD</span>
          </div>
          <div
            className="px-5 py-2 rounded-sm font-black text-lg tracking-widest"
            style={{ background: `${team.colors.accent}22`, border: `1px solid ${team.colors.accent}44`, color: team.colors.accent }}
          >
            #{team.divisionRank} <span className="text-sm font-semibold" style={{ color: `${team.colors.accent}88` }}>DIV</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#roster"
            className="group flex items-center gap-3 px-8 py-4 font-black text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: team.colors.accent,
              color: team.colors.bgDeep,
            }}
          >
            VIEW TEAM
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#schedule"
            className="flex items-center gap-3 px-8 py-4 font-black text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
            style={{
              border: `1px solid rgba(255,255,255,0.3)`,
              color: '#FFFFFF',
            }}
          >
            VIEW SCHEDULE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-xs tracking-widest uppercase text-white/30">SCROLL</span>
        <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

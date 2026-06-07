/* ============================================================
   SumanTV Story — Shared components & icons
   ============================================================ */
const { useState, useEffect, useRef } = React;

/* ---------------- Icons (stroke, 24 grid) ---------------- */
const IPATHS = {
  arrow:   'M5 12h14M13 6l6 6-6 6',
  check:   'M20 6L9 17l-5-5',
  lock:    'M6 11h12v9H6zM8 11V8a4 4 0 018 0v3',
  shield:  'M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z',
  play:    'M7 5l12 7-12 7z',
  camera:  'M4 8h3l1.5-2h7L17 8h3v11H4zM12 16.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z',
  upload:  'M12 16V4M7 9l5-5 5 5M5 20h14',
  download:'M12 4v12M7 11l5 5 5-5M5 20h14',
  share:   'M16 6l-4-4-4 4M12 2v13M5 12v8h14v-8',
  star:    'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  heart:   'M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z',
  chevron: 'M9 6l6 6-6 6',
  chevdown:'M6 9l6 6 6-6',
  x:       'M6 6l12 12M18 6L6 18',
  info:    'M12 8h.01M11 12h1v5h1M12 3a9 9 0 100 18 9 9 0 000-18z',
  music:   'M9 18V5l10-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM19 16a3 3 0 11-6 0 3 3 0 016 0z',
  clock:   'M12 7v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z',
  mail:    'M3 6h18v12H3zM3 7l9 6 9-6',
  globe:   'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18',
  sparkle: 'M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z',
  film:    'M4 4h16v16H4zM4 9h16M4 15h16M8 4v16M16 4v16',
  bell:    'M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0',
  user:    'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6',
  zap:     'M13 2L4 14h7l-1 8 9-12h-7z',
  gift:    'M20 12v9H4v-9M2 7h20v5H2zM12 7v14M12 7S9 2 6.5 4 9 7 12 7zM12 7s3-5 5.5-3S15 7 12 7z',
  faceid:  'M7 4H4v3M17 4h3v3M7 20H4v-3M17 20h3v-3M9 10v1M15 10v1M9 15s1 1.5 3 1.5 3-1.5 3-1.5',
  trash:   'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  eye:     'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z',
  refresh: 'M21 12a9 9 0 11-3-6.7M21 4v4h-4',
  image:   'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M8.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  upi:     'M7 4l-3 16M11 4l-3 16M14 6l4 6-4 6',
  card:    'M3 6h18v12H3zM3 10h18',
  wallet:  'M3 7h15a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2zM17 12h3M16 7V5a2 2 0 00-2-2H6',
};
function Icon({ name, size = 22, stroke = 2, color = 'currentColor', fill = 'none', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ flex: '0 0 auto', ...style }}>
      <path d={IPATHS[name] || ''} />
    </svg>
  );
}
// brand glyphs (filled)
function WhatsAppGlyph({ size = 20, color = 'currentColor' }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.6 2 .8 2.7.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2z"/></svg>);
}
function InstaGlyph({ size = 20, color = 'currentColor' }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none"/></svg>);
}

/* ---------------- Brand wordmark (real logo) ---------------- */
function Wordmark({ size = 18, light = false }) {
  const ink = light ? '#fff' : 'var(--ink-900)';
  const chip = size * 2.05;
  return (
    <div className="row" style={{ gap: 9, alignItems: 'center' }}>
      <div style={{
        width: chip, height: chip, borderRadius: chip * 0.26, flex: '0 0 auto',
        background: '#fff', padding: chip * 0.1, overflow: 'hidden',
        boxShadow: light ? '0 2px 10px rgba(0,0,0,.28)' : 'var(--sh-sm)',
        border: light ? '1px solid rgba(255,255,255,.5)' : '1px solid var(--line)'
      }}>
        <img src={(typeof window!=='undefined' && window.__resources && window.__resources.logo) || "sumantv-logo.jpg"} alt="SumanTV" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
      </div>
      <div className="col" style={{ lineHeight: 1, gap: 2 }}>
        <span className="display" style={{ fontSize: size, color: ink, letterSpacing: '.01em' }}>SumanTV</span>
        <span style={{ fontSize: size * 0.46, letterSpacing: '.30em', textTransform: 'uppercase',
          color: light ? 'var(--gold-300)' : 'var(--gold-700)', fontWeight: 700 }}>Story</span>
      </div>
    </div>
  );
}

/* ---------------- Status bar ---------------- */
function StatusBar({ dark = false }) {
  const c = dark ? '#fff' : 'var(--ink-900)';
  return (
    <div className="statusbar" style={{ color: c }}>
      <span>9:41</span>
      <div className="sb-icons">
        <svg width="17" height="11" viewBox="0 0 17 11" fill={c}><rect x="0" y="6" width="3" height="5" rx="1"/><rect x="4.5" y="4" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="9" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill={c}><path d="M8 2.5C10 2.5 11.7 3.2 13 4.4l1.2-1.3C12.6 1.6 10.4.7 8 .7S3.4 1.6 1.8 3.1L3 4.4C4.3 3.2 6 2.5 8 2.5z" opacity=".9"/><path d="M8 6c1 0 1.9.4 2.6 1l1.2-1.3C10.7 4.7 9.4 4.2 8 4.2s-2.7.5-3.8 1.5L5.4 7C6.1 6.4 7 6 8 6z"/><circle cx="8" cy="9" r="1.5"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} opacity=".4"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill={c}/><rect x="23" y="4" width="1.5" height="4" rx="1" fill={c} opacity=".5"/></svg>
      </div>
    </div>
  );
}

/* ---------------- Language switcher ---------------- */
function LangSwitcher({ lang, setLang, dark = false }) {
  const [open, setOpen] = useState(false);
  const cur = window.LANGS.find(l => l.code === lang);
  return (
    <div style={{ position: 'relative' }}>
      <button className="row gap-6" onClick={() => setOpen(o => !o)}
        style={{ background: dark ? 'rgba(255,255,255,.16)' : 'var(--paper)',
          border: dark ? '1px solid rgba(255,255,255,.25)' : '1px solid var(--line-2)',
          color: dark ? '#fff' : 'var(--ink-900)', borderRadius: 'var(--r-pill)',
          padding: '7px 12px', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13, cursor: 'pointer',
          backdropFilter: 'blur(8px)' }}>
        <Icon name="globe" size={15} stroke={2} />
        <span>{cur.native}</span>
        <Icon name="chevdown" size={13} stroke={2.4} />
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 90 }} />
          <div className="card screen-in" style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)',
            zIndex: 91, padding: 6, minWidth: 150, borderRadius: 'var(--r-md)' }}>
            {window.LANGS.map(l => (
              <button key={l.code} onClick={() => { setLang(l.code); setOpen(false); }}
                className="row between" style={{ width: '100%', gap: 10, padding: '10px 12px',
                  background: l.code === lang ? 'var(--cream-100)' : 'transparent', border: 'none',
                  borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>
                <span className="col" style={{ alignItems: 'flex-start', lineHeight: 1.2 }}>
                  <span style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--ink-900)' }}>{l.native}</span>
                  <span className="tiny muted">{l.label}</span>
                </span>
                {l.code === lang && <Icon name="check" size={16} color="var(--c-primary)" stroke={2.6} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- Theme motif thumbnail (drawn placeholder) ---------------- */
function MotifThumb({ theme, h = 150, round = 0 }) {
  const { from, to, motif } = theme;
  const gid = 'g_' + theme.id;
  return (
    <div style={{ position: 'relative', width: '100%', height: h, overflow: 'hidden',
      borderRadius: round, background: `linear-gradient(140deg, ${from}, ${to})` }}>
      <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={gid} cx="50%" cy="38%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,.32)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="300" height="200" fill={`url(#${gid})`} />
        {/* soft bokeh dots */}
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx={20 + i * 42} cy={20 + (i % 3) * 14} r={3 + (i % 3)} fill="rgba(255,240,200,.5)" />
        ))}
        <MotifArt motif={motif} />
        {/* vignette */}
        <rect width="300" height="200" fill="url(#vig)" />
        <radialGradient id="vig" cx="50%" cy="42%" r="75%">
          <stop offset="60%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(40,8,14,.35)" />
        </radialGradient>
      </svg>
      {/* photo-frame hint */}
      <div style={{ position: 'absolute', left: 14, bottom: 12, display: 'flex', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,255,255,.22)',
            border: '1.5px solid rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="user" size={13} color="rgba(255,255,255,.85)" stroke={2} />
          </div>
        ))}
      </div>
    </div>
  );
}
function MotifArt({ motif }) {
  const g = 'rgba(255,236,196,.92)';
  switch (motif) {
    case 'diya':
      return (<g>
        {[80, 150, 220].map((x, i) => (<g key={i} transform={`translate(${x},${135 + (i === 1 ? -6 : 0)})`}>
          <ellipse cx="0" cy="10" rx="20" ry="7" fill="rgba(120,30,20,.55)" />
          <path d="M-20 8 Q0 20 20 8 Q14 14 0 14 Q-14 14 -20 8Z" fill={g} />
          <path d="M0 8 q3 -16 0 -22 q-3 6 0 22Z" fill="#FFE08A" />
          <circle cx="0" cy="-12" r="9" fill="rgba(255,200,80,.45)" />
        </g>))}
      </g>);
    case 'cake':
      return (<g transform="translate(150,120)">
        <rect x="-42" y="0" width="84" height="38" rx="7" fill={g} />
        <rect x="-42" y="-18" width="84" height="22" rx="6" fill="rgba(255,255,255,.85)" />
        {[-28, -14, 0, 14, 28].map((x, i) => (<g key={i}><rect x={x - 1.5} y="-34" width="3" height="16" fill="#fff" /><circle cx={x} cy="-38" r="4" fill="#FFD36A" /></g>))}
        <path d="M-50 -2 q12 -10 0 0 M50 -2 q-12 -10 0 0" fill="none" />
      </g>);
    case 'rings':
      return (<g transform="translate(150,100)" fill="none" stroke={g} strokeWidth="6">
        <circle cx="-16" cy="0" r="26" /><circle cx="16" cy="0" r="26" />
        <path d="M-30 -34 l4 8 l4 -8" fill={g} stroke="none" />
      </g>);
    case 'journey':
      return (<g transform="translate(0,0)" fill="none" stroke={g} strokeWidth="4" strokeDasharray="2 9">
        <path d="M20 160 C90 120 110 90 150 100 S230 70 285 40" />
        <g stroke="none" fill={g}><circle cx="20" cy="160" r="6" /><circle cx="150" cy="100" r="6" /><circle cx="285" cy="40" r="6" /></g>
      </g>);
    case 'star':
      return (<g transform="translate(150,100)" fill={g}>
        <path d="M0 -34 L9 -10 L34 -10 L14 6 L21 32 L0 16 L-21 32 L-14 6 L-34 -10 L-9 -10Z" />
      </g>);
    case 'heart':
      return (<g transform="translate(150,96)" fill={g}>
        <path d="M0 36 C-44 6 -34 -28 -8 -20 C-2 -18 0 -12 0 -12 C0 -12 2 -18 8 -20 C34 -28 44 6 0 36Z" />
      </g>);
    default: return null;
  }
}

/* ---------------- Sample video preview tile ---------------- */
function VideoTile({ theme, h = 200, playing = false, round = 18 }) {
  return (
    <div style={{ position: 'relative', borderRadius: round, overflow: 'hidden', boxShadow: 'var(--sh-lg)' }}>
      <MotifThumb theme={theme} h={h} round={0} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'rgba(255,255,255,.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--sh-lg)',
          transform: playing ? 'scale(.9)' : 'scale(1)', transition: 'transform .2s' }}>
          <Icon name={playing ? 'film' : 'play'} size={24} color="var(--c-primary)" fill={playing ? 'none' : 'var(--c-primary)'} stroke={playing ? 2 : 0} style={{ marginLeft: playing ? 0 : 3 }} />
        </div>
      </div>
      {/* watermark */}
      <div style={{ position: 'absolute', right: 10, bottom: 9, display: 'flex', alignItems: 'center', gap: 4,
        background: 'rgba(0,0,0,.28)', padding: '3px 8px', borderRadius: 999, backdropFilter: 'blur(4px)' }}>
        <Icon name="play" size={9} color="var(--gold-300)" fill="var(--gold-300)" stroke={0} />
        <span style={{ color: '#fff', fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em' }}>SumanTV</span>
      </div>
    </div>
  );
}

/* ---------------- Desktop/web side panel ---------------- */
function FauxQR({ size = 92 }) {
  const cells = 11;
  const seed = [0,1,1,0,1,0,1,1,0,1,1, 1,0,1,1,0,1,0,0,1,0,1, 0,1,0,1,1,1,0,1,1,0,0,
    1,1,0,0,1,0,1,1,0,1,1, 0,0,1,1,0,1,1,0,1,0,1, 1,0,1,0,1,0,0,1,0,1,0,
    0,1,1,0,0,1,1,0,1,1,1, 1,1,0,1,1,0,0,1,0,0,1, 0,0,1,0,1,1,1,0,1,1,0,
    1,0,1,1,0,0,1,1,0,1,0, 1,1,0,1,0,1,0,1,1,0,1];
  const g = size / cells;
  return (
    <div style={{ width: size, height: size, background: '#fff', borderRadius: 12, padding: 7, boxShadow: 'var(--sh-md)' }}>
      <svg viewBox={`0 0 ${cells} ${cells}`} style={{ width: '100%', height: '100%' }}>
        {seed.map((v, i) => v ? <rect key={i} x={i % cells} y={Math.floor(i / cells)} width="1" height="1" fill="var(--maroon-800)" /> : null)}
        {/* finder squares */}
        {[[0,0],[cells-3,0],[0,cells-3]].map(([x,y],i)=>(
          <g key={'f'+i}><rect x={x} y={y} width="3" height="3" fill="none" stroke="var(--maroon-800)" strokeWidth="0.6"/><rect x={x+1} y={y+1} width="1" height="1" fill="var(--c-primary)"/></g>
        ))}
      </svg>
    </div>
  );
}
function WebPanel({ lang, t }) {
  return (
    <div className="web-panel">
      <Wordmark size={26} light />
      <div style={{ marginTop: 30 }}>
        <span className="badge badge--solid-gold" style={{ fontSize: 11 }}>
          <Icon name="star" size={12} fill="currentColor" stroke={0} /> {t('brand_by')} · India’s #1 network
        </span>
        <h1 className="display" style={{ fontSize: 50, color: '#fff', marginTop: 18, lineHeight: 1.04,
          textWrap: 'balance', textShadow: '0 2px 30px rgba(40,8,14,.5)' }}>{t('hero_title')}</h1>
        <p style={{ color: 'rgba(255,246,235,.9)', fontSize: 18, lineHeight: 1.55, marginTop: 18, maxWidth: 440, textWrap: 'pretty' }}>
          {t('hero_sub')}
        </p>
      </div>
      <div className="col gap-12" style={{ marginTop: 28 }}>
        {[['gift', 'how_1'], ['camera', 'how_2'], ['film', 'how_3']].map(([ic, k], i) => (
          <div key={k} className="row gap-12" style={{ alignItems: 'center' }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, flex: '0 0 auto', background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={ic} size={19} color="var(--gold-300)" stroke={2} />
            </div>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>
              <span style={{ color: 'var(--gold-300)', fontFamily: 'var(--font-display)', marginRight: 8 }}>{i + 1}</span>{t(k)}
            </span>
          </div>
        ))}
      </div>
      <div className="row gap-16" style={{ marginTop: 34, alignItems: 'center' }}>
        <FauxQR size={96} />
        <div className="col" style={{ gap: 8 }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>Scan to create on your phone</span>
          <div className="row gap-8">
            <span className="badge" style={{ background: 'rgba(0,0,0,.35)', color: '#fff', border: '1px solid rgba(255,255,255,.25)' }}><Icon name="play" size={11} color="#fff" fill="#fff" stroke={0} /> Google Play</span>
            <span className="badge" style={{ background: 'rgba(0,0,0,.35)', color: '#fff', border: '1px solid rgba(255,255,255,.25)' }}><Icon name="download" size={11} color="#fff" stroke={2} /> App Store</span>
          </div>
          <div className="row gap-10" style={{ marginTop: 4 }}>
            <span className="row gap-4" style={{ color: 'rgba(255,246,235,.8)', fontSize: 12.5, fontWeight: 600 }}><Icon name="shield" size={13} color="var(--gold-300)" stroke={2}/> Private & secure</span>
            <span className="row gap-4" style={{ color: 'rgba(255,246,235,.8)', fontSize: 12.5, fontWeight: 600 }}><Icon name="star" size={13} color="var(--gold-300)" fill="var(--gold-300)" stroke={0}/> 4.9 · 60k+ families</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* expose */
Object.assign(window, { Icon, WhatsAppGlyph, InstaGlyph, Wordmark, StatusBar, LangSwitcher, MotifThumb, MotifArt, VideoTile, WebPanel, FauxQR });

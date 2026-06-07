/* ============================================================
   SumanTV Story — Screens A: Landing · Gallery · Upload
   ============================================================ */
const { useState: useStateA, useEffect: useEffectA } = React;

/* ---------- Inner-screen top bar ---------- */
function TopBar({ title, onBack, lang, setLang, step }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(253,248,239,0.9)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)' }}>
      <div className="row between" style={{ padding: '12px 16px' }}>
        <button onClick={onBack} aria-label="Back" style={{ width: 38, height: 38, borderRadius: '50%',
          background: 'var(--paper)', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--sh-sm)' }}>
          <Icon name="chevron" size={20} style={{ transform: 'rotate(180deg)' }} color="var(--ink-700)" />
        </button>
        <span className="display" style={{ fontSize: 18, color: 'var(--ink-900)' }}>{title}</span>
        <LangSwitcher lang={lang} setLang={setLang} />
      </div>
      {step && (
        <div className="row" style={{ gap: 6, padding: '0 16px 12px' }}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{ flex: 1, height: 4, borderRadius: 3,
              background: n <= step ? 'var(--c-primary)' : 'var(--cream-300)' }} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Hero motif: tilted family photo frames → film ---------- */
function HeroFrames() {
  const frame = (rot, x, y, z, scale) => (
    <div style={{ position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg) scale(${scale})`,
      width: 92, height: 112, borderRadius: 14, background: 'rgba(255,250,240,.96)', padding: 5,
      boxShadow: '0 14px 30px rgba(40,8,14,.4)', zIndex: z }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden',
        background: `linear-gradient(150deg, ${['#C0394C','#E2832B','#8A1A2A'][z % 3]}, ${['#DEBB66','#D46A78','#CCA13E'][z % 3]})`,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <svg width="44" height="50" viewBox="0 0 44 50"><circle cx="22" cy="20" r="11" fill="rgba(255,255,255,.85)"/><path d="M4 50c0-11 8-16 18-16s18 5 18 16z" fill="rgba(255,255,255,.85)"/></svg>
      </div>
    </div>
  );
  return (
    <div style={{ position: 'relative', width: 200, height: 180 }}>
      {frame(-12, 6, 30, 1, 1)}
      {frame(8, 78, 6, 2, 1.06)}
      {frame(-3, 52, 64, 3, 0.92)}
      {/* play badge */}
      <div style={{ position: 'absolute', left: 120, top: 110, width: 46, height: 46, borderRadius: '50%',
        background: 'linear-gradient(180deg, var(--gold-300), var(--gold-500))', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,.3)', zIndex: 5 }}>
        <Icon name="play" size={20} color="var(--maroon-900)" fill="var(--maroon-900)" stroke={0} style={{ marginLeft: 2 }} />
      </div>
    </div>
  );
}

/* ================= LANDING ================= */
function Landing({ lang, setLang, t, nav, onSample }) {
  return (
    <div className="screen-in">
      {/* HERO */}
      <div style={{ position: 'relative', minHeight: 480, overflow: 'hidden',
        background: 'linear-gradient(165deg, #5A0F1B 0%, var(--maroon-700) 42%, #B6402A 78%, var(--marigold) 118%)' }}>
        {/* festive bokeh */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: .85,
          background: 'radial-gradient(circle at 16% 18%, rgba(255,220,150,.45), transparent 7%), radial-gradient(circle at 84% 14%, rgba(255,200,120,.4), transparent 6%), radial-gradient(circle at 72% 34%, rgba(255,230,170,.35), transparent 8%), radial-gradient(circle at 30% 30%, rgba(255,235,190,.3), transparent 5%)' }} />
        {/* floating photo-frames motif */}
        <div style={{ position: 'absolute', top: 86, right: -8, zIndex: 1, opacity: .92 }}>
          <HeroFrames />
        </div>
        {/* grain + bottom vignette (non-blocking) */}
        <div className="grain" style={{ zIndex: 2, opacity: .08 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
          background: 'linear-gradient(180deg, rgba(40,8,14,.42) 0%, rgba(40,8,14,0) 26%, rgba(40,8,14,.12) 58%, rgba(40,8,14,.86) 100%)' }} />

        {/* top bar */}
        <div className="row between" style={{ position: 'relative', zIndex: 5, padding: '14px 16px' }}>
          <Wordmark size={17} light />
          <LangSwitcher lang={lang} setLang={setLang} dark />
        </div>

        {/* hero copy */}
        <div style={{ position: 'relative', zIndex: 5, padding: '120px 22px 26px' }}>
          <div className="row gap-8" style={{ marginBottom: 14 }}>
            <span className="badge badge--solid-gold" style={{ fontSize: 10.5 }}>
              <Icon name="star" size={11} fill="currentColor" stroke={0} /> {t('brand_by')}
            </span>
            <span className="tiny" style={{ color: 'rgba(255,255,255,.82)', fontWeight: 600, letterSpacing: '.04em' }}>
              {t('hero_eyebrow')}
            </span>
          </div>
          <h1 className="display" style={{ fontSize: 38, color: '#fff', textWrap: 'balance',
            textShadow: '0 2px 24px rgba(40,8,14,.5)' }}>
            {t('hero_title')}
          </h1>
          <p style={{ color: 'rgba(255,246,235,.92)', fontSize: 15.5, lineHeight: 1.5, marginTop: 14,
            maxWidth: 320, textWrap: 'pretty' }}>{t('hero_sub')}</p>
          <button className="btn btn--gold btn--md" onClick={onSample} style={{ marginTop: 20 }}>
            <Icon name="play" size={15} fill="var(--maroon-900)" stroke={0} /> {t('watch_sample')}
          </button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="section">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 6 }}>{t('how_title')}</p>
        <h2 className="display" style={{ fontSize: 25, textAlign: 'center', marginBottom: 20 }}>
          Three photos. One movie.
        </h2>
        <div className="col gap-12 stagger">
          {[['how_1', 'how_1d', 'gift'], ['how_2', 'how_2d', 'camera'], ['how_3', 'how_3d', 'film']].map(([k, d, ic], i) => (
            <div key={k} className="card row gap-14" style={{ padding: 16, alignItems: 'center' }}>
              <div className="numring">{i + 1}</div>
              <div className="col" style={{ flex: 1, gap: 3 }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{t(k)}</span>
                <span className="sm muted" style={{ lineHeight: 1.4 }}>{t(d)}</span>
              </div>
              <Icon name={ic} size={26} color="var(--c-accent)" stroke={1.8} />
            </div>
          ))}
        </div>
      </div>

      <hr className="rule-gold" style={{ margin: '0 22px' }} />

      {/* THEME STRIP */}
      <div className="section--tight" style={{ paddingTop: 24 }}>
        <div className="row between" style={{ padding: '0 20px', marginBottom: 14 }}>
          <h2 className="display" style={{ fontSize: 22 }}>{t('themes_title')}</h2>
          <button onClick={() => nav('gallery')} className="row gap-4" style={{ background: 'none', border: 'none',
            color: 'var(--c-primary)', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>
            {t('see_all')} <Icon name="arrow" size={15} />
          </button>
        </div>
        <div className="scroll-x" style={{ gap: 14, padding: '4px 20px 8px' }}>
          {window.THEMES.slice(0, 4).map(th => (
            <button key={th.id} onClick={() => nav('gallery')} style={{ flex: '0 0 auto', width: 168, padding: 0,
              border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}>
              <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--sh-md)', position: 'relative' }}>
                <MotifThumb theme={th} h={132} />
                {th.popular && <span className="badge badge--solid-gold" style={{ position: 'absolute', top: 8, left: 8, fontSize: 9.5 }}>POPULAR</span>}
              </div>
              <div className="col" style={{ gap: 2, padding: '8px 2px 0' }}>
                <span style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--ink-900)' }}>{th.title}</span>
                <span className="tiny muted">{th.duration}s · ₹{th.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* TRUST */}
      <div className="section">
        <div className="card surface-cream" style={{ padding: 20, borderColor: 'var(--gold-300)' }}>
          <div className="row gap-10" style={{ marginBottom: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--success-bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
              <Icon name="shield" size={22} color="var(--success)" stroke={2} />
            </div>
            <h3 className="display" style={{ fontSize: 18, alignSelf: 'center' }}>{t('trust_title')}</h3>
          </div>
          <div className="col gap-10">
            {[['lock', 'trust_1'], ['shield', 'trust_2'], ['zap', 'trust_3']].map(([ic, k]) => (
              <div key={k} className="row gap-10">
                <Icon name={ic} size={17} color="var(--c-primary)" stroke={2} />
                <span className="sm" style={{ color: 'var(--ink-700)', fontWeight: 500 }}>{t(k)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAMPLE VIDEO */}
      <div className="section--tight" style={{ padding: '6px 20px 28px' }}>
        <div onClick={onSample} style={{ cursor: 'pointer' }}>
          <VideoTile theme={window.THEMES[0]} h={210} />
        </div>
        <p className="tiny muted" style={{ textAlign: 'center', marginTop: 10 }}>
          A real SumanTV Story — “Festival of Lights”, 45s
        </p>
      </div>

      {/* FOOTER */}
      <div style={{ background: 'var(--maroon-900)', padding: '28px 22px 34px', color: 'rgba(255,246,235,.7)' }}>
        <Wordmark size={16} light />
        <p className="tiny" style={{ marginTop: 14, lineHeight: 1.6, maxWidth: 300 }}>
          Made with love by SumanTV — India’s #1 digital media network. Your memories, beautifully told.
        </p>
        <div className="row gap-16" style={{ marginTop: 16, flexWrap: 'wrap' }}>
          {['Privacy', 'Terms', 'Refunds', 'Help'].map(x => (
            <span key={x} className="tiny" style={{ color: 'rgba(255,246,235,.85)', fontWeight: 600 }}>{x}</span>
          ))}
        </div>
        <div className="row gap-10" style={{ marginTop: 18 }}>
          <span className="tiny" style={{ opacity: .6 }}>© 2026 SumanTV</span>
        </div>
      </div>
    </div>
  );
}

/* ================= THEME GALLERY ================= */
function Gallery({ lang, setLang, t, nav, selectTheme, selectedThemeId }) {
  const [occ, setOcc] = useStateA('All');
  const [lf, setLf] = useStateA('all');
  const [loading, setLoading] = useStateA(true);
  useEffectA(() => { const id = setTimeout(() => setLoading(false), 650); return () => clearTimeout(id); }, [occ, lf]);

  const list = window.THEMES.filter(th =>
    (occ === 'All' || th.occasion === occ) && (lf === 'all' || th.langs.includes(lf)));

  return (
    <div>
      <TopBar title={t('gallery_title')} onBack={() => nav('landing')} lang={lang} setLang={setLang} step={1} />
      <div className="screen-in">
        {/* filters */}
        <div style={{ padding: '14px 0 6px' }}>
          <p className="tiny" style={{ fontWeight: 700, color: 'var(--ink-500)', padding: '0 20px 8px',
            letterSpacing: '.1em', textTransform: 'uppercase' }}>{t('filter_occasion')}</p>
          <div className="scroll-x" style={{ gap: 8, padding: '0 20px 14px' }}>
            {window.OCCASIONS.map(o => (
              <button key={o} className={'chip' + (occ === o ? ' chip--on' : '')} onClick={() => setOcc(o)}>{o}</button>
            ))}
          </div>
          <div className="row between" style={{ padding: '0 20px 14px', alignItems: 'center' }}>
            <span className="tiny" style={{ fontWeight: 700, color: 'var(--ink-500)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{t('filter_lang')}</span>
            <div className="row gap-6">
              {[{ code: 'all', native: t('all') }, ...window.LANGS].map(l => (
                <button key={l.code} className={'chip' + (lf === l.code ? ' chip--on' : '')}
                  style={{ padding: '6px 11px', fontSize: 12 }} onClick={() => setLf(l.code)}>{l.native}</button>
              ))}
            </div>
          </div>
        </div>
        <hr className="rule-gold" style={{ margin: '0 20px 8px' }} />

        {/* grid / states */}
        <div style={{ padding: '14px 16px 20px' }}>
          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="skel" style={{ height: 130, borderRadius: 0 }} />
                  <div style={{ padding: 12 }}>
                    <div className="skel" style={{ height: 13, width: '80%', marginBottom: 8 }} />
                    <div className="skel" style={{ height: 11, width: '50%' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : list.length === 0 ? (
            <div className="col center" style={{ padding: '50px 20px', textAlign: 'center', gap: 12 }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: 'var(--cream-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="film" size={30} color="var(--ink-300)" stroke={1.8} />
              </div>
              <p className="display" style={{ fontSize: 19 }}>No themes here yet</p>
              <p className="sm muted">Try another occasion or language filter.</p>
              <button className="btn btn--ghost btn--sm" onClick={() => { setOcc('All'); setLf('all'); }}>Clear filters</button>
            </div>
          ) : (
            <div className="stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {list.map(th => {
                const on = th.id === selectedThemeId;
                return (
                  <div key={th.id} className="card" style={{ padding: 0, overflow: 'hidden',
                    border: on ? '2px solid var(--c-primary)' : '1px solid var(--line)',
                    boxShadow: on ? 'var(--sh-lg)' : 'var(--sh-md)' }}>
                    <div style={{ position: 'relative' }}>
                      <MotifThumb theme={th} h={128} />
                      {th.popular && <span className="badge badge--solid-gold" style={{ position: 'absolute', top: 7, left: 7, fontSize: 9 }}>POPULAR</span>}
                      <span style={{ position: 'absolute', bottom: 7, right: 7, background: 'rgba(0,0,0,.4)',
                        color: '#fff', fontSize: 10.5, fontWeight: 700, padding: '3px 7px', borderRadius: 999,
                        backdropFilter: 'blur(4px)' }}>{th.duration}s</span>
                    </div>
                    <div className="col" style={{ padding: '11px 12px 12px', gap: 8 }}>
                      <div className="col gap-2">
                        <span style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--ink-900)', lineHeight: 1.15 }}>{th.title}</span>
                        <span className="tiny muted" style={{ lineHeight: 1.3 }}>{th.tagline}</span>
                      </div>
                      <div className="row between" style={{ alignItems: 'center' }}>
                        <span className="display" style={{ fontSize: 17, color: 'var(--c-primary)' }}>₹{th.price}</span>
                        <button className={on ? 'btn btn--primary btn--sm' : 'btn btn--ghost btn--sm'}
                          onClick={() => selectTheme(th.id)} style={{ padding: '7px 13px' }}>
                          {on ? <><Icon name="check" size={14} stroke={2.6} /> {t('selected')}</> : t('select')}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= UPLOAD ================= */
const SLOT_DEMO = ['good', 'blurry', 'noface']; // showcase all validation states
function Upload({ lang, setLang, t, nav, theme, photos, setPhotos, consent, setConsent }) {
  function scan(i) {
    setPhotos(p => p.map((s, idx) => idx === i ? { status: 'scanning' } : s));
    setTimeout(() => {
      setPhotos(p => p.map((s, idx) => idx === i ? { status: p[idx]._retry ? 'good' : SLOT_DEMO[i] } : s));
    }, 900);
  }
  function retry(i) {
    setPhotos(p => p.map((s, idx) => idx === i ? { status: 'scanning', _retry: true } : s));
    setTimeout(() => setPhotos(p => p.map((s, idx) => idx === i ? { status: 'good' } : s)), 900);
  }
  const allGood = photos.every(p => p.status === 'good');

  return (
    <div>
      <TopBar title={t('upload_title')} onBack={() => nav('gallery')} lang={lang} setLang={setLang} step={2} />
      <div className="screen-in" style={{ padding: '18px 18px 24px' }}>
        {/* selected theme summary */}
        {theme && (
          <div className="card row gap-12" style={{ padding: 10, alignItems: 'center', marginBottom: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: 12, overflow: 'hidden', flex: '0 0 auto' }}>
              <MotifThumb theme={theme} h={64} />
            </div>
            <div className="col" style={{ flex: 1, gap: 2 }}>
              <span className="tiny eyebrow--gold" style={{ letterSpacing: '.12em' }}>SELECTED THEME</span>
              <span style={{ fontWeight: 700, fontSize: 15.5, color: 'var(--ink-900)' }}>{theme.title}</span>
              <span className="tiny muted">{theme.duration}s · ₹{theme.price}</span>
            </div>
            <button onClick={() => nav('gallery')} style={{ background: 'none', border: 'none', color: 'var(--c-primary)',
              fontWeight: 700, fontSize: 12.5, cursor: 'pointer', fontFamily: 'var(--font-ui)' }}>Change</button>
          </div>
        )}

        <p className="sm muted" style={{ lineHeight: 1.5, marginBottom: 16 }}>{t('upload_guide')}</p>

        {/* 3 slots */}
        <div className="col gap-12">
          {photos.map((p, i) => <PhotoSlot key={i} idx={i} state={p} onScan={() => scan(i)} onRetry={() => retry(i)} />)}
        </div>

        {/* consent */}
        <button onClick={() => setConsent(c => !c)} className="card row gap-12" style={{ padding: 14, marginTop: 18,
          alignItems: 'flex-start', textAlign: 'left', cursor: 'pointer', width: '100%',
          border: consent ? '1.5px solid var(--success)' : '1.5px solid var(--line-2)',
          background: consent ? 'var(--success-bg)' : 'var(--paper)' }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, flex: '0 0 auto', marginTop: 1,
            border: consent ? 'none' : '2px solid var(--line-2)', background: consent ? 'var(--success)' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {consent && <Icon name="check" size={15} color="#fff" stroke={3} />}
          </div>
          <span className="sm" style={{ color: 'var(--ink-700)', lineHeight: 1.45, fontWeight: 500 }}>{t('consent')}</span>
        </button>
      </div>
    </div>
  );
}

function PhotoSlot({ idx, state, onScan, onRetry }) {
  const st = state.status;
  const meta = {
    good:   { label: 'Great photo', sub: 'Clear face detected', color: 'var(--success)', bg: 'var(--success-bg)', icon: 'check', badge: 'badge--success' },
    blurry: { label: 'Looks blurry', sub: 'A sharper photo works best', color: 'var(--warn)', bg: 'var(--warn-bg)', icon: 'info', badge: 'badge--warn' },
    noface: { label: 'No face detected', sub: 'Use a clear, front-facing photo', color: 'var(--danger)', bg: 'var(--danger-bg)', icon: 'x', badge: 'badge--danger' },
  }[st];

  if (st === 'empty') {
    return (
      <button onClick={onScan} style={{ width: '100%', cursor: 'pointer', background: 'var(--cream-100)',
        border: '2px dashed var(--gold-300)', borderRadius: 18, padding: '22px 16px', display: 'flex',
        alignItems: 'center', gap: 14, fontFamily: 'var(--font-ui)' }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--paper)', boxShadow: 'var(--sh-sm)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
          <Icon name="camera" size={24} color="var(--c-primary)" stroke={1.9} />
        </div>
        <div className="col" style={{ alignItems: 'flex-start', gap: 2 }}>
          <span style={{ fontWeight: 700, fontSize: 15.5, color: 'var(--ink-900)' }}>Photo {idx + 1}</span>
          <span className="tiny muted">Tap to choose from your gallery</span>
        </div>
        <Icon name="upload" size={20} color="var(--ink-300)" style={{ marginLeft: 'auto' }} />
      </button>
    );
  }
  if (st === 'scanning') {
    return (
      <div style={{ width: '100%', background: 'var(--paper)', border: '1.5px solid var(--line-2)', borderRadius: 18,
        padding: 12, display: 'flex', gap: 12, alignItems: 'center', boxShadow: 'var(--sh-sm)' }}>
        <div style={{ width: 64, height: 64, borderRadius: 12, flex: '0 0 auto', position: 'relative', overflow: 'hidden',
          background: `linear-gradient(135deg, ${window.THEMES[idx].from}, ${window.THEMES[idx].to})` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,.18)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, height: 3, background: 'rgba(255,255,255,.9)',
            boxShadow: '0 0 10px #fff', animation: 'scanline 1s ease-in-out infinite' }} />
        </div>
        <div className="col" style={{ gap: 4 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink-900)' }}>Checking photo…</span>
          <span className="tiny muted">Detecting faces & sharpness</span>
        </div>
        <style>{`@keyframes scanline{0%{top:4px}50%{top:54px}100%{top:4px}}`}</style>
      </div>
    );
  }
  // filled with result
  return (
    <div style={{ width: '100%', background: 'var(--paper)', borderRadius: 18, padding: 12, display: 'flex',
      gap: 12, alignItems: 'center', boxShadow: 'var(--sh-sm)', border: `1.5px solid ${meta.color}` }}>
      <div style={{ width: 64, height: 64, borderRadius: 12, flex: '0 0 auto', position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, ${window.THEMES[idx].from}, ${window.THEMES[idx].to})`,
        filter: st === 'blurry' ? 'blur(2.5px)' : 'none' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={st === 'noface' ? 'image' : 'user'} size={26} color="rgba(255,255,255,.85)" stroke={2} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(transparent, rgba(0,0,0,.3))' }} />
      </div>
      <div className="col" style={{ flex: 1, gap: 4 }}>
        <div className="row gap-6">
          <span className={'badge ' + meta.badge}><Icon name={meta.icon} size={11} stroke={2.6} /> {meta.label}</span>
        </div>
        <span className="tiny muted">{meta.sub}</span>
      </div>
      {st === 'good'
        ? <button onClick={onRetry} aria-label="Replace" style={{ background: 'var(--cream-100)', border: 'none',
            width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name="refresh" size={16} color="var(--ink-500)" /></button>
        : <button onClick={onRetry} className="btn btn--ghost btn--sm" style={{ padding: '8px 12px' }}>Replace</button>}
    </div>
  );
}

Object.assign(window, { TopBar, Landing, Gallery, Upload, PhotoSlot, HeroFrames });

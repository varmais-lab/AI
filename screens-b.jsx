/* ============================================================
   SumanTV Story — Screens B: Checkout · Processing · Delivery
   ============================================================ */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

/* ================= CHECKOUT ================= */
function Checkout({ lang, setLang, t, nav, theme, form, setForm, pay, setPay }) {
  const langName = (window.LANGS.find(l => l.code === lang) || {}).native;
  const price = theme ? theme.price : 299;
  const gst = Math.round(price * 0.18);
  const total = price + gst;
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const methods = [
    { id: 'upi', label: 'UPI', sub: 'GPay · PhonePe · Paytm', icon: 'upi' },
    { id: 'card', label: 'Cards', sub: 'Credit / Debit · Razorpay', icon: 'card' },
    { id: 'wallet', label: 'Wallets', sub: 'Paytm · Amazon Pay', icon: 'wallet' },
  ];
  return (
    <div>
      <TopBar title={t('checkout_title')} onBack={() => nav('upload')} lang={lang} setLang={setLang} step={3} />
      <div className="screen-in" style={{ padding: '18px 18px 26px' }}>
        {/* order summary */}
        <p className="eyebrow" style={{ marginBottom: 10 }}>{t('order_summary')}</p>
        <div className="card" style={{ padding: 14, marginBottom: 20 }}>
          <div className="row gap-12" style={{ marginBottom: 12 }}>
            <div style={{ width: 70, height: 70, borderRadius: 12, overflow: 'hidden', flex: '0 0 auto' }}>
              <MotifThumb theme={theme || window.THEMES[0]} h={70} />
            </div>
            <div className="col" style={{ gap: 3, flex: 1 }}>
              <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{(theme || window.THEMES[0]).title}</span>
              <span className="tiny muted">{(theme || window.THEMES[0]).tagline}</span>
              <div className="row gap-6" style={{ marginTop: 4 }}>
                <span className="badge badge--maroon"><Icon name="clock" size={11} stroke={2.4} /> {(theme || window.THEMES[0]).duration}s</span>
                <span className="badge badge--gold">{langName}</span>
              </div>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '4px 0 12px' }} />
          <div className="col gap-8">
            <Line label="Story video" val={`₹${price}`} />
            <Line label="GST (18%)" val={`₹${gst}`} muted />
            <Line label="Delivery to WhatsApp & email" val="Free" success />
            <hr style={{ border: 'none', borderTop: '1px dashed var(--line-2)', margin: '6px 0' }} />
            <div className="row between" style={{ alignItems: 'center' }}>
              <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{t('total')}</span>
              <span className="display" style={{ fontSize: 24, color: 'var(--c-primary)' }}>₹{total}</span>
            </div>
          </div>
        </div>

        {/* details */}
        <p className="eyebrow" style={{ marginBottom: 12 }}>{t('your_details')}</p>
        <div className="col gap-14" style={{ marginBottom: 20 }}>
          <div className="field">
            <label className="field__label"><Icon name="user" size={14} color="var(--ink-500)" /> {t('full_name')}</label>
            <input className="input" placeholder="e.g. Priya Reddy" value={form.name} onChange={set('name')} />
          </div>
          <div className="field">
            <label className="field__label"><Icon name="mail" size={14} color="var(--ink-500)" /> {t('email')}</label>
            <input className="input" type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} />
          </div>
          <div className="field">
            <label className="field__label"><WhatsAppGlyph size={14} color="#1c8a4a" /> {t('whatsapp')}</label>
            <div className="input-group">
              <span style={{ color: 'var(--ink-500)', fontWeight: 600, fontSize: 15 }}>+91</span>
              <div style={{ width: 1, height: 20, background: 'var(--line-2)' }} />
              <input className="input" type="tel" placeholder="98765 43210" value={form.whatsapp} onChange={set('whatsapp')} />
            </div>
          </div>
        </div>

        {/* payment method */}
        <p className="eyebrow" style={{ marginBottom: 12 }}>{t('pay_method')}</p>
        <div className="col gap-10">
          {methods.map(m => {
            const on = pay === m.id;
            return (
              <button key={m.id} onClick={() => setPay(m.id)} className="card row gap-12" style={{ padding: 13,
                alignItems: 'center', cursor: 'pointer', width: '100%', textAlign: 'left',
                border: on ? '1.5px solid var(--c-primary)' : '1.5px solid var(--line)',
                background: on ? 'rgba(138,26,42,0.04)' : 'var(--paper)' }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: on ? 'var(--c-primary)' : 'var(--cream-100)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                  <Icon name={m.icon} size={20} color={on ? '#fff' : 'var(--c-primary)'} stroke={2} />
                </div>
                <div className="col" style={{ flex: 1, gap: 1 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink-900)' }}>{m.label}</span>
                  <span className="tiny muted">{m.sub}</span>
                </div>
                <div style={{ width: 22, height: 22, borderRadius: '50%', flex: '0 0 auto',
                  border: on ? 'none' : '2px solid var(--line-2)', background: on ? 'var(--c-primary)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {on && <Icon name="check" size={13} color="#fff" stroke={3} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* reassurance */}
        <div className="row gap-10" style={{ marginTop: 18, padding: '12px 14px', background: 'var(--success-bg)',
          borderRadius: 14 }}>
          <Icon name="clock" size={18} color="var(--success)" stroke={2} style={{ marginTop: 1 }} />
          <span className="sm" style={{ color: '#1f6e4a', lineHeight: 1.45, fontWeight: 500 }}>
            Your story is usually ready in <b>3–6 minutes</b>. We’ll message you on WhatsApp & email the moment it’s done.
          </span>
        </div>
        <div className="row center gap-8" style={{ marginTop: 14 }}>
          <Icon name="lock" size={14} color="var(--ink-400)" stroke={2} />
          <span className="tiny muted">256-bit secure payment · Razorpay</span>
        </div>
      </div>
    </div>
  );
}
function Line({ label, val, muted, success }) {
  return (
    <div className="row between">
      <span className="sm" style={{ color: muted ? 'var(--ink-500)' : 'var(--ink-700)' }}>{label}</span>
      <span className="sm" style={{ fontWeight: 600, color: success ? 'var(--success)' : 'var(--ink-900)' }}>{val}</span>
    </div>
  );
}

/* ================= PROCESSING ================= */
const PROC_STEPS = ['step_prep', 'step_life', 'step_music', 'step_finish'];
function Processing({ t, nav, theme, onDone }) {
  const [pct, setPct] = useStateB(0);
  const done = pct >= 100;
  useEffectB(() => {
    if (done) return;
    const id = setInterval(() => setPct(p => Math.min(100, p + (p < 90 ? 1.1 : 0.5))), 70);
    return () => clearInterval(id);
  }, [done]);
  const stepIdx = Math.min(3, Math.floor(pct / 25));
  const remain = Math.max(0, Math.ceil((100 - pct) / 100 * 5));

  const R = 78, C = 2 * Math.PI * R;
  return (
    <div className="screen-in" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column',
      background: 'radial-gradient(120% 70% at 50% 0%, #FBEFE0, var(--cream-50) 60%)' }}>
      {/* header */}
      <div className="row between" style={{ padding: '16px 18px' }}>
        <Wordmark size={16} />
        <span className="badge badge--gold"><span className="dot-gold" /> Rendering</span>
      </div>

      {/* animated scene */}
      <div className="col center" style={{ flex: 1, padding: '10px 24px', textAlign: 'center', position: 'relative' }}>
        {/* floating diyas */}
        {[...Array(6)].map((_, i) => (
          <span key={i} style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%',
            background: 'var(--gold-400)', boxShadow: '0 0 10px var(--gold-400)', opacity: .7,
            left: `${12 + i * 15}%`, top: `${20 + (i % 3) * 22}%`,
            animation: `bob ${2.4 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }} />
        ))}

        <div style={{ position: 'relative', width: 200, height: 200, marginBottom: 6 }}>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="100" cy="100" r={R} fill="none" stroke="var(--cream-200)" strokeWidth="10" />
            <circle cx="100" cy="100" r={R} fill="none" stroke="url(#pg)" strokeWidth="10" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} style={{ transition: 'stroke-dashoffset .2s linear' }} />
            <defs>
              <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--maroon-600)" />
                <stop offset="60%" stopColor="var(--marigold)" />
                <stop offset="100%" stopColor="var(--gold-500)" />
              </linearGradient>
            </defs>
          </svg>
          {/* rotating sparkle on the ring */}
          <div style={{ position: 'absolute', inset: 0, animation: 'spin 3s linear infinite' }}>
            <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)' }}>
              <Icon name="sparkle" size={18} color="var(--gold-500)" fill="var(--gold-400)" stroke={0} />
            </div>
          </div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <div style={{ animation: 'beat 1.6s ease-in-out infinite' }}>
              <Icon name={done ? 'film' : 'heart'} size={34} color="var(--c-primary)"
                fill={done ? 'none' : 'var(--maroon-600)'} stroke={done ? 2 : 0} />
            </div>
            <span className="display" style={{ fontSize: 30, color: 'var(--ink-900)' }}>{Math.round(pct)}%</span>
          </div>
        </div>

        <h2 className="display" style={{ fontSize: 24, marginTop: 6, marginBottom: 6 }}>{t('proc_title')}</h2>
        <p className="sm muted" style={{ maxWidth: 280, lineHeight: 1.5 }}>{t('proc_notify')}</p>

        {/* steps */}
        <div className="col gap-10" style={{ width: '100%', maxWidth: 320, marginTop: 22 }}>
          {PROC_STEPS.map((s, i) => {
            const state = done || i < stepIdx ? 'done' : i === stepIdx ? 'active' : 'todo';
            return (
              <div key={s} className="row gap-12" style={{ alignItems: 'center', opacity: state === 'todo' ? .5 : 1,
                transition: 'opacity .3s' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', flex: '0 0 auto', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: state === 'done' ? 'var(--success)' : state === 'active' ? 'var(--c-primary)' : 'var(--cream-200)',
                  boxShadow: state === 'active' ? '0 0 0 5px rgba(138,26,42,.14)' : 'none',
                  transition: 'all .3s' }}>
                  {state === 'done'
                    ? <Icon name="check" size={15} color="#fff" stroke={3} />
                    : state === 'active'
                      ? <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#fff', animation: 'pulse 1.1s ease-in-out infinite' }} />
                      : <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ink-300)' }} />}
                </div>
                <span style={{ fontWeight: state === 'active' ? 700 : 600, fontSize: 14.5,
                  color: state === 'todo' ? 'var(--ink-500)' : 'var(--ink-900)', textAlign: 'left' }}>{t(s)}</span>
                {state === 'active' && <span className="tiny" style={{ marginLeft: 'auto', color: 'var(--c-primary)', fontWeight: 700 }}>···</span>}
              </div>
            );
          })}
        </div>

        {/* est time / notify chip */}
        <div className="card row gap-10" style={{ padding: '12px 16px', marginTop: 24, alignItems: 'center' }}>
          {!done ? (
            <>
              <Icon name="clock" size={18} color="var(--c-primary)" stroke={2} />
              <span className="sm" style={{ color: 'var(--ink-700)' }}>
                {t('est_time')}: <b>~{remain} {t('minutes')}</b>
              </span>
              <div style={{ width: 1, height: 18, background: 'var(--line-2)' }} />
              <WhatsAppGlyph size={16} color="#25a35a" />
              <Icon name="mail" size={15} color="var(--ink-400)" stroke={2} />
            </>
          ) : (
            <>
              <Icon name="check" size={18} color="var(--success)" stroke={2.6} />
              <span className="sm" style={{ color: 'var(--success)', fontWeight: 700 }}>Your story is ready!</span>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes beat{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.6);opacity:.6}}
        @keyframes bob{0%,100%{transform:translateY(0);opacity:.6}50%{transform:translateY(-12px);opacity:1}}
      `}</style>
    </div>
  );
}

/* ================= DELIVERY ================= */
function Delivery({ lang, setLang, t, nav, theme }) {
  const [playing, setPlaying] = useStateB(false);
  const [premium, setPremium] = useStateB(false);
  const th = theme || window.THEMES[0];
  return (
    <div>
      <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(253,248,239,0.9)',
        backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)' }}>
        <div className="row between" style={{ padding: '12px 16px' }}>
          <Wordmark size={16} />
          <LangSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>

      <div className="screen-in" style={{ padding: '20px 18px 26px' }}>
        <div className="col center" style={{ textAlign: 'center', marginBottom: 18 }}>
          <span className="badge badge--success" style={{ marginBottom: 10 }}>
            <Icon name="check" size={12} stroke={3} /> Delivered
          </span>
          <h1 className="display" style={{ fontSize: 28 }}>{t('ready_title')}</h1>
          <p className="sm muted" style={{ marginTop: 6 }}>“{th.title}” · {th.duration}s · {(window.LANGS.find(l => l.code === lang) || {}).native}</p>
        </div>

        {/* player */}
        <div onClick={() => setPlaying(p => !p)} style={{ cursor: 'pointer', marginBottom: 8 }}>
          <VideoTile theme={th} h={300} playing={playing} round={20} />
        </div>
        {/* scrubber */}
        <div className="row gap-10" style={{ alignItems: 'center', padding: '4px 4px 16px' }}>
          <Icon name={playing ? 'film' : 'play'} size={16} color="var(--c-primary)" fill={playing ? 'none' : 'var(--c-primary)'} stroke={playing ? 2 : 0} />
          <div style={{ flex: 1, height: 5, borderRadius: 3, background: 'var(--cream-200)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: playing ? '42%' : '8%', background: 'var(--c-primary)',
              borderRadius: 3, transition: 'width .4s' }} />
          </div>
          <span className="tiny muted" style={{ fontVariantNumeric: 'tabular-nums' }}>{playing ? '0:19' : '0:00'} / 0:45</span>
        </div>

        {/* primary actions */}
        <div className="row gap-10" style={{ marginBottom: 12 }}>
          <button className="btn btn--primary btn--md" style={{ flex: 1 }}>
            <Icon name="download" size={18} stroke={2.2} /> {t('download')}
          </button>
          <button className="btn btn--white btn--md" style={{ flex: '0 0 auto', width: 52, padding: 0 }} aria-label="More">
            <Icon name="share" size={18} color="var(--c-primary)" stroke={2.2} />
          </button>
        </div>
        {/* share row */}
        <div className="row gap-10" style={{ marginBottom: 22 }}>
          <button className="btn btn--whatsapp btn--md" style={{ flex: 1 }}>
            <WhatsAppGlyph size={18} color="#07331a" /> WhatsApp
          </button>
          <button className="btn btn--insta btn--md" style={{ flex: 1 }}>
            <InstaGlyph size={18} color="#fff" /> Instagram
          </button>
        </div>

        {/* upsell premium */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1.5px solid var(--gold-300)' }}>
          <div style={{ padding: '16px 16px 14px', background: 'linear-gradient(135deg, #3A1119, var(--maroon-800))',
            position: 'relative', overflow: 'hidden' }}>
            <div className="grain" style={{ opacity: .08 }} />
            <div className="row between" style={{ position: 'relative' }}>
              <div className="col" style={{ gap: 4 }}>
                <span className="badge badge--solid-gold" style={{ alignSelf: 'flex-start' }}>
                  <Icon name="star" size={11} fill="currentColor" stroke={0} /> PREMIUM
                </span>
                <span className="display" style={{ fontSize: 20, color: '#fff', marginTop: 4 }}>Make it unforgettable</span>
              </div>
              <Icon name="gift" size={34} color="var(--gold-400)" stroke={1.6} />
            </div>
          </div>
          <div style={{ padding: 16 }}>
            <div className="col gap-8" style={{ marginBottom: 14 }}>
              {['Full HD, no watermark', '90-second extended cut', 'Premium music & AI voice-over', 'Priority rendering'].map(x => (
                <div key={x} className="row gap-8">
                  <Icon name="check" size={15} color="var(--success)" stroke={2.6} />
                  <span className="sm" style={{ color: 'var(--ink-700)', fontWeight: 500 }}>{x}</span>
                </div>
              ))}
            </div>
            <div className="row between" style={{ alignItems: 'center' }}>
              <div className="col">
                <span className="tiny muted" style={{ textDecoration: 'line-through' }}>₹699</span>
                <span className="display" style={{ fontSize: 22, color: 'var(--c-primary)' }}>₹499</span>
              </div>
              <button className={premium ? 'btn btn--ghost btn--md' : 'btn btn--gold btn--md'} onClick={() => setPremium(p => !p)}>
                {premium ? <><Icon name="check" size={16} stroke={2.6} /> Added</> : 'Upgrade'}
              </button>
            </div>
          </div>
        </div>

        {/* watermark note */}
        <div className="row center gap-8" style={{ marginTop: 16 }}>
          <Icon name="info" size={13} color="var(--ink-400)" stroke={2} />
          <span className="tiny muted">Free videos carry a subtle SumanTV watermark</span>
        </div>

        <button className="btn btn--ghost btn--md btn--block" style={{ marginTop: 16 }} onClick={() => nav('landing')}>
          <Icon name="refresh" size={17} stroke={2} /> {t('create_another')}
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Checkout, Processing, Delivery, Line });

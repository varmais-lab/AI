/* ============================================================
   SumanTV Story — App shell, navigation, dock CTA, Tweaks
   ============================================================ */
const { useState: useS, useEffect: useE, useRef: useR } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#8A1A2A",
  "accent": "#CCA13E",
  "headline": "Marcellus",
  "radius": 22,
  "grain": true
}/*EDITMODE-END*/;

const HEADLINE_FONTS = {
  "Marcellus": "'Marcellus', serif",
  "Cormorant": "'Cormorant Garamond', serif",
  "Playfair": "'Playfair Display', serif",
  "Yeseva One": "'Yeseva One', serif",
};

function freshPhotos() { return [{ status: 'empty' }, { status: 'empty' }, { status: 'empty' }]; }

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = useS('landing');
  const [lang, setLang] = useS('en');
  const [themeId, setThemeId] = useS(null);
  const [photos, setPhotos] = useS(freshPhotos());
  const [consent, setConsent] = useS(false);
  const [form, setForm] = useS({ name: '', email: '', whatsapp: '' });
  const [pay, setPay] = useS('upi');
  const [procDone, setProcDone] = useS(false);
  const [sample, setSample] = useS(false);
  const vpRef = useR(null);

  const tr = (k) => window.I18N(k, lang);
  const theme = window.THEMES.find(x => x.id === themeId) || null;

  // apply tweaks to CSS vars
  useE(() => {
    const r = document.documentElement.style;
    r.setProperty('--c-primary', t.primary);
    r.setProperty('--c-accent', t.accent);
    r.setProperty('--c-primary-deep', `color-mix(in srgb, ${t.primary}, #000 34%)`);
    r.setProperty('--font-display', `${HEADLINE_FONTS[t.headline] || HEADLINE_FONTS.Marcellus}, 'Noto Serif Devanagari', 'Noto Serif Telugu', 'Noto Serif Tamil', Georgia, serif`);
    r.setProperty('--r-lg', t.radius + 'px');
    r.setProperty('--r-md', Math.round(t.radius * 0.72) + 'px');
    r.setProperty('--r-sm', Math.round(t.radius * 0.55) + 'px');
    r.setProperty('--r-xl', Math.round(t.radius * 1.25) + 'px');
  }, [t.primary, t.accent, t.headline, t.radius]);

  // scroll to top on screen change
  useE(() => { if (vpRef.current) vpRef.current.scrollTop = 0; }, [screen]);

  // dev/test hooks (harmless)
  useE(() => {
    window.__nav = (s) => setScreen(s);
    window.__pick = (id) => setThemeId(id);
    window.__fill = () => setPhotos([{ status: 'good' }, { status: 'good' }, { status: 'good' }]);
    window.__consent = () => setConsent(true);
    window.__proc = () => setProcDone(true);
  }, []);

  function nav(s) {
    if (s === 'landing') { setPhotos(freshPhotos()); setConsent(false); setProcDone(false); }
    if (s === 'processing') setProcDone(false);
    setScreen(s);
  }
  function selectTheme(id) { setThemeId(id); }

  // ---------- dock config per screen ----------
  const allGood = photos.every(p => p.status === 'good');
  const formOk = form.name.trim() && form.email.trim() && form.whatsapp.trim();
  const price = theme ? theme.price : 299;
  const total = price + Math.round(price * 0.18);

  let dock = null;
  if (screen === 'landing') {
    dock = { label: tr('cta_create'), icon: 'arrow', onClick: () => nav('gallery'), variant: 'primary',
      sub: '4.9★ · 60,000+ families' };
  } else if (screen === 'gallery') {
    dock = themeId
      ? { label: tr('select') === 'Select' ? 'Continue' : tr('select'), label: 'Continue', icon: 'arrow', onClick: () => nav('upload'), variant: 'primary', sub: `${theme.title} · ₹${theme.price}` }
      : { label: 'Select a theme to continue', onClick: null, variant: 'disabled' };
  } else if (screen === 'upload') {
    dock = { label: tr('continue_pay'), icon: 'arrow', onClick: () => nav('checkout'),
      variant: (allGood && consent) ? 'primary' : 'disabled',
      sub: !allGood ? 'Add 3 clear photos' : !consent ? 'Please accept the privacy consent' : 'All photos look great' };
  } else if (screen === 'checkout') {
    dock = { label: `${tr('pay_now')} · ₹${total}`, icon: 'lock', onClick: () => nav('processing'),
      variant: formOk ? 'primary' : 'disabled', sub: formOk ? 'Razorpay · UPI · Cards' : 'Fill your details to pay' };
  } else if (screen === 'processing' && procDone) {
    dock = { label: 'View your story', icon: 'play', onClick: () => nav('delivery'), variant: 'gold' };
  }

  const darkStatus = screen === 'landing';

  return (
    <div className="stage">
      <WebPanel lang={lang} t={tr} />
      <div className="device">
        <div className="device__notch" />
        <StatusBar dark={darkStatus} />
        <div className="viewport" ref={vpRef}>
          {!t.grain ? null : <div className="grain" />}
          {screen === 'landing' && <Landing lang={lang} setLang={setLang} t={tr} nav={nav} onSample={() => setSample(true)} />}
          {screen === 'gallery' && <Gallery lang={lang} setLang={setLang} t={tr} nav={nav} selectTheme={selectTheme} selectedThemeId={themeId} />}
          {screen === 'upload' && <Upload lang={lang} setLang={setLang} t={tr} nav={nav} theme={theme || window.THEMES[0]} photos={photos} setPhotos={setPhotos} consent={consent} setConsent={setConsent} />}
          {screen === 'checkout' && <Checkout lang={lang} setLang={setLang} t={tr} nav={nav} theme={theme} form={form} setForm={setForm} pay={pay} setPay={setPay} />}
          {screen === 'processing' && <Processing t={tr} nav={nav} theme={theme} onDone={() => setProcDone(true)} />}
          {screen === 'delivery' && <Delivery lang={lang} setLang={setLang} t={tr} nav={nav} theme={theme} />}
        </div>

        {/* sticky dock CTA */}
        {dock && (
          <div className="dockbar">
            {dock.sub && (
              <div className="row center gap-6" style={{ marginBottom: 9 }}>
                {dock.variant === 'disabled'
                  ? <Icon name="info" size={13} color="var(--ink-400)" stroke={2} />
                  : <span className="dot-gold" />}
                <span className="tiny" style={{ color: dock.variant === 'disabled' ? 'var(--ink-400)' : 'var(--ink-500)', fontWeight: 600 }}>{dock.sub}</span>
              </div>
            )}
            <button
              className={'btn btn--lg btn--block ' + (dock.variant === 'gold' ? 'btn--gold' : 'btn--primary')}
              disabled={dock.variant === 'disabled' || !dock.onClick}
              onClick={dock.onClick || undefined}>
              {dock.label}
              {dock.icon && <Icon name={dock.icon} size={19} stroke={2.2}
                color={dock.variant === 'gold' ? 'var(--maroon-900)' : '#fff'}
                fill={dock.icon === 'play' ? (dock.variant === 'gold' ? 'var(--maroon-900)' : '#fff') : 'none'} />}
            </button>
          </div>
        )}

        {/* sample video modal */}
        {sample && <SampleModal onClose={() => setSample(false)} />}
      </div>

      {/* Tweaks */}
      <TweaksPanel>
        <TweakSection label="Brand color" />
        <TweakColor label="Primary" value={t.primary}
          options={['#8A1A2A', '#9E1B2F', '#6E1E4E', '#7A3010']}
          onChange={(v) => setTweak('primary', v)} />
        <TweakColor label="Gold accent" value={t.accent}
          options={['#CCA13E', '#DEBB66', '#B98C2E', '#E2832B']}
          onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Typography" />
        <TweakSelect label="Headline font" value={t.headline}
          options={['Marcellus', 'Cormorant', 'Playfair', 'Yeseva One']}
          onChange={(v) => setTweak('headline', v)} />
        <TweakSection label="Shape & finish" />
        <TweakSlider label="Roundness" value={t.radius} min={10} max={28} unit="px"
          onChange={(v) => setTweak('radius', v)} />
        <TweakToggle label="Film grain" value={t.grain} onChange={(v) => setTweak('grain', v)} />
      </TweaksPanel>
    </div>
  );
}

function SampleModal({ onClose }) {
  const [playing, setPlaying] = useS(true);
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 80, background: 'rgba(20,6,10,.74)',
      backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: 20, animation: 'screenIn .25s ease both' }}>
      <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, width: 40, height: 40,
        borderRadius: '50%', background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <Icon name="x" size={20} color="#fff" />
      </button>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%' }}>
        <p className="eyebrow" style={{ color: 'var(--gold-400)', textAlign: 'center', marginBottom: 12 }}>Sample story</p>
        <div onClick={() => setPlaying(p => !p)} style={{ cursor: 'pointer' }}>
          <VideoTile theme={window.THEMES[0]} h={320} playing={playing} round={20} />
        </div>
        <p style={{ color: 'rgba(255,255,255,.85)', textAlign: 'center', marginTop: 14, fontSize: 14 }}>
          “Festival of Lights” · 45s · made from 3 family photos
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

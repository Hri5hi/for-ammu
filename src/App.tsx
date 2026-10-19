import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, BookOpen, Heart, Menu, Music2, Sparkles, X } from 'lucide-react'
import { content } from './content'

function Paragraphs({ text, className = '' }: { text: string; className?: string }) {
  return <div className={`prose ${className}`}>{text.split('\n\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
}

function memoryLabel(memory: { caption: string; prompt: string }) {
  return memory.caption || memory.prompt
}

function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

function Starfield({ count = 70 }: { count?: number }) {
  return <div className="starfield" aria-hidden="true">{Array.from({ length: count }, (_, i) => {
    const x = (i * 47.73 + 13) % 100
    const y = (i * i * 23.17 + i * 11.6 + 7) % 100
    const size = i % 11 === 0 ? 3 : i % 5 === 0 ? 2 : 1
    return <span className="sky-star" key={i} style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${(i % 12) * -.37}s` }} />
  })}</div>
}

function Planet({ name, variant = 'pink', small = false }: { name?: string; variant?: 'pink' | 'blue'; small?: boolean }) {
  return <div className={`planet-wrap ${small ? 'planet-small' : ''}`}>
    <div className={`planet planet-${variant}`} aria-hidden="true"><span className="planet-shine" /></div>
    {name && <span className="planet-name">{name}</span>}
  </div>
}

function HomeHug({ from, to }: { from: string; to: string }) {
  return <svg className="hero-hug" viewBox="0 0 190 150" role="img" aria-label={`${from} and ${to} hugging each other`}>
    <ellipse cx="95" cy="82" rx="77" ry="60" fill="#f3bed7" opacity=".11" />
    <ellipse cx="95" cy="137" rx="64" ry="7" fill="#090f29" opacity=".25" />
    <g className="hug-person hug-nandu">
      <path d="M27 132 Q28 91 43 78 Q52 69 67 73 Q82 74 89 93 L94 132 Z" fill="#7189bb" />
      <path d="M38 97 Q42 85 54 82" fill="none" stroke="#a4b6d5" strokeWidth="4" strokeLinecap="round" opacity=".7" />
      <path d="M57 69 L70 69 L70 85 Q64 90 57 82 Z" fill="#bd8065" />
      <ellipse cx="63" cy="48" rx="20" ry="24" fill="#c98c6d" />
      <path d="M42 48 Q38 27 52 22 Q62 16 73 23 Q84 26 84 39 Q79 43 77 39 Q73 38 69 32 Q59 41 47 39 L44 51 Z" fill="#252638" />
      <path d="M54 51 Q57 48 60 51 M67 51 Q70 48 73 51" fill="none" stroke="#4a3438" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M57 62 Q63 66 69 61" fill="none" stroke="#854d4c" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="49" cy="58" r="3" fill="#e5a18d" opacity=".55" />
    </g>
    <g className="hug-person hug-ammu">
      <path d="M101 49 Q99 19 124 18 Q148 19 149 47 L152 97 Q148 107 137 107 L105 104 Q97 96 99 81 Z" fill="#272538" />
      <path d="M93 132 Q95 91 108 78 Q116 71 132 75 Q149 80 157 132 Z" fill="#d99bb5" />
      <path d="M135 87 Q143 92 147 104" fill="none" stroke="#f0bdd0" strokeWidth="4" strokeLinecap="round" opacity=".75" />
      <path d="M119 68 L133 68 L133 85 Q127 90 120 83 Z" fill="#ab6e56" />
      <ellipse cx="125" cy="49" rx="19" ry="24" fill="#bb7d60" />
      <path d="M105 45 Q105 25 122 23 Q141 23 144 43 Q132 40 125 32 Q118 43 106 44 Z" fill="#272538" />
      <path d="M115 52 Q118 49 121 52 M129 52 Q132 49 135 52" fill="none" stroke="#493038" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M119 63 Q125 67 132 62" fill="none" stroke="#824748" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="139" cy="59" r="3" fill="#e49a8a" opacity=".5" />
    </g>
    <path d="M38 91 Q57 103 89 104 Q118 106 142 89" fill="none" stroke="#7189bb" strokeWidth="14" strokeLinecap="round" />
    <ellipse cx="143" cy="88" rx="8" ry="6" fill="#c98c6d" transform="rotate(-25 143 88)" />
    <path d="M148 98 Q133 117 105 119 Q78 119 55 101" fill="none" stroke="#d99bb5" strokeWidth="14" strokeLinecap="round" />
    <ellipse cx="54" cy="100" rx="8" ry="6" fill="#bb7d60" transform="rotate(22 54 100)" />
    <path className="hug-heart" d="M92 18 C86 11 76 18 81 26 C84 31 92 36 95 38 C99 35 108 29 109 23 C111 14 100 11 95 18 Z" fill="#f5a7c7" />
  </svg>
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'light-heading' : ''}`}><span className="eyebrow"><span className="eyebrow-star">✦</span> {eyebrow}</span><h2>{title}</h2></div>
}

function SceneDivider({ symbol = '✦' }: { symbol?: string }) {
  return <div className="scene-divider" aria-hidden="true"><span />{symbol}<span /></div>
}

function House() {
  return <div className="house-art" aria-hidden="true">
    <div className="house-moon" /><div className="house-smoke smoke-one" /><div className="house-smoke smoke-two" />
    <div className="house-chimney" /><div className="house-roof" /><div className="house-attic-window">♥</div>
    <div className="house-body"><div className="house-window left-window"><span /></div><div className="house-window right-window"><span /></div><div className="house-door" /></div>
    <div className="house-steps" /><div className="house-bush bush-left" /><div className="house-bush bush-right" />
    <div className="house-flower flower-one">✿</div><div className="house-flower flower-two">✿</div>
    <div className="house-ground" /><div className="house-spark one">✦</div><div className="house-spark two">✦</div>
  </div>
}

function App() {
  const [entered, setEntered] = useState(false)
  const [homeNoteOpen, setHomeNoteOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [reportIndex, setReportIndex] = useState<number | null>(null)
  const [funCard, setFunCard] = useState<number | null>(null)
  const [reasonIndex, setReasonIndex] = useState<number | null>(null)
  const [extraIndex, setExtraIndex] = useState<number | null>(null)
  const [memoryIndex, setMemoryIndex] = useState<number | null>(null)
  const [anniversaryOpen, setAnniversaryOpen] = useState(false)
  const [insideHouse, setInsideHouse] = useState(false)
  const [lampOn, setLampOn] = useState(true)
  const [letterOpen, setLetterOpen] = useState(false)
  const [hugSent, setHugSent] = useState(false)
  const heroPhotoRef = useRef<HTMLButtonElement>(null)
  const memoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: .08, rootMargin: '0px 0px -30px 0px' })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    setNavOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  const chooseNext = (current: number | null, length: number) => {
    if (length <= 1) return 0
    return (current === null ? Math.floor(Math.random() * length) : (current + 1 + Math.floor(Math.random() * (length - 1))) % length)
  }

  const closeHomeNote = () => {
    setHomeNoteOpen(false)
    window.setTimeout(() => heroPhotoRef.current?.focus(), 0)
  }

  const openMemory = (index: number) => {
    setMemoryIndex(index)
    window.setTimeout(() => memoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 30)
  }
  const selectedMemory: { prompt: string; date: string; caption: string; note: string; photo: string } | null =
    memoryIndex === null ? null : content.scrapbook.memories[memoryIndex]

  return <>
    <div className="reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    <a className="skip-link" href="#distance">Skip to the story</a>
    <header className="site-header">
      <button className="brand" onClick={() => goTo('top')} aria-label="Back to the beginning"><span className="brand-icon">✦</span>{content.ui.brand}</button>
      <div className="header-right"><span className="header-note">{content.ui.headerNote}</span><button className="nav-toggle" onClick={() => setNavOpen(!navOpen)} aria-expanded={navOpen} aria-controls="site-menu" aria-label={navOpen ? 'Close navigation' : 'Open navigation'}>{navOpen ? <X size={19} /> : <Menu size={19} />}<span>{content.ui.menuButton}</span></button></div>
      <nav className={`site-menu ${navOpen ? 'open' : ''}`} id="site-menu" aria-label="Story sections">
        <span className="menu-caption">{content.ui.menuCaption}</span>
        {content.navigation.map((item, i) => <a key={item.id} href={`#${item.id}`} onClick={event => { event.preventDefault(); goTo(item.id) }}><span>{String(i + 1).padStart(2, '0')}</span>{item.label}<ArrowRight size={15} /></a>)}
      </nav>
    </header>

    <main>
      <section className={`hero celestial ${entered ? 'world-entered' : ''}`} id="top">
        <Starfield count={92} />
        <div className="hero-nebula one" /><div className="hero-nebula two" />
        <div className="hero-inner page-width">
          <div className="hero-copy reveal is-visible"><span className="site-title-line">{content.siteTitle}</span><span className="eyebrow light-eyebrow"><span className="eyebrow-star">✦</span> {content.opening.eyebrow}</span><h1>{content.opening.title}</h1><p className="hero-subtitle">{content.subtitle}</p><Paragraphs text={content.opening.message} /><button className="button button-glow" onClick={() => { setEntered(true); window.setTimeout(() => goTo('distance'), 460) }}>{content.opening.button}<ArrowRight size={17} /></button><p className="disclaimer">{content.opening.disclaimer}</p></div>
          <div className="hero-visual">
            <div className="hero-planet-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><Planet variant="pink" /><span className="visual-spark a">✧</span><span className="visual-spark b">✦</span><span className="visual-spark c">✧</span><span className="visual-spark d">✦</span><span className="visual-heart">♥</span></div>
            <HomeHug from={content.names.from} to={content.names.to} />
            <button ref={heroPhotoRef} className="hero-photo" onClick={() => setHomeNoteOpen(true)} aria-expanded={homeNoteOpen} aria-controls="home-note" aria-label="Open a little note from Nandu">
              <img src={publicAsset(content.opening.featuredPhoto)} alt={content.opening.featuredPhotoAlt} />
              <span>{content.opening.featuredPhotoLabel}</span>
            </button>
            {homeNoteOpen && <div className="hero-note" id="home-note" role="region" aria-label="A little note from Nandu" onKeyDown={event => { if (event.key === 'Escape') closeHomeNote() }}>
              <span className="hero-note-spark" aria-hidden="true">✦</span>
              <span className="hero-note-kicker">A little note for you</span>
              <p>{content.opening.featuredNote}</p>
              <button className="hero-note-close" onClick={closeHomeNote} autoFocus>{content.opening.featuredNoteClose} <X size={15} /></button>
            </div>}
          </div>
        </div><button className="scroll-prompt" onClick={() => goTo('distance')}><span>{content.ui.scrollPrompt}</span><ArrowDown size={16} /></button>
      </section>

      <section className="distance celestial section-pad" id="distance"><Starfield count={58} /><div className="page-width distance-grid"><div className="distance-copy reveal"><SectionHeading eyebrow={content.distance.eyebrow} title={content.distance.title} light /><Paragraphs text={content.distance.message} /></div><div className="distance-art reveal" role="img" aria-label={`Glowing planets ${content.names.from} and ${content.names.to} connected by a constellation`}><div className="distance-orbit orbit-a" /><div className="distance-orbit orbit-b" /><svg className="constellation-line" viewBox="0 0 500 300" preserveAspectRatio="none" aria-hidden="true"><path d="M64 202 L122 160 L188 179 L243 119 L313 145 L374 89 L445 98" /><circle cx="122" cy="160" r="3" /><circle cx="188" cy="179" r="3" /><circle cx="243" cy="119" r="3" /><circle cx="313" cy="145" r="3" /><circle cx="374" cy="89" r="3" /></svg><div className="distance-nandu"><Planet name={content.distance.orbitLabels[0]} variant="blue" small /></div><div className="distance-ammu"><Planet name={content.distance.orbitLabels[1]} variant="pink" small /></div><span className="distance-caption">{content.distance.caption}</span></div></div></section>

      <section className="funny section-pad" id="laugh">
        <div className="funny-scatter" aria-hidden="true"><span>✳</span><span>♡</span><span>✦</span></div>
        <div className="page-width funny-content">
          <div className="funny-header reveal">
            <div className="funny-header-copy"><SectionHeading eyebrow={content.funny.eyebrow} title={content.funny.title} /><p>{content.funny.intro}</p></div>
            <div className="funny-badge" aria-hidden="true"><span>{content.funny.badgeTop}</span><strong>{content.funny.badgeMain}</strong><em>{content.funny.badgeBottom}</em></div>
          </div>
          <div className="funny-grid">{content.funny.cards.map((joke, i) =>
            <button className={`fun-card fun-card-${i % 6} reveal ${funCard === i ? 'selected' : ''}`} key={joke} onClick={() => setFunCard(funCard === i ? null : i)} aria-pressed={funCard === i}>
              <span className="fun-card-top"><span className="card-stamp">FILE {String(i + 1).padStart(2, '0')}</span><span className="fun-emoji" aria-hidden="true">{['✶', '♡', '☻', '✎', '∞', '↗'][i]}</span></span>
              <span className="fun-text">{joke}</span>
              <span className="card-bottom"><span>{funCard === i ? content.funny.cardOpenLabel : content.funny.cardClosedLabel}</span><ArrowRight size={16} aria-hidden="true" /></span>
            </button>
          )}</div>
          <div className="report-area reveal">
            <div className="report-callout"><span className="report-icon" aria-hidden="true">✷</span><p>{content.funny.reportPrompt}</p><button className="button button-dark" onClick={() => setReportIndex(chooseNext(reportIndex, content.funny.reports.length))}>{content.funny.button}<ArrowRight size={17} /></button></div>
            {reportIndex !== null && <div className="report-paper" aria-live="polite"><div className="report-paper-head"><span className="report-heading">{content.funny.reportTitle} <span>✦</span></span><span className="report-tag">{content.funny.reportTag}</span></div><div className="report-lines">{content.funny.reports[reportIndex].map(line => <p key={line}>{line}</p>)}</div><span className="report-signature">{content.funny.reportSignature}</span></div>}
          </div>
        </div>
      </section>

      <section className="reasons celestial section-pad" id="reasons"><Starfield count={55} /><div className="page-width"><div className="center-heading reveal"><SectionHeading eyebrow={content.reasons.eyebrow} title={content.reasons.title} light /><p>{content.reasons.intro}</p></div><div className="reason-grid">{content.reasons.cards.map((reason, i) => <button key={reason} className={`reason-card reveal ${reasonIndex === i ? 'active' : ''}`} onClick={() => setReasonIndex(reasonIndex === i ? null : i)} aria-pressed={reasonIndex === i}><span className="reason-spark">✦</span><span className="reason-number">{String(i + 1).padStart(2, '0')}</span><span>{reason}</span></button>)}</div><div className="extra-reason reveal"><button className="button button-light" onClick={() => setExtraIndex(chooseNext(extraIndex, content.reasons.extra.length))}>{content.reasons.button}<Sparkles size={17} /></button>{extraIndex !== null && <p className="extra-reveal" aria-live="polite">“{content.reasons.extra[extraIndex]}”</p>}</div></div></section>

      <section className="scrapbook section-pad blush" id="scrapbook">
        <div className="page-width">
          <div className="scrapbook-intro reveal"><SectionHeading eyebrow={content.scrapbook.eyebrow} title={content.scrapbook.title} /><p>{content.scrapbook.intro}</p></div>
          <div className="scrapbook-rail" aria-label="Memory pages">{content.scrapbook.memories.map((memory, i) =>
            <button key={memory.prompt} className={`polaroid ${memoryIndex === i ? 'chosen' : ''}`} onClick={() => openMemory(i)} aria-label={`Open memory page: ${memory.prompt}`}>
              <span className={`polaroid-picture picture-${i % 4}`}>{memory.photo ? <img src={publicAsset(memory.photo)} alt={memoryLabel(memory)} loading="lazy" /> : <span className="placeholder-art" aria-hidden="true"><span className="placeholder-sun" /><span className="placeholder-hill one" /><span className="placeholder-hill two" /><span className="placeholder-star">✦</span></span>}</span>
              <span className="polaroid-caption">{memoryLabel(memory)}</span>
              <span className="polaroid-date">{memory.date || `${String(i + 1).padStart(2, '0')} / a page for us`}</span>
            </button>
          )}</div>
          <div ref={memoryRef} className={`memory-detail ${selectedMemory?.photo ? 'with-photo' : ''}`} aria-live="polite">
            <div className="memory-detail-copy">
              <BookOpen size={21} />
              <span className="memory-tag">SCRAPBOOK NOTE {memoryIndex === null ? '✦' : String(memoryIndex + 1).padStart(2, '0')}</span>
              {selectedMemory && <h3>{memoryLabel(selectedMemory)}</h3>}
              <p>{selectedMemory ? selectedMemory.note : content.scrapbook.note}</p>
            </div>
            {selectedMemory?.photo && <div className="memory-detail-image"><img src={publicAsset(selectedMemory.photo)} alt={memoryLabel(selectedMemory)} loading="lazy" /></div>}
          </div>
        </div>
      </section>

      <section className="anniversary section-pad cream" id="anniversary"><div className="page-width anniversary-grid"><div className="anniversary-art reveal"><div className="calendar"><div className="calendar-top"><span /> <span /> <span /></div><span className="calendar-month">{content.anniversary.calendarMonth}</span><strong>{content.anniversary.calendarDay}</strong><span className="calendar-heart">♥</span><span className="calendar-bottom">{content.anniversary.calendarCaption}</span></div><div className="anniversary-stars">✧ &nbsp; ✦ &nbsp; ✧</div><div className="anniversary-planets"><Planet variant="blue" small /><Planet variant="pink" small /></div><span className="date-constellation">✦ · · ✧ · · ✦ &nbsp; {content.anniversary.dateDisplay} &nbsp; ✦ · · ✧ · · ✦</span></div><div className="anniversary-copy reveal"><SectionHeading eyebrow={content.anniversary.eyebrow} title={content.anniversary.title} /><Paragraphs text={content.anniversary.message} /><button className="text-button" onClick={() => setAnniversaryOpen(!anniversaryOpen)} aria-expanded={anniversaryOpen}>{content.anniversary.button}<ArrowRight size={16} /></button>{anniversaryOpen && <p className="gentle-reply" aria-live="polite">{content.anniversary.reply}</p>}</div></div></section>

      <section className="safe-section celestial section-pad" id="safe">
        <Starfield count={45} />
        <div className="page-width">
          <div className="safe-intro reveal"><SectionHeading eyebrow={content.safe.eyebrow} title={content.safe.sectionTitle} light /><p>{content.safe.invitation}</p></div>
          <div className={`safe-stage ${insideHouse ? 'is-inside' : ''}`}>
            {!insideHouse ? <div className="house-view">
              <span className="house-firefly firefly-one" aria-hidden="true" /><span className="house-firefly firefly-two" aria-hidden="true" /><span className="house-firefly firefly-three" aria-hidden="true" />
              <button className="house-entry-art" onClick={() => setInsideHouse(true)} aria-label={content.safe.houseArtLabel}><House /></button>
              <button className="button button-glow" onClick={() => setInsideHouse(true)}>{content.safe.enterButton}<ArrowRight size={17} /></button>
              <p className="house-hint">{content.safe.houseHint}</p>
            </div> : <div className={`room-view ${lampOn ? 'lamp-lit' : 'lamp-dim'}`}>
              <div className="room-window" aria-hidden="true"><span className="room-moon" /><span className="room-star s1">✧</span><span className="room-star s2">✦</span><span className="room-star s3">✧</span><span className="room-curtain curtain-left" /><span className="room-curtain curtain-right" /></div>
              <div className="room-lamp" aria-hidden="true"><span className="room-lamp-stem" /><span className="room-lamp-shade" /><span className="room-lamp-glow" /></div>
              <div className="room-controls">
                <button className="room-back" onClick={() => setInsideHouse(false)}><ArrowLeft size={16} /> {content.safe.exitButton}</button>
                <button className="room-lamp-toggle" onClick={() => setLampOn(!lampOn)} aria-pressed={lampOn}><span aria-hidden="true">✦</span> {lampOn ? content.safe.lampOnButton : content.safe.lampOffButton}</button>
              </div>
              <div className="room-letter"><span className="room-kicker">{content.safe.roomKicker}</span><h3>{content.safe.title}</h3><Paragraphs text={content.safe.message} /></div>
            </div>}
          </div>
        </div>
      </section>

      <section className="growth section-pad cream" id="growth"><div className="page-width"><div className="growth-heading reveal"><SectionHeading eyebrow={content.growth.eyebrow} title={content.growth.title} /><p>{content.growth.intro}</p></div><div className="growth-grid">{content.growth.intentions.map((intention, i) => <div className="growth-card reveal" key={intention}><span className="growth-number">{String(i + 1).padStart(2, '0')}</span><span className="growth-icon">{['♡', '✦', '◡', '☾', '✳'][i % 5]}</span><p>{intention}</p></div>)}</div><div className="growth-message reveal"><SceneDivider symbol="♡" /><Paragraphs text={content.growth.message} /></div></div></section>

      <section className="letter-section section-pad blush" id="letter"><div className="page-width letter-layout"><div className="letter-heading reveal"><SectionHeading eyebrow={content.letter.eyebrow} title={content.letter.title} /><p>{content.letter.instruction}</p></div><div className={`envelope-stage reveal ${letterOpen ? 'opened' : ''}`}><div className="envelope" aria-hidden="true"><div className="envelope-back" /><div className="envelope-paper-peek">{content.letter.envelopeLabel}</div><div className="envelope-flap" /><div className="envelope-front" /><span className="envelope-seal">♥</span></div><button className="button button-dark" onClick={() => setLetterOpen(!letterOpen)} aria-expanded={letterOpen}>{letterOpen ? content.letter.closeButton : content.letter.openButton}{letterOpen ? <X size={16} /> : <Heart size={16} />}</button></div>{letterOpen && <article className="letter-paper" aria-label="Letter from Nandu to Ammu"><span className="letter-paper-top">{content.letter.paperKicker}</span><Paragraphs text={content.letter.message} /></article>}</div></section>

      <section className="future celestial section-pad" id="future"><Starfield count={65} /><div className="future-horizon" /><div className="page-width future-content"><div className="center-heading reveal"><SectionHeading eyebrow={content.future.eyebrow} title={content.future.title} light /></div><div className="future-path" aria-label="Hopes for the future"><div className="path-line" />{content.future.hopes.map((hope, i) => <div className={`hope-card reveal hope-${i % 2}`} key={hope}><span className="hope-marker">✦</span><span className="hope-count">{String(i + 1).padStart(2, '0')}</span><p>{hope}</p></div>)}</div><div className="future-message reveal"><Paragraphs text={content.future.message} /></div></div></section>

      <section className={`finale celestial section-pad ${hugSent ? 'hug-sent' : ''}`} id="finale"><Starfield count={110} /><div className="finale-nebula" /><div className="page-width finale-content"><div className="finale-planets reveal" role="img" aria-label="Two glowing planets together in a sky full of stars"><div className="finale-planet p1"><Planet variant="blue" small /></div><div className="finale-planet p2"><Planet variant="pink" small /></div><span className="hug-heart">♥</span><span className="finale-orbit" /></div><div className="finale-copy reveal"><SectionHeading eyebrow={content.finale.eyebrow} title={content.finale.title} light /><Paragraphs text={content.finale.message} /><button className="button button-glow hug-button" onClick={() => setHugSent(true)}>{content.finale.button}<Heart size={17} /></button>{hugSent && <div className="hug-reply" role="status"><Paragraphs text={content.finale.hugReply} /></div>}</div><p className="footer-note">{content.ui.closingNote}</p></div></section>
    </main>
    {content.voiceRecording && <div className="audio-note"><Music2 size={18} /><span>{content.ui.audioLabel}</span><audio controls preload="none" src={publicAsset(content.voiceRecording)}>Your browser does not support audio.</audio></div>}
    <footer className="site-footer"><span>✦ {content.ui.brand}</span><button onClick={() => goTo('top')}>{content.ui.backToStart}</button><span>{content.ui.footer}</span></footer>
  </>
}

export default App

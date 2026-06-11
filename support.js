<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Swann Lafon — +1 000€/mois en 90 Jours</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red: #cc0000;
    --red-bright: #ff2222;
    --red-glow: #cc000055;
    --red-dark: #1a0000;
    --red-border: #2a0000;
    --bg: #000000;
    --bg-dark: #080808;
    --bg-card: #0c0c0c;
    --bg-card2: #0d0d0d;
    --border: #1c1c1c;
    --border2: #1a1a1a;
    --text: #ffffff;
    --text-muted: #999999;
    --text-dim: #666666;
    --text-faint: #444444;
    --text-ultra: #333333;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .lp {
    max-width: 480px;
    margin: 0 auto;
  }

  /* ── HERO ── */
  .hero {
    padding: 52px 24px 40px;
    text-align: center;
  }

  .badge {
    display: inline-block;
    background: var(--red-dark);
    border: 1px solid var(--red);
    color: #ff5555;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 24px;
  }

  .hero-title {
    font-size: 30px;
    font-weight: 900;
    line-height: 1.18;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
  }

  .hero-title .accent {
    color: var(--red-bright);
  }

  /* ── VIDEO ── */
  .video-wrap {
    background: #0d0d0d;
    border: 1px solid #1f1f1f;
    border-radius: 16px;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .video-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, #1a0000 0%, #050505 70%);
  }

  .play-wrap {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .play-circle {
    width: 64px;
    height: 64px;
    background: var(--red);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 36px var(--red-glow);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .play-circle:hover {
    transform: scale(1.08);
    box-shadow: 0 0 52px #cc000088;
  }

  .play-triangle {
    width: 0;
    height: 0;
    border-left: 22px solid #fff;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    margin-left: 5px;
  }

  .play-label {
    font-size: 11px;
    color: #555;
    letter-spacing: 0.4px;
  }

  /* ── CTA BUTTON ── */
  .cta-btn {
    display: block;
    width: 100%;
    background: var(--red);
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    padding: 20px 24px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    text-align: center;
    letter-spacing: 0.6px;
    box-shadow: 0 6px 40px var(--red-glow);
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
    text-decoration: none;
  }

  .cta-btn:hover {
    background: #e00000;
    transform: translateY(-2px);
    box-shadow: 0 10px 50px #cc000077;
  }

  .cta-btn:active {
    transform: translateY(0);
  }

  .cta-note {
    font-size: 11px;
    color: var(--text-faint);
    text-align: center;
    margin-top: 12px;
  }

  /* ── STATS ── */
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 32px 24px;
    gap: 0;
  }

  .stat {
    text-align: center;
    padding: 0 8px;
  }

  .stat + .stat {
    border-left: 1px solid #111;
  }

  .stat-num {
    display: block;
    font-size: 26px;
    font-weight: 900;
    color: var(--red-bright);
    letter-spacing: -0.5px;
  }

  .stat-label {
    display: block;
    font-size: 10px;
    color: #444;
    margin-top: 6px;
    line-height: 1.4;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ── SECTIONS ── */
  .section {
    padding: 44px 24px;
    text-align: center;
  }

  .section-dark {
    background: var(--bg-dark);
    padding: 44px 24px;
    text-align: center;
  }

  .eyebrow {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--red);
    font-weight: 700;
    margin-bottom: 12px;
  }

  .sec-title {
    font-size: 22px;
    font-weight: 900;
    line-height: 1.22;
    margin-bottom: 28px;
    letter-spacing: -0.3px;
  }

  .sec-title .accent {
    color: var(--red-bright);
  }

  /* ── PROOF CARDS ── */
  .proofs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 32px;
    text-align: left;
  }

  .proof-card {
    background: var(--bg-card2);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 14px;
  }

  .proof-name {
    font-size: 10px;
    color: var(--red);
    font-weight: 700;
    margin-bottom: 7px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .proof-msg {
    font-size: 11px;
    color: #bbb;
    line-height: 1.55;
  }

  .proof-result {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 800;
    color: #fff;
  }

  /* ── PROBLEM ── */
  .prob-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: left;
    margin-bottom: 32px;
  }

  .prob-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    font-size: 14px;
    color: #888;
    line-height: 1.55;
  }

  .prob-icon {
    width: 32px;
    height: 32px;
    min-width: 32px;
    background: #130000;
    border: 1px solid var(--red-border);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

  /* ── STEPS ── */
  .steps {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 32px;
    text-align: left;
  }

  .step {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border2);
    border-radius: 14px;
    padding: 18px;
  }

  .step-num {
    width: 36px;
    height: 36px;
    min-width: 36px;
    border: 1.5px solid var(--red);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 800;
    color: var(--red);
  }

  .step-body strong {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }

  .step-body p {
    font-size: 12px;
    color: #888;
    line-height: 1.6;
  }

  /* ── AUTHOR ── */
  .author-card {
    background: var(--bg-card);
    border: 1px solid var(--border2);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 32px;
    text-align: left;
  }

  .author-av {
    width: 60px;
    height: 60px;
    min-width: 60px;
    border-radius: 50%;
    background: var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    border: 2px solid #ff4444;
  }

  .author-name {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 6px;
  }

  .author-bio {
    font-size: 13px;
    color: #666;
    line-height: 1.65;
  }

  /* ── FAQ ── */
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 32px;
    text-align: left;
  }

  .faq-item {
    background: var(--bg-card);
    border: 1px solid var(--border2);
    border-radius: 12px;
    padding: 18px;
    cursor: pointer;
  }

  .faq-q {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-q::after {
    content: '+';
    color: var(--red);
    font-size: 20px;
    font-weight: 400;
    transition: transform 0.2s;
  }

  .faq-item.open .faq-q::after {
    transform: rotate(45deg);
  }

  .faq-a {
    font-size: 13px;
    color: #555;
    line-height: 1.65;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, margin-top 0.2s;
  }

  .faq-item.open .faq-a {
    max-height: 200px;
    margin-top: 10px;
  }

  /* ── FINAL CTA ── */
  .final-section {
    padding: 52px 24px 60px;
    text-align: center;
  }

  .urgency-tag {
    display: inline-block;
    background: var(--red-dark);
    border: 1px solid var(--red);
    color: #ff5555;
    font-size: 11px;
    font-weight: 700;
    padding: 7px 18px;
    border-radius: 20px;
    margin-bottom: 22px;
  }

  .final-title {
    font-size: 24px;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 10px;
    letter-spacing: -0.3px;
  }

  .final-sub {
    font-size: 14px;
    color: #444;
    margin-bottom: 28px;
    line-height: 1.5;
  }

  .guarantee {
    font-size: 11px;
    color: #2a2a2a;
    margin-top: 14px;
  }

  /* ── FOOTER ── */
  .footer {
    padding: 24px;
    text-align: center;
    border-top: 1px solid #0f0f0f;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 11px;
    color: #333;
  }

  .footer-links a {
    color: #333;
    text-decoration: none;
  }

  .footer-links a:hover {
    color: var(--red);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 380px) {
    .hero-title { font-size: 25px; }
    .sec-title { font-size: 20px; }
    .stat-num { font-size: 22px; }
  }

  @media (min-width: 600px) {
    .hero-title { font-size: 34px; }
    .sec-title { font-size: 26px; }
  }
</style>
</head>
<body>

<div class="lp">

  <!-- HERO -->
  <div class="hero">
    <div class="badge">🔴 Accès limité — 12 places restantes</div>
    <h1 class="hero-title">
      Et si dans 90j, tu recevais <span class="accent">+1 000€</span> de plus par mois depuis chez toi&nbsp;?!
    </h1>
    <div class="video-wrap">
      <div class="video-bg"></div>
      <div class="play-wrap">
        <div class="play-circle">
          <div class="play-triangle"></div>
        </div>
        <span class="play-label">Regarde la vidéo — 5 min pour tout comprendre</span>
      </div>
    </div>
    <a href="#questionnaire" class="cta-btn">Je Postule</a>
    <p class="cta-note">Questionnaire de 2 min · Réponse sous 24h</p>
  </div>

  <!-- STATS -->
  <div class="stats">
    <div class="stat">
      <span class="stat-num">+300</span>
      <span class="stat-label">Membres actifs</span>
    </div>
    <div class="stat">
      <span class="stat-num">J·1</span>
      <span class="stat-label">Premiers résultats</span>
    </div>
    <div class="stat">
      <span class="stat-num">+1K€</span>
      <span class="stat-label">Revenu résiduel après 90j</span>
    </div>
  </div>

  <!-- PREUVES SOCIALES -->
  <div class="section">
    <p class="eyebrow">Preuves sociales</p>
    <h2 class="sec-title">Des gens comme toi qui ont sauté le pas</h2>
    <div class="proofs-grid">
      <div class="proof-card">
        <div class="proof-name">Doryane</div>
        <div class="proof-msg">"Premier retrait 100€ effectué ✅ LETS GOOOAAA"</div>
        <div class="proof-result">Semaine 3 🔥</div>
      </div>
      <div class="proof-card">
        <div class="proof-name">Client #2</div>
        <div class="proof-msg">"Fluide, propre, boosté. Dans ce biz depuis 1 mois."</div>
        <div class="proof-result">1 mois ✅</div>
      </div>
      <div class="proof-card">
        <div class="proof-name">Client #3</div>
        <div class="proof-msg">"Ça sera une première victoire !"</div>
        <div class="proof-result">Premier retrait 💸</div>
      </div>
      <div class="proof-card">
        <div class="proof-name">Client #4</div>
        <div class="proof-msg">"Même en coaching ça brasse. Grand fou ahah"</div>
        <div class="proof-result">En cours 📈</div>
      </div>
    </div>
    <a href="#questionnaire" class="cta-btn">Je Postule</a>
    <p class="cta-note">Questionnaire de 2 min · Réponse sous 24h</p>
  </div>

  <!-- PROBLÈME -->
  <div class="section-dark">
    <p class="eyebrow">Le problème</p>
    <h2 class="sec-title">Tu travailles dur.<br>Ton solde, lui, <span class="accent">ne bouge pas.</span></h2>
    <ul class="prob-list">
      <li>
        <div class="prob-icon">😤</div>
        Chaque fin de mois, c'est pareil — les mêmes chiffres, le même plafond.
      </li>
      <li>
        <div class="prob-icon">📱</div>
        Tu vois des gens générer en ligne et tu te demandes comment ils font vraiment.
      </li>
      <li>
        <div class="prob-icon">⏳</div>
        Tu attends le "bon moment" pour te lancer — qui ne vient jamais.
      </li>
    </ul>
    <a href="#questionnaire" class="cta-btn">Je Postule</a>
    <p class="cta-note">Questionnaire de 2 min · Réponse sous 24h</p>
  </div>

  <!-- MÉTHODE -->
  <div class="section">
    <p class="eyebrow">La méthode</p>
    <h2 class="sec-title">Ce que j'ai mis en place —<br>et que je t'enseigne</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-body">
          <strong>Les fondations — J1 à J15</strong>
          <p>Comprendre le système, installer les bons outils, générer tes premières victoires dès le jour 1.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-body">
          <strong>Activation — J15 à J45</strong>
          <p>Les premières entrées d'argent. On pose les bases du résiduel.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-body">
          <strong>Scaler — J45 à J90</strong>
          <p>Dépasser les 1 000€/mois. Automatiser pour que ça tourne sans toi.</p>
        </div>
      </div>
    </div>
    <a href="#questionnaire" class="cta-btn">Je Postule</a>
    <p class="cta-note">Questionnaire de 2 min · Réponse sous 24h</p>
  </div>

  <!-- QUI JE SUIS -->
  <div class="section-dark">
    <p class="eyebrow">Qui je suis</p>
    <h2 class="sec-title">Un peu plus sur moi</h2>
    <div class="author-card">
      <div class="author-av">SL</div>
      <div>
        <div class="author-name">Swann Lafon</div>
        <div class="author-bio">Je ne suis pas un guru. J'ai trouvé un système qui fonctionne et je le partage à ceux qui sont vraiment motivés. Résultats vérifiables. Clients réels.</div>
      </div>
    </div>
    <a href="#questionnaire" class="cta-btn">Je Postule</a>
    <p class="cta-note">Questionnaire de 2 min · Réponse sous 24h</p>
  </div>

  <!-- FAQ -->
  <div class="section">
    <p class="eyebrow">FAQ</p>
    <h2 class="sec-title">Les questions qu'on me pose</h2>
    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q">Est-ce que c'est légal ?</div>
        <div class="faq-a">Oui, à 100%. C'est un business en ligne déclarable, pratiqué par des milliers de personnes en France.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Combien de temps ça prend par jour ?</div>
        <div class="faq-a">1h à 2h/jour suffisent pour démarrer. L'objectif est de réduire ce temps au fur et à mesure que tu automatises.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Et si ça ne marche pas pour moi ?</div>
        <div class="faq-a">Je ne travaille qu'avec des personnes motivées. Si tu appliques réellement, les résultats viennent. Je suis là pour t'accompagner.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">J'ai besoin de combien pour démarrer ?</div>
        <div class="faq-a">Très peu. Le système est conçu pour être accessible, même sans capital de départ.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">C'est pour qui exactement ?</div>
        <div class="faq-a">Pour toute personne motivée qui veut un revenu complémentaire depuis chez elle, sans expérience préalable.</div>
      </div>
    </div>
    <a href="#questionnaire" class="cta-btn">Je Postule</a>
    <p class="cta-note">Questionnaire de 2 min · Réponse sous 24h</p>
  </div>

  <!-- FINAL CTA -->
  <div class="final-section" id="questionnaire">
    <div class="urgency-tag">⚠️ Places limitées</div>
    <h2 class="final-title">Si tu le fais pas aujourd'hui,<br>quelqu'un d'autre le fera.</h2>
    <p class="final-sub">Je ne prends pas tout le monde.<br>Postule pour voir si tu es éligible.</p>
    <a href="LIEN_QUESTIONNAIRE_ICI" class="cta-btn">Je Postule</a>
    <p class="guarantee">Questionnaire de 2 min · Réponse sous 24h · Sans engagement</p>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <div class="footer-links">
      <a href="#">Mentions légales</a>
      <a href="#">Confidentialité</a>
      <a href="#">Contact</a>
    </div>
  </div>

</div>

<script>
  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Smooth scroll CTA
  document.querySelectorAll('a[href="#questionnaire"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('questionnaire').scrollIntoView({ behavior: 'smooth' });
    });
  });
</script>

</body>
</html>

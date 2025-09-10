const { useState } = React;
const { motion } = window; // framer-motion from CDN (if you include it)
const { Check, Shield, Zap, BarChart3, Bell, Users, RefreshCcw, LineChart, Trophy, MessageSquare } = window; // lucide-react from CDN

function App() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" aria-hidden />,
      title: "Juice‑Free Lines",
      desc: "Our algorithm removes all juice from every line — no vig, ever.",
    },
    {
      icon: <RefreshCcw className="h-6 w-6" aria-hidden />,
      title: "Live Odds, Every 30s",
      desc: "Lines refresh every 30 seconds so you always see the most accurate prices.",
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden />,
      title: "Peer‑to‑Peer Betting",
      desc: "Match directly with other members on spreads, moneylines, and totals.",
    },
    {
      icon: <Bell className="h-6 w-6" aria-hidden />,
      title: "Real‑Time Alerts",
      desc: "Get notified the moment a bet is offered, accepted, or a game settles.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" aria-hidden />,
      title: "Records & Stats",
      desc: "Track wins/losses, bankroll, and head‑to‑head results by day, week, or month.",
    },
    {
      icon: <LineChart className="h-6 w-6" aria-hidden />,
      title: "Major Leagues Covered",
      desc: "NFL, NCAA Football, NCAA Basketball, MLB, NHL, and NBA — all in one place.",
    },
  ];

  const faqs = [
    {
      q: "What makes Drop The Book different?",
      a: "Unlike traditional casinos and sportsbooks, we’re completely juice free. Our algorithm removes vig from every line and prices refresh every 30 seconds for up‑to‑date odds.",
    },
    {
      q: "Which bet types are supported?",
      a: "Spread, Moneyline, and Over/Under (Totals) — with live odds across NFL, NCAA Football, NCAA Basketball, MLB, NHL, and NBA.",
    },
    {
      q: "How does membership work?",
      a: "Choose $9.99/month or $99/year (plus tax). Every plan starts with a free 7‑day trial and you can cancel anytime.",
    },
    {
      q: "Is there a community?",
      a: "Yes — members can discuss games, lines, and strategy in an interactive forum, plus a dedicated poker forum to meet new members.",
    },
    {
      q: "How will I know when a bet is matched or settled?",
      a: "You’ll receive live notifications when your offers are accepted and when a game completes with the winner/loser status.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--dtb-black)] text-[var(--dtb-light)]">
      <style>{`
        :root {
          --dtb-purple: #4e046d;
          --dtb-black: #120E14;
          --dtb-gray: #919599;
          --dtb-yellow: #F5C518;
          --dtb-light: #E0E0E0;
        }
      `}</style>

      {/* Top bar */}
      <div className="w-full bg-[var(--dtb-purple)] text-[var(--dtb-light)] text-center py-2 text-sm font-medium">
        Start your free 7‑day trial today — cancel anytime.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/DTB-Logo-black.png" alt="Drop The Book logo" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-tight text-[var(--dtb-light)]">Drop The Book</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--dtb-gray)]">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#community" className="hover:text-white">Community</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 md:py-28 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Bet with Friends. <span className="text-[var(--dtb-yellow)]">Not the House.</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--dtb-gray)] max-w-xl">
            Drop The Book is a membership‑only, peer‑to‑peer sports betting platform with <span className="text-white font-medium">zero juice</span>. Live, vig‑free odds refresh every 30 seconds across NFL, NCAA Football & Basketball, MLB, NHL, and NBA.
          </p>
        </div>
        <div>
          {/* Placeholder for hero graphic */}
          <div className="h-64 bg-white/5 rounded-xl" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to bet peer‑to‑peer</h2>
          <p className="mt-3 text-[var(--dtb-gray)]">Fair pricing, real‑time lines, and powerful tools to manage your action.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dtb-purple)]/40 text-[var(--dtb-yellow)] mb-3">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-1">{f.title}</h3>
              <p className="text-[var(--dtb-gray)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Frequently asked questions</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="text-white text-lg font-semibold mb-2">{f.q}</h4>
              <p className="text-[var(--dtb-gray)]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-[var(--dtb-gray)]">
        © {new Date().getFullYear()} Drop The Book. All rights reserved.
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

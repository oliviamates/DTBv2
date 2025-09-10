const { useState } = React;

function App() {
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

      {/* Header */}
      <header className="bg-[var(--dtb-purple)] p-6 text-center font-bold text-white">
        Drop The Book — P2P Sports Betting
      </header>

      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Bet with Friends. <span className="text-[var(--dtb-yellow)]">Not the House.</span>
        </h1>
        <p className="text-gray-400 mb-6">
          Membership-only, juice-free peer-to-peer sports betting.
        </p>
        <a href="#pricing" className="bg-[var(--dtb-yellow)] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[var(--dtb-yellow)]/90">
          Start Free Trial
        </a>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        {[
          { title: "Juice-Free Lines", desc: "No vig, ever." },
          { title: "Live Odds", desc: "Lines refresh every 30 seconds." },
          { title: "Peer-to-Peer Betting", desc: "Match directly with other members." },
        ].map(f => (
          <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-[var(--dtb-gray)]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Membership Plans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Monthly</h3>
            <p className="text-4xl font-bold text-white mb-4">$9.99/mo</p>
            <ul className="text-[var(--dtb-light)] mb-6 space-y-2">
              <li>7-day Free Trial</li>
              <li>Live Juice-Free Odds</li>
              <li>Forum Access</li>
            </ul>
            <a href="#" className="bg-[var(--dtb-yellow)] px-6 py-3 rounded-xl text-black font-semibold hover:bg-[var(--dtb-yellow)]/90">
              Start Free Trial
            </a>
          </div>
          <div className="bg-white/5 border border-[var(--dtb-yellow)] p-8 rounded-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--dtb-yellow)] px-3 py-1 rounded-full font-semibold text-black text-xs">
              Best Value
            </div>
            <h3 className="text-xl font-semibold mb-4">Annual</h3>
            <p className="text-4xl font-bold text-white mb-4">$99/yr</p>
            <ul className="text-[var(--dtb-light)] mb-6 space-y-2">
              <li>7-day Free Trial</li>
              <li>Save ~17% vs Monthly</li>
              <li>VIP Forum Flair</li>
            </ul>
            <a href="#" className="bg-[var(--dtb-yellow)] px-6 py-3 rounded-xl text-black font-semibold hover:bg-[var(--dtb-yellow)]/90">
              Go Annual
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-[var(--dtb-gray)]">
        © {new Date().getFullYear()} Drop The Book. All rights reserved.
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

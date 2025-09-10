import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Zap,
  BarChart3,
  Bell,
  Users,
  RefreshCcw,
  LineChart,
  Trophy,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function App() {
  const features = [
    { icon: <Shield className="h-6 w-6" />, title: "Juice‑Free Lines", desc: "Our algorithm removes all juice from every line — no vig, ever." },
    { icon: <RefreshCcw className="h-6 w-6" />, title: "Live Odds, Every 30s", desc: "Lines refresh every 30 seconds so you always see the most accurate prices." },
    { icon: <Users className="h-6 w-6" />, title: "Peer‑to‑Peer Betting", desc: "Match directly with other members on spreads, moneylines, and totals." },
    { icon: <Bell className="h-6 w-6" />, title: "Real‑Time Alerts", desc: "Get notified the moment a bet is offered, accepted, or a game settles." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Records & Stats", desc: "Track wins/losses, bankroll, and head‑to‑head results by day, week, or month." },
    { icon: <LineChart className="h-6 w-6" />, title: "Major Leagues Covered", desc: "NFL, NCAA Football, NCAA Basketball, MLB, NHL, and NBA — all in one place." },
  ];

  const faqs = [
    { q: "What makes Drop The Book different?", a: "Unlike traditional casinos and sportsbooks, we’re completely juice free. Our algorithm removes vig from every line and prices refresh every 30 seconds for up‑to‑date odds." },
    { q: "Which bet types are supported?", a: "Spread, Moneyline, and Over/Under (Totals) — with live odds across NFL, NCAA Football, NCAA Basketball, MLB, NHL, and NBA." },
    { q: "How does membership work?", a: "Choose $9.99/month or $99/year (plus tax). Every plan starts with a free 7‑day trial and you can cancel anytime." },
    { q: "Is there a community?", a: "Yes — members can discuss games, lines, and strategy in an interactive forum, plus a dedicated poker forum to meet new members." },
    { q: "How will I know when a bet is matched or settled?", a: "You’ll receive live notifications when your offers are accepted and when a game completes with the winner/loser status." },
  ];

  const stats = [
    { label: "W/L", value: "58%" },
    { label: "ROI", value: "+12.4%" },
    { label: "H2H", value: "7–2" },
  ];

  return (
    <div className="min-h-screen bg-[var(--dtb-black)] text-[var(--dtb-light)]">
      {/* CSS Variables */}
      <style>{`
        :root {
          --dtb-purple: #4e046d;
          --dtb-black: #120E14;
          --dtb-gray: #919599;
          --dtb-yellow: #F5C518;
          --dtb-light: #E0E0E0;
        }
      `}</style>

      {/* Announcement */}
      <div className="w-full bg-[var(--dtb-purple)] text-[var(--dtb-light)]">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm">
          <span className="font-medium">Start your free 7‑day trial today — cancel anytime.</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/20 border-b border-white/5">
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
          <div className="flex items-center gap-3">
            <Button className="bg-transparent border border-white/20 text-[var(--dtb-light)] hover:bg-white/10" onClick={() => window.location.href="https://app.dropthebook.com/login"}>Sign in</Button>
            <Button className="bg-[var(--dtb-yellow)] text-black hover:bg-[var(--dtb-yellow)]/90" onClick={() => window.location.href="https://app.dropthebook.com/enrollment"}>Start Free Trial</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--dtb-purple)]/20 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Bet with Friends. <span className="text-[var(--dtb-yellow)]">Not the House.</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--dtb-gray)] max-w-xl">
              Drop The Book is a membership‑only, peer‑to‑peer sports betting platform with <span className="text-white font-medium">zero juice</span>. Live, vig‑free odds refresh every 30 seconds across NFL, NCAA Football & Basketball, MLB, NHL, and NBA.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-[var(--dtb-yellow)] text-black hover:bg-[var(--dtb-yellow)]/90 text-base px-6 py-6" onClick={() => window.location.href="https://app.dropthebook.com/enrollment"}>Start Free 7‑Day Trial</Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-[var(--dtb-gray)] text-sm">
              <Trophy className="h-4 w-4" />
              <span>No vig. No hidden fees. Cancel anytime.</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {["NFL","NCAA F","NCAA B","MLB","NHL","NBA"].map(lg => (
                  <div key={lg} className="rounded-xl bg-black/30 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-sm text-[var(--dtb-gray)]">
                      <span>{lg}</span>
                      <Zap className="h-4 w-4" />
                    </div>
                    <div className="mt-3 h-24 rounded-lg bg-gradient-to-r from-[var(--dtb-purple)]/30 to-transparent ring-1 ring-white/10" />
                    <div className="mt-3 flex items-center justify-between text-xs text-[var(--dtb-gray)]">
                      <span>Spread • ML • O/U</span>
                      <span className="text-[var(--dtb-yellow)]">Live 30s</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-[var(--dtb-gray)] flex items-center gap-2">
                <Shield className="h-4 w-4" /> Juice removed on every line
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need to bet peer‑to‑peer</h2>
          <p className="mt-3 text-[var(--dtb-gray)]">Fair pricing, real‑time lines, and powerful tools to manage your action.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(f => (
            <Card key={f.title} className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dtb-purple)]/40 text-[var(--dtb-yellow)]">
                  {f.icon}
                </div>
                <CardTitle className="mt-3 text-white">{f.title}</CardTitle>
                <CardDescription className="text-[var(--dtb-gray)]">{f.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Community */}
      <section id="community" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Join the conversation</h3>
            <p className="mt-3 text-[var(--dtb-gray)]">
              Our interactive forum makes it easy to chat lines, share picks, and swap strategies. There’s also a dedicated poker forum and plenty of ways to meet new members.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--dtb-light)]">
              <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Team/game discussion threads</li>
              <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Follow members and get notified when they post or offer bets</li>
              <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Head‑to‑head records and friendly rivalries</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="flex items-center gap-3 text-sm text-[var(--dtb-gray)]"><MessageSquare className="h-4 w-4" /> Live thread: Sunday slate odds talk</div>
              <div className="mt-4 space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="rounded-xl bg-black/30 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--dtb-light)]">@Member{i}</span>
                      <span className="text-[var(--dtb-gray)]">just now</span>
                    </div>
                    <p className="mt-2 text-[var(--dtb-gray)]">Looking at the spread — love the matchup here. Anyone offering +3.5?</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Simple, member‑only pricing</h3>
          <p className="mt-3 text-[var(--dtb-gray)]">Start free for 7 days. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Monthly */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Monthly</CardTitle>
              <CardDescription className="text-[var(--dtb-gray)]">Best for trying things out</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-white">$9.99<span className="text-lg font-medium text-[var(--dtb-gray)]">/mo</span></p>
              <ul className="mt-6 space-y-3 text-[var(--dtb-light)]">
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Free 7‑day trial</li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Full access to live, juice‑free odds</li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Interactive forums & notifications</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[var(--dtb-yellow)] text-black hover:bg-[var(--dtb-yellow)]/90" onClick={() => window.location.href="https://app.dropthebook.com/enrollment"}>Start Free Trial</Button>
            </CardFooter>
          </Card>

          {/* Annual */}
          <Card className="relative bg-gradient-to-b from-white/10 to-white/5 border-[var(--dtb-yellow)] border">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--dtb-yellow)] px-3 py-1 text-xs font-semibold text-black">
              Best Value
            </div>
            <CardHeader>
              <CardTitle className="text-white">Annual</CardTitle>
              <CardDescription className="text-[var(--dtb-gray)]">Most popular with active members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-white">$99<span className="text-lg font-medium text-[var(--dtb-gray)]">/yr</span></p>
              <ul className="mt-6 space-y-3 text-[var(--dtb-light)]">
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Free 7‑day trial</li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Save ~17% vs monthly</li>
                <li className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 text-[var(--dtb-yellow)]" /> Everything in Monthly, plus VIP forum flair</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[var(--dtb-yellow)] text-black hover:bg-[var(--dtb-yellow)]/90" onClick={() => window.location.href="https://app.dropthebook.com/enrollment"}>Go Annual</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Email capture */}
        <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col md:flex-row gap-3">
            <Input placeholder="Enter your email" className="bg-black/40 border-white/10 text-[var(--dtb-light)] placeholder:text-[var(--dtb-gray)]" />
            <Button className="bg-[var(--dtb-purple)] text-white hover:bg-[var(--dtb-purple)]/90">Get Early Access</Button>
          </div>
          <p className="mt-3 text-xs text-[var(--dtb-gray)]">By submitting, you agree to our Terms and acknowledge our Privacy Policy.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Know your edge with detailed Records & Statistics</h3>
            <p className="mt-3 text-[var(--dtb-gray)]">Track wins, losses, ROI, and head‑to‑head results for every league you play in.</p>
          </div>
          <div className="flex gap-6">
            {stats.map(s => (
              <div key={s.label} className="bg-black/30 p-6 rounded-xl text-center border border-white/10 flex-1">
                <p className="text-[var(--dtb-yellow)] text-3xl font-bold">{s.value}</p>
                <p className="text-[var(--dtb-gray)] mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h3>
          <p className="mt-3 text-[var(--dtb-gray)]">Answers to common questions about Drop The Book.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map(f => (
            <Card key={f.q} className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">{f.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--dtb-gray)]">{f.a}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/5 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 text-[var(--dtb-gray)] text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Drop The Book. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

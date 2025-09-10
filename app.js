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

// Update these imports to match your folder structure
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";

function App() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Juice-Free Lines",
      desc: "Our algorithm removes all juice from every line — no vig, ever.",
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: "Live Odds, Every 30s",
      desc: "Lines refresh every 30 seconds so you always see the most accurate prices.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Peer-to-Peer Betting",
      desc: "Match directly with other members on spreads, moneylines, and totals.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Real-Time Alerts",
      desc: "Get notified the moment a bet is offered, accepted, or a game settles.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Records & Stats",
      desc: "Track wins/losses, bankroll, and head-to-head results by day, week, or month.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Major Leagues Covered",
      desc: "NFL, NCAA Football, NCAA Basketball, MLB, NHL, and NBA — all in one place.",
    },
  ];

  const faqs = [
    {
      q: "What makes Drop The Book different?",
      a: "Unlike traditional casinos and sportsbooks, we’re completely juice free. Our algorithm removes vig from every line and prices refresh every 30 seconds for up-to-date odds.",
    },
    {
      q: "Which bet types are supported?",
      a: "Spread, Moneyline, and Over/Under (Totals) — with live odds across NFL, NCAA Football, NCAA Basketball, MLB, NHL, and NBA.",
    },
    {
      q: "How does membership work?",
      a: "Choose $9.99/month or $99/year (plus tax). Every plan starts with a free 7-day trial and you can cancel anytime.",
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

  const stats = [
    { label: "W/L", value: "58%" },
    { label: "ROI", value: "+12.4%" },
    { label: "H2H", value: "7–2" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Announcement */}
      <div className="w-full bg-purple-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm font-medium">
          Start your free 7-day trial today — cancel anytime.
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/DTB-Logo-black.png" alt="Drop The Book logo" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-tight">Drop The Book</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#community" className="hover:text-white">Community</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="bg-transparent border border-white/20 hover:bg-white/10" onClick={() => window.location.href="https://app.dropthebook.com/login"}>Sign in</Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-400/90" onClick={() => window.location.href="https://app.dropthebook.com/enrollment"}>Start Free Trial</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Bet with Friends. <span className="text-yellow-400">Not the House.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 max-w-xl">
              Drop The Book is a membership-only, peer-to-peer sports betting platform with <span className="text-white font-medium">zero juice</span>. Live, vig-free odds refresh every 30 seconds across NFL, NCAA Football & Basketball, MLB, NHL, and NBA.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-400/90 px-6 py-6" onClick={() => window.location.href="https://app.dropthebook.com/enrollment"}>Start Free 7-Day Trial</Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-gray-400 text-sm">
              <Trophy className="h-4 w-4" />
              <span>No vig. No hidden fees. Cancel anytime.</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {["NFL","NCAA F","NCAA B","MLB","NHL","NBA"].map(lg => (
                  <div key={lg} className="rounded-xl bg-black/30 border border-white/10 p-4">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{lg}</span>
                      <Zap className="h-4 w-4" />
                    </div>
                    <div className="mt-3 h-24 rounded-lg bg-gradient-to-r from-purple-900/30 to-transparent ring-1 ring-white/10" />
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                      <span>Spread • ML • O/U</span>
                      <span className="text-yellow-400">Live 30s</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-400 flex items-center gap-2">
                <Shield className="h-4 w-4" /> Juice removed on every line
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to bet peer-to-peer</h2>
          <p className="mt-3 text-gray-400">Fair pricing, real-time lines, and powerful tools to manage your action.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(f => (
            <Card key={f.title} className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/40 text-yellow-400">
                  {f.icon}
                </div>
                <CardTitle className="mt-3">{f.title}</CardTitle>
                <CardDescription className="text-gray-400">{f.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/5 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
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

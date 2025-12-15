import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Flag,
  CalendarDays,
  Users,
  ShieldCheck,
  Newspaper,
  Mail,
  Search,
  ChevronRight,
  MapPin,
  Timer,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Branding (Flatout Racing League) ---
const BRAND = { red: "#C8102E", blue: "#003A8F", white: "#FFFFFF" };

function FlatoutLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 520 140" role="img" aria-label="Flatout Racing League" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="foFade" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="1" />
          <stop offset="1" stopColor="#000" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <text x="0" y="68" fontFamily="Arial Black, Impact, system-ui, sans-serif" fontSize="72" letterSpacing="2" fill="url(#foFade)">FLATOUT</text>
      <text x="0" y="126" fontFamily="Arial Black, Impact, system-ui, sans-serif" fontSize="62" letterSpacing="1.5" fill="#000" opacity="0.95">RACING LEAGUE</text>
      <g transform="translate(380,22)">
        <polygon points="0,0 120,0 92,18 0,18" fill={BRAND.red} />
        <polygon points="0,30 120,30 86,48 0,48" fill={BRAND.red} opacity="0.9" />
        <polygon points="0,60 120,60 80,78 0,78" fill={BRAND.red} opacity="0.8" />
        <polygon points="0,92 120,92 84,110 0,110" fill={BRAND.blue} />
      </g>
    </svg>
  );
}

export default function App() {
  const leagueName = "Flatout Racing League";

  const nav = useMemo(
    () => [
      { key: "home", label: "Home", icon: Sparkles },
      { key: "schedule", label: "Schedule", icon: CalendarDays },
      { key: "standings", label: "Standings", icon: Trophy },
      { key: "drivers", label: "Drivers", icon: Users },
      { key: "rules", label: "Rules", icon: ShieldCheck },
      { key: "news", label: "News", icon: Newspaper },
      { key: "contact", label: "Contact", icon: Mail },
    ],
    []
  );

  const [active, setActive] = useState("home");
  const [q, setQ] = useState("");

  // FORL 2026 Spring Schedule (9:00 CST)
  const season = "2026 Spring";

  const events = useMemo(
    () => [
      { round: 1, name: "Las Vegas", date: "2025-12-26", track: "Las Vegas", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 2, name: "Dover", date: "2026-01-02", track: "Dover", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 3, name: "Iowa", date: "2026-01-09", track: "Iowa", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 4, name: "Kansas", date: "2026-01-16", track: "Kansas", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 5, name: "Richmond", date: "2026-01-23", track: "Richmond", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 6, name: "Charlotte", date: "2026-01-30", track: "Charlotte", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 7, name: "Nashville", date: "2026-02-06", track: "Nashville", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 8, name: "Daytona", date: "2026-02-13", track: "Daytona", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 9, name: "Echo Park", date: "2026-02-20", track: "Echo Park", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 10, name: "Phoenix", date: "2026-02-27", track: "Phoenix", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 11, name: "Las Vegas", date: "2026-03-06", track: "Las Vegas", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 12, name: "Darlington", date: "2026-03-13", track: "Darlington", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 13, name: "Pocono", date: "2026-03-20", track: "Pocono", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 14, name: "Bristol", date: "2026-03-27", track: "Bristol", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 15, name: "Kansas", date: "2026-04-03", track: "Kansas", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 16, name: "Talladega", date: "2026-04-10", track: "Talladega", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 17, name: "Texas", date: "2026-04-17", track: "Texas", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 18, name: "Gateway", date: "2026-04-24", track: "Gateway", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 19, name: "Dover", date: "2026-05-01", track: "Dover", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 20, name: "Charlotte", date: "2026-05-08", track: "Charlotte", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 21, name: "Nashville", date: "2026-05-15", track: "Nashville", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 22, name: "Michigan", date: "2026-05-22", track: "Michigan", location: "9:00 CST", format: "Race", status: "upcoming" },
      { round: 23, name: "Indy", date: "2026-05-29", track: "Indy", location: "9:00 CST", format: "Race", status: "upcoming" },
    ],
    []
  );

  const teams = useMemo(
    () => [
      { name: "Northstar Motorsport", car: "Next Gen", points: 84, wins: 2 },
      { name: "Velocity Union", car: "Next Gen", points: 76, wins: 1 },
      { name: "Iron Apex Racing", car: "Next Gen", points: 71, wins: 1 },
      { name: "Blue Harbor Works", car: "Next Gen", points: 63, wins: 0 },
    ],
    []
  );

  const drivers = useMemo(
    () => [
      { name: "Jordan Lee", number: 22, team: "Northstar Motorsport", points: 46, podiums: 3, wins: 1 },
      { name: "Sam Patel", number: 7, team: "Velocity Union", points: 41, podiums: 2, wins: 1 },
      { name: "Avery Chen", number: 11, team: "Iron Apex Racing", points: 39, podiums: 2, wins: 0 },
      { name: "Riley Gomez", number: 9, team: "Northstar Motorsport", points: 38, podiums: 2, wins: 1 },
      { name: "Casey Novak", number: 44, team: "Blue Harbor Works", points: 33, podiums: 1, wins: 0 },
      { name: "Taylor Brooks", number: 18, team: "Velocity Union", points: 35, podiums: 1, wins: 0 },
    ],
    []
  );

  const news = useMemo(
    () => [
      { title: "Registration Opens for the 2026 Spring Season", date: "2025-12-01", tag: "League", body: "We’re excited to launch registration for the 2026 Spring season. Spots are limited — reserve your seat, choose your number, and confirm your availability." },
      { title: "New Points System for Sprint Weekends", date: "2025-11-20", tag: "Rules", body: "Sprint weekends now award points for Race 1 and Race 2, plus a bonus point for pole. See the Rules page for full details." },
      { title: "Track Guide: Talladega", date: "2025-11-02", tag: "Track", body: "Drafting, pit strategy, and crash avoidance — Talladega week is all about teamwork and smart moves." },
    ],
    []
  );

  const filteredDrivers = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return drivers;
    return drivers.filter((d) => [d.name, d.team, String(d.number)].some((x) => String(x).toLowerCase().includes(s)));
  }, [drivers, q]);

  const filteredTeams = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return teams;
    return teams.filter((t) => t.name.toLowerCase().includes(s));
  }, [teams, q]);

  const nextEvent = useMemo(() => events.find((e) => e.status === "upcoming") ?? events[0], [events]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-100">
      <TopBar leagueName={leagueName} active={active} nav={nav} setActive={setActive} />
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            {active === "home" && <Home leagueName={leagueName} season={season} nextEvent={nextEvent} events={events} setActive={setActive} />}
            {active === "schedule" && <Schedule season={season} events={events} />}
            {active === "standings" && <Standings season={season} drivers={drivers} teams={teams} />}
            {active === "drivers" && <DriversAndTeams season={season} q={q} setQ={setQ} drivers={filteredDrivers} teams={filteredTeams} />}
            {active === "rules" && <Rules season={season} />}
            {active === "news" && <News season={season} news={news} />}
            {active === "contact" && <Contact leagueName={leagueName} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer leagueName={leagueName} season={season} setActive={setActive} />
    </div>
  );
}

function TopBar({ leagueName, active, nav, setActive }) {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <button onClick={() => setActive("home")} className="flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-zinc-900">
          <div className="rounded-2xl bg-white p-1 shadow-sm"><FlatoutLogo className="h-9 w-auto" /></div>
          <div className="text-left">
            <div className="text-sm font-semibold leading-tight">{leagueName}</div>
            <div className="text-xs text-zinc-400">Sim NASCAR 25 • Fridays • 9:00 CST</div>
          </div>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <button key={item.key} onClick={() => setActive(item.key)} className={"flex items-center gap-2 rounded-2xl px-3 py-2 text-sm transition " + (isActive ? "bg-zinc-100 text-zinc-950" : "text-zinc-200 hover:bg-zinc-900")}>
                <Icon className="h-4 w-4" />{item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Badge className="bg-zinc-900 text-zinc-200">Live</Badge>
          <Badge className="bg-red-500 text-white">NASCAR 25</Badge>
          <MobileNav active={active} nav={nav} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}

function MobileNav({ active, nav, setActive }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button variant="secondary" onClick={() => setOpen((v) => !v)}>Menu <ChevronRight className={"h-4 w-4 transition " + (open ? "rotate-90" : "rotate-0")} /></Button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="absolute right-4 mt-2 w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl">
            <div className="p-2">
              {nav.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.key;
                return (
                  <button key={item.key} onClick={() => { setActive(item.key); setOpen(false); }} className={"flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition " + (isActive ? "bg-zinc-100 text-zinc-950" : "hover:bg-zinc-900")}>
                    <Icon className="h-4 w-4" />{item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Home({ season, nextEvent, events, setActive }) {
  return (
    <div className="space-y-6">
      <Hero season={season} setActive={setActive} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle className="flex items-center gap-2"><Timer className="h-5 w-5" />Next race</CardTitle></CardHeader>
          <CardContent className="space-y-3 p-5 pt-0">
            <div className="text-lg font-semibold">{nextEvent?.name}</div>
            <div className="text-sm text-zinc-300">Round {nextEvent?.round} • {nextEvent?.format}</div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{nextEvent?.date}</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{nextEvent?.location}</span>
            </div>
            <Button className="w-full" onClick={() => setActive("schedule")}>View full schedule</Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40 lg:col-span-2">
          <CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" />Quick standings</CardTitle></CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="grid gap-3 sm:grid-cols-2">
              <MiniTable title="Drivers" rows={[{ a: "1", b: "Jordan Lee", c: "46" }, { a: "2", b: "Sam Patel", c: "41" }, { a: "3", b: "Avery Chen", c: "39" }]} />
              <MiniTable title="Teams" rows={[{ a: "1", b: "Northstar Motorsport", c: "84" }, { a: "2", b: "Velocity Union", c: "76" }, { a: "3", b: "Iron Apex Racing", c: "71" }]} />
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button variant="secondary" onClick={() => setActive("standings")}>Full standings</Button>
              <Button onClick={() => setActive("drivers")}>Drivers & teams</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
        <CardHeader><CardTitle className="flex items-center gap-2"><CalendarDays className="h-5 w-5" />Upcoming rounds</CardTitle></CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="grid gap-3 md:grid-cols-2">
            {events.slice(0, 6).map((e) => (
              <div key={e.round} className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-zinc-400">Round {e.round}</div>
                    <div className="text-base font-semibold">{e.name}</div>
                    <div className="mt-1 text-sm text-zinc-300">{e.track}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                      <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{e.date}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{e.location}</span>
                      <span className="inline-flex items-center gap-1"><Flag className="h-3.5 w-3.5" />{e.format}</span>
                    </div>
                  </div>
                  <Badge className="bg-zinc-100 text-zinc-950">Upcoming</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Hero({ season, setActive }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/70 bg-zinc-950/30 p-6 shadow-sm sm:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-200">
          <span className="inline-flex items-center gap-1"><Trophy className="h-3.5 w-3.5" />Season {season}</span>
          <span className="h-3 w-px bg-zinc-800" />
          <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />Sim NASCAR 25</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Flatout Racing League</h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-300 sm:text-lg">
          Official home for Flatout Racing League — Sim NASCAR 25. Fridays at 9:00 CST.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button onClick={() => setActive("schedule")}>View schedule</Button>
          <Button variant="secondary" onClick={() => setActive("contact")}>Join the grid</Button>
          <Button variant="ghost" onClick={() => setActive("rules")}>Read rules</Button>
        </div>
      </div>
    </div>
  );
}

function MiniTable({ title, rows }) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-4">
      <div className="mb-3 text-sm font-semibold text-zinc-200">{title}</div>
      <div className="space-y-2">
        {rows.map((r, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2"><span className="w-5 text-zinc-400">{r.a}</span><span className="text-zinc-100">{r.b}</span></div>
            <span className="font-semibold text-zinc-100">{r.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Schedule({ season, events }) {
  return (
    <div className="space-y-6">
      <Header icon={CalendarDays} title={`Schedule — Season ${season}`} subtitle="FORL 2026 Spring Schedule • Fridays • 9:00 CST" />
      <div className="grid gap-3">
        {events.map((e) => (
          <Card key={e.round} className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
            <CardContent className="p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="text-xs text-zinc-400">Round {e.round}</div>
                  <div className="truncate text-lg font-semibold">{e.name}</div>
                  <div className="mt-1 text-sm text-zinc-300">{e.track}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                    <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{e.date}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{e.location}</span>
                    <span className="inline-flex items-center gap-1"><Flag className="h-4 w-4" />{e.format}</span>
                  </div>
                </div>
                <Badge className="bg-zinc-100 text-zinc-950">Upcoming</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Standings({ season, drivers, teams }) {
  const driverRows = useMemo(() => [...drivers].sort((a, b) => b.points - a.points).map((d, i) => ({ ...d, pos: i + 1 })), [drivers]);
  const teamRows = useMemo(() => [...teams].sort((a, b) => b.points - a.points).map((t, i) => ({ ...t, pos: i + 1 })), [teams]);

  return (
    <div className="space-y-6">
      <Header icon={Trophy} title={`Standings — Season ${season}`} subtitle="Driver and team points. Swap in live results when ready." />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>Driver standings</CardTitle></CardHeader>
          <CardContent className="p-5 pt-0"><StandingsTable columns={["Pos","Driver","Team","Pts","W"]} rows={driverRows.map((d)=>[d.pos,`#${d.number} ${d.name}`,d.team,d.points,d.wins])} /></CardContent>
        </Card>
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>Team standings</CardTitle></CardHeader>
          <CardContent className="p-5 pt-0"><StandingsTable columns={["Pos","Team","Car","Pts","W"]} rows={teamRows.map((t)=>[t.pos,t.name,t.car,t.points,t.wins])} /></CardContent>
        </Card>
      </div>
    </div>
  );
}

function StandingsTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/70">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
        {columns.map((c) => <div key={c} className="border-b border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs font-semibold text-zinc-300">{c}</div>)}
        {rows.map((r, idx) => r.map((cell, j) => (
          <div key={`${idx}-${j}`} className={"px-3 py-2 text-sm " + (idx % 2 === 0 ? "bg-zinc-950/40" : "bg-zinc-950/20")}>
            <span className={j === 0 ? "text-zinc-400" : "text-zinc-100"}>{cell}</span>
          </div>
        )))}
      </div>
    </div>
  );
}

function DriversAndTeams({ season, q, setQ, drivers, teams }) {
  return (
    <div className="space-y-6">
      <Header icon={Users} title={`Drivers & Teams — Season ${season}`} subtitle="Search by name, number, or team." />
      <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-zinc-300"><span className="font-semibold text-zinc-100">Search</span> across drivers and teams</div>
            <div className="relative w-full sm:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Jordan, #22, Northstar…" className="pl-9" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>Drivers</CardTitle></CardHeader>
          <CardContent className="space-y-3 p-5 pt-0">
            {drivers.map((d) => (
              <div key={d.number} className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2"><Badge className="bg-zinc-100 text-zinc-950">#{d.number}</Badge><div className="truncate text-base font-semibold">{d.name}</div></div>
                  <div className="mt-1 text-sm text-zinc-300">{d.team}</div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-400">
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-1">Pts: {d.points}</span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-1">Wins: {d.wins}</span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-1">Podiums: {d.podiums}</span>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => alert("Add driver profile page/modal.")}>Profile</Button>
              </div>
            ))}
            {drivers.length === 0 && <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 text-sm text-zinc-400">No drivers match your search.</div>}
          </CardContent>
        </Card>
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>Teams</CardTitle></CardHeader>
          <CardContent className="space-y-3 p-5 pt-0">
            {teams.map((t) => (
              <div key={t.name} className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
                <div className="min-w-0">
                  <div className="truncate text-base font-semibold">{t.name}</div>
                  <div className="mt-1 text-sm text-zinc-300">Car class: {t.car}</div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-400">
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-1">Pts: {t.points}</span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-2 py-1">Wins: {t.wins}</span>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => alert("Add team page/roster/sponsors.")}>Team page</Button>
              </div>
            ))}
            {teams.length === 0 && <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 text-sm text-zinc-400">No teams match your search.</div>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Rules({ season }) {
  return (
    <div className="space-y-6">
      <Header icon={ShieldCheck} title={`Rules & Format — Season ${season}`} subtitle="Replace with your official handbook when ready." />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40 lg:col-span-2">
          <CardHeader><CardTitle>Quick overview</CardTitle></CardHeader>
          <CardContent className="space-y-4 p-5 pt-0 text-sm text-zinc-300">
            <RuleSection title="Weekend structure" bullets={["Practice: optional but recommended","Qualifying: sets the grid","Race: Fridays at 9:00 CST"]} />
            <RuleSection title="Sportsmanship" bullets={["Respect track limits and other drivers","No avoidable contact — leave racing room","Rejoin safely after an off"]} />
            <RuleSection title="Points (example)" bullets={["Feature: 25-18-15-12-10-8-6-4-2-1","Bonus: +1 for pole, +1 for fastest lap (if top 10)"]} />
          </CardContent>
        </Card>
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>Downloads</CardTitle></CardHeader>
          <CardContent className="space-y-3 p-5 pt-0">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <div className="text-sm font-semibold">Rulebook (PDF)</div>
              <div className="mt-1 text-xs text-zinc-400">Link your official PDF here.</div>
              <Button className="mt-3 w-full" onClick={() => alert("Add a real PDF link/file.")}>Download</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function RuleSection({ title, bullets }) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <ul className="mt-2 list-disc space-y-1 pl-5">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
    </div>
  );
}

function News({ season, news }) {
  return (
    <div className="space-y-6">
      <Header icon={Newspaper} title={`News — Season ${season}`} subtitle="Announcements and recaps. Wire to a CMS when ready." />
      <div className="grid gap-4">
        {news.map((n) => (
          <Card key={n.title} className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
            <CardContent className="p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2"><Badge className="bg-zinc-100 text-zinc-950">{n.tag}</Badge><div className="text-xs text-zinc-400">{n.date}</div></div>
                  <div className="mt-2 text-lg font-semibold">{n.title}</div>
                  <p className="mt-2 max-w-3xl text-sm text-zinc-300">{n.body}</p>
                </div>
                <Button variant="secondary" onClick={() => alert("Add full article page.")}>Read</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Contact({ leagueName }) {
  const [form, setForm] = useState({ name: "", email: "", message: "", interest: "Driver" });
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-6">
      <Header icon={Mail} title="Contact & Registration" subtitle="Collect driver/team inquiries. Hook this to your backend later." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>Join the grid</CardTitle></CardHeader>
          <CardContent className="space-y-3 p-5 pt-0">
            <div className="grid gap-3 sm:grid-cols-2">
              <div><div className="mb-1 text-xs text-zinc-400">Name</div><Input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your name" /></div>
              <div><div className="mb-1 text-xs text-zinc-400">Email</div><Input value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="you@example.com" /></div>
            </div>

            <div>
              <div className="mb-1 text-xs text-zinc-400">I’m interested in</div>
              <div className="flex flex-wrap gap-2">
                {["Driver","Team","Sponsor","Volunteer"].map((x) => (
                  <button key={x} onClick={() => setForm((p) => ({ ...p, interest: x }))} className={"rounded-full border px-3 py-1 text-sm transition " + (form.interest === x ? "border-zinc-100 bg-zinc-100 text-zinc-950" : "border-zinc-800 bg-zinc-950/40 text-zinc-200 hover:bg-zinc-900")}>{x}</button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1 text-xs text-zinc-400">Message</div>
              <textarea value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} placeholder={`Tell ${leagueName} about your car, availability, or sponsorship goals…`} className="h-32 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200/20" />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={() => { setSent(true); setTimeout(() => setSent(false), 2500); }}>Submit</Button>
              <Button variant="secondary" onClick={() => setForm({ name: "", email: "", message: "", interest: "Driver" })}>Reset</Button>
            </div>

            <AnimatePresence>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-3 text-sm text-zinc-200">
                  ✅ Sent! (Demo) Hook this to a backend to receive submissions.
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-zinc-800/70 bg-zinc-950/40">
          <CardHeader><CardTitle>League info</CardTitle></CardHeader>
          <CardContent className="space-y-4 p-5 pt-0 text-sm text-zinc-300">
            <InfoBox label="Email" value="contact@flatoutracingleague.com" />
            <InfoBox label="Social" value="@flatoutracingleague" />
            <InfoBox label="Race time" value="Fridays • 9:00 CST" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
      <div className="text-sm font-semibold text-zinc-100">{label}</div>
      <div className="mt-1 text-zinc-300">{value}</div>
    </div>
  );
}

function Header({ icon: Icon, title, subtitle }) {
  return (
    <div className="rounded-[28px] border border-zinc-800/70 bg-zinc-950/30 p-6">
      <div className="min-w-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-200">
          <Icon className="h-3.5 w-3.5" />{title}
        </div>
        <div className="mt-3 text-sm text-zinc-300">{subtitle}</div>
      </div>
    </div>
  );
}

function Footer({ leagueName, season, setActive }) {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950/60">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white p-1"><FlatoutLogo className="h-8 w-auto" /></div>
            <div>
              <div className="text-sm font-semibold">{leagueName}</div>
              <div className="text-xs text-zinc-400">Season {season} • Fridays • 9:00 CST</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            ["Schedule","schedule"],
            ["Standings","standings"],
            ["Drivers","drivers"],
            ["Rules","rules"],
            ["News","news"],
            ["Contact","contact"],
          ].map(([label, key]) => (
            <button key={key} onClick={() => setActive(key)} className="rounded-xl px-2 py-1 text-left text-zinc-200 hover:bg-zinc-900">{label}</button>
          ))}
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
            <div className="text-sm font-semibold">Want this customized?</div>
            <div className="mt-1 text-xs text-zinc-400">Add results upload, driver registration, payments, and a CMS.</div>
            <Button className="mt-3 w-full" onClick={() => setActive("contact")}>Get started</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} {leagueName}. All rights reserved.
      </div>
    </footer>
  );
}

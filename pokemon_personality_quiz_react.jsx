import React, { useState } from "react";
import { motion } from "framer-motion";

// Single-file React component (TailwindCSS assumed in the host project)
// Default export: PokemonQuizApp

const POKEMON = {
  psyduck: {
    name: "Psyduck",
    emoji: "🦆",
    title: "The Anxious Genius",
    desc:
      "You worry, you overthink, but you also arrive at surprising insights. People rely on your weirdly effective instincts.",
  },
  mrmime: {
    name: "Mr. Mime",
    emoji: "🎭",
    title: "The Meticulous Performer",
    desc:
      "You care about craft, timing, and presentation. You make order feel like art — and you enjoy the spotlight when it’s deserved.",
  },
  bulbasaur: {
    name: "Bulbasaur",
    emoji: "🌱",
    title: "The Loyal Realist",
    desc:
      "Calm, grounded, and steady — you’re the friend who stays. You grow through patience and make life feel safe for others.",
  },
  gengar: {
    name: "Gengar",
    emoji: "👻",
    title: "The Mischievous Charmer",
    desc:
      "Witty, a touch mysterious, and always a little rebellious. You entertain and unsettle in equal measure — in the best way.",
  },
  growlithe: {
    name: "Growlithe",
    emoji: "🔥",
    title: "The Loyal Protector",
    desc:
      "Brave with a big heart. You protect, cheer loudest, and are the first one to show up for people you care about.",
  },
  ditto: {
    name: "Ditto",
    emoji: "🧬",
    title: "The Adaptable Free Spirit",
    desc:
      "Fluid and curious — you adapt to your people and situations easily, and your flexibility makes you endlessly interesting.",
  },
};

const QUESTIONS = [
  {
    q: "You’re running late for an important meeting. What do you do?",
    opts: [
      { key: "psyduck", text: "Panic a little, but somehow make it work last minute." },
      { key: "mrmime", text: "Rehearse your excuse in your head — timing is everything." },
      { key: "bulbasaur", text: "Take a deep breath. You’ll get there when you get there." },
      { key: "gengar", text: "Text a joke to lighten the mood — being late is your brand." },
      { key: "growlithe", text: "Sprint there! You’re not letting anyone down." },
      { key: "ditto", text: "Blend in with the crowd and act like you’ve been there all along." },
    ],
  },
  {
    q: "Your friends describe you as:",
    opts: [
      { key: "psyduck", text: "Constantly overthinking, but oddly wise." },
      { key: "mrmime", text: "Precise and dramatic — in the best way." },
      { key: "bulbasaur", text: "Chill, reliable, and surprisingly funny." },
      { key: "gengar", text: "Mysterious, sarcastic, and magnetic." },
      { key: "growlithe", text: "Passionate and fiercely loyal." },
      { key: "ditto", text: "Adaptable — you can vibe with anyone." },
    ],
  },
  {
    q: "What’s your ideal weekend activity?",
    opts: [
      { key: "psyduck", text: "Trying to relax… but somehow stressing anyway." },
      { key: "mrmime", text: "Organizing your room until it’s museum-worthy." },
      { key: "bulbasaur", text: "Gardening, hiking, or just chilling in nature." },
      { key: "gengar", text: "Late-night adventures with a bit of harmless chaos." },
      { key: "growlithe", text: "Road trip with friends — windows down, music up." },
      { key: "ditto", text: "Doing whatever everyone else is doing — you’re just happy to be there." },
    ],
  },
  {
    q: "Your greatest strength is:",
    opts: [
      { key: "psyduck", text: "Accidentally solving problems others can’t." },
      { key: "mrmime", text: "Turning order into art." },
      { key: "bulbasaur", text: "Staying grounded under pressure." },
      { key: "gengar", text: "Reading people like a book." },
      { key: "growlithe", text: "Protecting and encouraging others." },
      { key: "ditto", text: "Blending into any situation with ease." },
    ],
  },
  {
    q: "When faced with conflict, you usually:",
    opts: [
      { key: "psyduck", text: "Get overwhelmed but try to fix it anyway." },
      { key: "mrmime", text: "Keep calm and analyze every word." },
      { key: "bulbasaur", text: "Stay patient and mediate." },
      { key: "gengar", text: "Crack a joke and disappear if it gets too serious." },
      { key: "growlithe", text: "Defend your friends without hesitation." },
      { key: "ditto", text: "Agree with everyone to keep the peace." },
    ],
  },
  {
    q: "Pick your favorite setting:",
    opts: [
      { key: "psyduck", text: "A quiet lake where you can think." },
      { key: "mrmime", text: "A tidy studio with perfect lighting." },
      { key: "bulbasaur", text: "A lush forest full of calm and life." },
      { key: "gengar", text: "A dark alley glowing with neon mischief." },
      { key: "growlithe", text: "A warm campfire surrounded by friends." },
      { key: "ditto", text: "A bustling city — endless faces, endless possibilities." },
    ],
  },
  {
    q: "How do you approach new challenges?",
    opts: [
      { key: "psyduck", text: "Nervously, but you usually figure it out." },
      { key: "mrmime", text: "With a plan, a backup plan, and a backup for that plan." },
      { key: "bulbasaur", text: "Steadily — you know patience pays off." },
      { key: "gengar", text: "Boldly — you’ll fake confidence if you have to." },
      { key: "growlithe", text: "Fearlessly — you charge in to protect and prove yourself." },
      { key: "ditto", text: "Casually — you’ll adapt as you go." },
    ],
  },
  {
    q: "Pick a motto that fits you best:",
    opts: [
      { key: "psyduck", text: "“I’ll figure it out… eventually.”" },
      { key: "mrmime", text: "“Perfection is a performance.”" },
      { key: "bulbasaur", text: "“Slow and steady wins the race.”" },
      { key: "gengar", text: "“Rules? I prefer guidelines.”" },
      { key: "growlithe", text: "“Loyalty above all.”" },
      { key: "ditto", text: "“Go with the flow.”" },
    ],
  },
  {
    q: "How do you show affection?",
    opts: [
      { key: "psyduck", text: "Nervous laughter and small gestures." },
      { key: "mrmime", text: "Thoughtful acts, never forgetting details." },
      { key: "bulbasaur", text: "Steady support and genuine listening." },
      { key: "gengar", text: "Teasing and inside jokes." },
      { key: "growlithe", text: "Big hugs and protective energy." },
      { key: "ditto", text: "Copying others’ quirks to make them smile." },
    ],
  },
  {
    q: "What kind of friend are you?",
    opts: [
      { key: "psyduck", text: "The slightly chaotic but lovable one." },
      { key: "mrmime", text: "The structured, reliable planner." },
      { key: "bulbasaur", text: "The down-to-earth, comforting one." },
      { key: "gengar", text: "The funny, mysterious one who keeps everyone guessing." },
      { key: "growlithe", text: "The fiercely loyal, courageous one." },
      { key: "ditto", text: "The flexible one who fits anywhere." },
    ],
  },
];

export default function PokemonQuizApp() {
  const [index, setIndex] = useState(0);
  const [tally, setTally] = useState(() => {
    const base = {};
    Object.keys(POKEMON).forEach((k) => (base[k] = 0));
    return base;
  });
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState(null);

  function handleSelect(key) {
    setTally((prev) => ({ ...prev, [key]: prev[key] + 1 }));
    const next = index + 1;
    if (next >= QUESTIONS.length) {
      // compute result
      const topCount = Math.max(...Object.values({ ...tally, [key]: tally[key] + 1 }));
      const tied = Object.keys({ ...tally, [key]: tally[key] + 1 }).filter(
        (k) => ({ ...tally, [key]: tally[key] + 1 })[k] === topCount
      );
      // randomize among tied
      const chosen = tied[Math.floor(Math.random() * tied.length)];
      setResult(chosen);
      setFinished(true);
    } else {
      setIndex(next);
    }
  }

  function restart() {
    const base = {};
    Object.keys(POKEMON).forEach((k) => (base[k] = 0));
    setTally(base);
    setIndex(0);
    setFinished(false);
    setResult(null);
  }

  const progress = Math.round((index / QUESTIONS.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 grid gap-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Which Pokémon Are You?</h1>
            <p className="text-sm text-slate-500 mt-1">A 10-question quiz to reveal your inner Pokémon personality.</p>
          </div>
          <div className="text-right text-sm text-slate-600">
            <div>Question <strong>{Math.min(index + 1, QUESTIONS.length)}</strong> / {QUESTIONS.length}</div>
            <div className="mt-1 text-xs text-slate-400">Pick the option that feels most like you</div>
          </div>
        </header>

        <div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
              style={{ width: `${progress}%`, transition: 'width 400ms ease' }}
              aria-hidden="true"
            />
          </div>
        </div>

        <main className="py-2">
          {!finished ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-lg font-semibold">{QUESTIONS[index].q}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {QUESTIONS[index].opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(opt.key)}
                    className="group relative text-left rounded-xl p-4 border border-slate-100 hover:shadow-md focus:shadow-md focus:outline-none transition flex flex-col"
                    aria-label={`Answer ${i + 1}: ${opt.text}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">{POKEMON[opt.key].emoji}</span>
                      <div>
                        <div className="font-medium">{POKEMON[opt.key].name}</div>
                        <div className="text-sm text-slate-500 mt-1">{opt.text}</div>
                      </div>
                    </div>
                    <span className="absolute right-3 top-3 text-xs text-slate-400 group-hover:text-slate-600">Select</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <div>Progress: {index} / {QUESTIONS.length}</div>
                <div>
                  <button
                    onClick={restart}
                    className="text-xs underline"
                    aria-label="Restart quiz"
                  >
                    Restart
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-6"
            >
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-indigo-100 to-pink-100 text-5xl mb-4">
                {POKEMON[result].emoji}
              </div>

              <h3 className="text-2xl font-bold">You are {POKEMON[result].name} — {POKEMON[result].title}</h3>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto">{POKEMON[result].desc}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    // show breakdown
                    const items = Object.entries(tally)
                      .sort((a, b) => b[1] - a[1])
                      .map(([k, v]) => `${POKEMON[k].emoji} ${POKEMON[k].name}: ${v}`)
                      .join("\n");
                    alert(`Score breakdown:\n\n${items}`);
                  }}
                  className="px-4 py-2 rounded-lg border"
                >
                  View score breakdown
                </button>
                <button
                  onClick={restart}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow"
                >
                  Retake quiz
                </button>
              </div>

              <div className="mt-4 text-xs text-slate-400">If there was a tie, the quiz randomly picked one of the tied Pokémon.</div>
            </motion.div>
          )}
        </main>

        <footer className="text-xs text-slate-400 text-center">
          Built with ❤️ · Tailwind + React + Framer Motion
        </footer>
      </div>
    </div>
  );
}

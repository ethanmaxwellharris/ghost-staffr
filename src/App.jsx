import React, { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const [spotsLeft, setSpotsLeft] = useState(0);
  const [shakeClass, setShakeClass] = useState("shake");
  const ctaRef = useRef(null);

  useEffect(() => {
    const weeklyCap = 10;
    const used = Math.floor(Math.random() * 4) + 4;
    setSpotsLeft(weeklyCap - used);

    const timer = setTimeout(() => setShakeClass(""), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-[#1C1C1C] font-sans">
      <div className="bg-[#FFD700] text-black text-center text-sm py-2 px-4 font-semibold">
        We build 10 AI Agents each week — <span className="italic font-bold text-red-600">{spotsLeft} spots left this week</span>
      </div>

      <style>{`
        .shake {
          animation: shake 1.2s infinite;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section className="bg-[#F0F2F5] text-[#1C1C1C] py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Hire Your First <span className="text-[#0074C2]">Ghost</span>?</h2>
        <a
          href="https://zcal.co/ghoststaffr/30min"
          ref={ctaRef}
          className={`${shakeClass} inline-block bg-[#1C1C1C] text-white font-semibold px-6 py-3 rounded-lg text-lg`}
        >
          Launch Your <span className="text-[#0074C2]">Assistant</span> in 2 Days
        </a>
      </section>

      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Book More Showings. Close More Deals. Sleep Better.
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          For real estate agents in the Eastern U.S. with under 10 active listings — Ghost Staffr qualifies leads, books appointments, and follows up while you focus on closing.
        </p>
        <div className="max-w-2xl mx-auto bg-[#F7F9FA] border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-[#1C1C1C]">Tailored for Agents in Growth Mode:</h2>
          <ul className="text-left space-y-2 text-lg text-[#1C1C1C]">
            <li>✅ Qualifies buyers and sellers using your intake criteria — no missed leads</li>
            <li>✅ Schedules showings or discovery calls directly into your calendar</li>
            <li>✅ Handles follow-ups, FAQs, and appointment confirmations 24/7</li>
            <li>✅ Launch in 2 days — fully trained on your listings and market</li>
            <li>✅ Save 10+ hours/week and focus on growing your business</li>
          </ul>
        </div>
        <div className="mt-8 max-w-2xl mx-auto bg-[#FFF8E1] rounded-lg p-6 text-black">
          <h2 className="text-2xl font-bold mb-2 text-center">Simple Pricing</h2>
          <p className="text-lg text-center mb-4">Setup Fee: <strong>$999</strong></p>
          <p className="text-lg text-center mb-4">Ongoing: <strong>$599/mo</strong></p>
          <p className="text-md text-center text-gray-800">
            Need multiple assistants for different markets or clients? We scale with you.
          </p>
        </div>
        <a
          href="https://zcal.co/ghoststaffr/30min"
          className="mt-6 inline-block bg-[#FFD700] hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg"
        >
          Get <span className="text-[#0074C2]">Ghost Staffr</span> Working for Your Portfolio in 2 Days
        </a>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Agents Choose Ghost Staffr</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Never Miss a Lead</h3>
            <p className="text-gray-600">Instant replies mean no more lost buyers — even on weekends or after hours.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">Smart Follow-up</h3>
            <p className="text-gray-600">Automated follow-ups keep cold leads warm while you’re showing homes.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔑</div>
            <h3 className="text-xl font-semibold mb-2">Look Professional</h3>
            <p className="text-gray-600">Present as buttoned-up and responsive — even if you’re flying solo.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FA] py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Agents Say</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-700">
              "With Ghost Staffr, I don’t worry about losing leads when I’m at showings. It just works."
            </p>
            <footer className="mt-4 text-gray-600">— David, New Jersey Agent (7 listings)</footer>
          </blockquote>
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-700">
              "I used to juggle DMs and calls late into the night — now Ghost Staffr handles it while I rest."
            </p>
            <footer className="mt-4 text-gray-600">— Marcus, Virginia Realtor</footer>
          </blockquote>
        </div>
      </section>

      <section id="get-started" className="bg-[#F0F2F5] text-[#1C1C1C] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Hire Your First <span className="text-[#0074C2]">Ghost</span>?</h2>
        <a
          href="#"
          className="inline-block bg-[#1C1C1C] text-white font-semibold px-6 py-3 rounded-lg text-lg"
        >
          Launch Your <span className="text-[#0074C2]">Assistant</span> in 2 Days
        </a>
      </section>
    </div>
  );
}
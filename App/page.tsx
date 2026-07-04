import React, { useState } from 'react';
import { Shield, ChevronDown, Menu, X, Building2, BadgeCheck } from 'lucide-react';

const WA_LINK = "https://wa.me/+923321026836";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Container */}
      <div className="max-w-[480px] mx-auto bg-white min-h-screen shadow-xl border-x border-slate-100">

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900 leading-none">OLOBUY</h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">ORIGINAL LIFE, ORIGINAL BUY</p>
          </div>
          <a href={WA_LINK} className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-blue-200">
            Safe Deal
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Hero Section */}
        <main className="p-6 pt-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 leading-tight mb-4">نہ ایڈوانس کا ڈر، نہ پارسل کا فراڈ!</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Stop risking money on OLX, Facebook, or Instagram. Deal with absolute trust. OloBuy holds your payment securely until you inspect the item.
            </p>
            <a href={WA_LINK} className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200">
              Start a Safe Deal (WhatsApp)
            </a>
          </div>

          {/* Trust Section */}
          <section className="mb-10">
            <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3">How Our Escrow Works</h3>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <span className="font-black text-blue-600">01</span>
                <p className="text-sm font-medium">Agreement: Buyer & Seller agree on deal terms.</p>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <span className="font-black text-blue-600">02</span>
                <p className="text-sm font-medium">Secure Deposit: OloBuy holds the payment.</p>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <span className="font-black text-blue-600">03</span>
                <p className="text-sm font-medium">Delivery & Payout: Inspect item, then we pay seller.</p>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          <section className="mb-10">
            <h3 className="text-lg font-bold mb-4">Customer Feedback</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Shahid Enterprise', 'Nimra Clothing', 'Neptune Digital', 'Amir Ali'].map((name) => (
                <div key={name} className="p-3 border border-slate-200 rounded-lg text-[10px] text-slate-500 italic">
                  "{name} confirms: OloBuy is 100% fast and secure."
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Floating WhatsApp Button */}
        <a href={WA_LINK} className="fixed bottom-6 right-6 z-50 bg-emerald-500 p-4 rounded-full shadow-2xl">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
        </a>
      </div>
    </div>
  );
            }
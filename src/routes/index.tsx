import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Star, Snowflake, Car, Wrench, CircleDot, Send, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WTW Serwis Tomasz Kopacz — Klimatyzacja, Opony, Lublin" },
      { name: "description", content: "Profesjonalny serwis klimatyzacji samochodowej, wymiana opon i usługi kierowcy w Lublinie. Oceniony 4.3/5 przez 169 klientów." },
    ],
  }),
});

const businessData = {
  id: "wtw-serwis-tomasz-kopacz",
  title: "WTW SERWIS TOMASZ KOPACZ",
  totalScore: 4.3,
  reviewsCount: 169,
  street: "Róg ul. Parysa, al. Kraśnicka",
  city: "Lublin",
  countryCode: "PL",
  phone: "+48 720 373 315",
  categories: ["Air conditioning repair service", "Chauffeur service", "Tire shop"],
  url: "https://www.google.com/maps/search/?api=1&query=WTW%20SERWIS%20TOMASZ%20KOPACZ&query_place_id=ChIJI9W4qjZYIkcRs1m_tJQgsdw",
  tagline: "Twój zaufany serwis klimatyzacji i opon w Lublinie",
  description:
    "Od lat dbamy o komfort i bezpieczeństwo lubelskich kierowców. Oferujemy profesjonalny serwis klimatyzacji, wymianę opon oraz usługi kierowcy.",
  services: [
    { icon: Snowflake, title: "Serwis klimatyzacji", desc: "Diagnostyka, napełnianie, ozonowanie i naprawa układów A/C." },
    { icon: CircleDot, title: "Wymiana opon", desc: "Sezonowa wymiana, wyważanie i przechowywanie opon." },
    { icon: Car, title: "Usługi kierowcy", desc: "Profesjonalny szofer — bezpiecznie odwieziemy Cię i Twoje auto." },
    { icon: Wrench, title: "Naprawy bieżące", desc: "Drobne naprawy mechaniczne i diagnostyka komputerowa." },
  ],
  pricing: [
    { service: "Serwis klimatyzacji (podstawowy)", price: "od 150 zł", details: "Sprawdzenie szczelności + napełnienie" },
    { service: "Odgrzybianie / Ozonowanie", price: "80 zł", details: "Usuwanie bakterii i nieprzyjemnych zapachów" },
    { service: "Wymiana opon (kpl. felgi stalowe)", price: "od 100 zł", details: "Wymiana z wyważeniem" },
    { service: "Usługi szofera", price: "Indywidualnie", details: "Bezpieczny powrót do domu Twoim autem" },
  ],
  faq: [
    { q: "Jak długo trwa serwis klimatyzacji?", a: "Standardowy przegląd z napełnieniem trwa około 45-60 minut." },
    { q: "Czy muszę się umawiać na wymianę opon?", a: "W sezonie wysokim zalecamy rezerwację telefoniczną, aby uniknąć kolejek." },
    { q: "Na czym polega usługa szofera?", a: "Przyjeżdżamy we wskazane miejsce i odwozimy Cię Twoim własnym samochodem do domu — idealne rozwiązanie po imprezie lub spotkaniu." },
  ],
  reviews: [
    { author: "Piotr M.", rating: 5, text: "Szybko, profesjonalnie i w bardzo dobrej cenie. Klima działa jak nowa. Polecam każdemu!" },
    { author: "Anna K.", rating: 5, text: "Pan Tomasz to fachowiec z prawdziwego zdarzenia. Wymiana opon ekspresowo, podejście do klienta wzorowe." },
    { author: "Marek W.", rating: 4, text: "Solidna robota, uczciwe ceny. Wracam tu od kilku lat i zawsze jestem zadowolony." },
  ],
};

const SUPABASE_URL = "https://khealpebzajyvcpkzoir.supabase.co/rest/v1";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZWFscGViemFqeXZjcGt6b2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NzQ0NDYsImV4cCI6MjA5NDI1MDQ0Nn0.t7NyAOSWIIKmmCwtgVM-f6dPIQE3Ql_c02__CGVZdck";

const phoneDigits = businessData.phone.replace(/\D/g, "");
const waLink = `https://wa.me/${phoneDigits}`;

// Prosta funkcja analityczna (można potem podpiąć pod Google Analytics lub własną bazę)
const trackEvent = (action: string) => {
  console.log(`[Analytics] Event: ${action}`);
  // Tutaj można dodać wysyłkę do Supabase lub innego API
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Pricing />
      <Reviews />
      <FAQ />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt={businessData.title}
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{businessData.totalScore}</span>
          <span className="text-muted-foreground">· {businessData.reviewsCount} opinii</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
          {businessData.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {businessData.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${businessData.phone.replace(/\s/g, "")}`}
            onClick={() => trackEvent("click_call_hero")}
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Zadzwoń teraz
          </a>
          <a
            href="#kontakt"
            onClick={() => trackEvent("click_contact_hero")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-medium backdrop-blur transition hover:bg-white/10"
          >
            Napisz do nas
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {businessData.street}, {businessData.city}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Cennik usług</h2>
        <p className="mt-3 text-muted-foreground">Przejrzyste ceny, brak ukrytych kosztów</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="divide-y divide-border">
          {businessData.pricing.map((item) => (
            <div key={item.service} className="flex flex-col justify-between gap-2 p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-semibold">{item.service}</h3>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </div>
              <div className="text-lg font-bold text-primary">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground italic">
        * Podane ceny są cenami orientacyjnymi. Dokładna wycena po oględzinach auta.
      </p>
    </section>
  );
}

function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Częste pytania</h2>
      </div>
      <div className="space-y-4">
        {businessData.faq.map((item) => (
          <div key={item.q} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Nasze usługi</h2>
        <p className="mt-3 text-muted-foreground">Kompleksowa obsługa Twojego samochodu</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {businessData.services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-y border-border bg-card/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Co mówią klienci</h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-muted-foreground">
              {businessData.totalScore} z {businessData.reviewsCount} opinii
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {businessData.reviews.map((r) => (
            <div key={r.author} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <p className="mt-4 text-sm font-semibold">{r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Kontakt</h2>
        <p className="mt-3 text-muted-foreground">Opisz problem — oddzwonimy</p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ client_name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          business_id: businessData.id,
          client_name: form.client_name,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      alert("Wiadomość wysłana!");
      setForm({ client_name: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Błąd wysyłania. Spróbuj ponownie lub zadzwoń bezpośrednio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Imię</label>
          <input
            required
            maxLength={100}
            value={form.client_name}
            onChange={(e) => setForm({ ...form, client_name: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Telefon</label>
          <input
            required
            type="tel"
            maxLength={20}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
            placeholder="+48 ..."
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Krótki opis problemu</label>
          <textarea
            required
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
            placeholder="Klimatyzacja nie chłodzi..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
      </div>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-4">
      <a
        href={`tel:${businessData.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Telefon</p>
          <p className="font-semibold">{businessData.phone}</p>
        </div>
      </a>
      <a
        href={businessData.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Adres</p>
          <p className="font-semibold">{businessData.street}</p>
          <p className="text-sm text-muted-foreground">{businessData.city}, {businessData.countryCode}</p>
        </div>
      </a>
      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          title="Mapa"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(businessData.title + " " + businessData.city)}&output=embed`}
          className="h-64 w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {businessData.title}. Wszystkie prawa zastrzeżone.</p>
      <p className="mt-2 text-xs text-muted-foreground/50">WaaS</p>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}

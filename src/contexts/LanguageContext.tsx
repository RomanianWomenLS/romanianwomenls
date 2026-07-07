import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ro" | "en";

type Dict = Record<string, { ro: string; en: string }>;

const dict: Dict = {
  // Header
  "nav.about": { ro: "Despre noi", en: "About" },
  "nav.contact": { ro: "Contact", en: "Contact" },
  "nav.story": { ro: "Povestea Noastră", en: "Our Story" },
  "nav.vision": { ro: "Viziune & Misiune", en: "Vision & Mission" },
  "nav.members": { ro: "Membre active", en: "Active Members" },
  "nav.join": { ro: "Join Us", en: "Join Us" },
  "site.title": { ro: "Românce in Life Sciences", en: "Romanian Women in Life Sciences" },

  // Hero
  "hero.badge": { ro: "Empowering Romanian Women in Life Sciences", en: "Empowering Romanian Women in Life Sciences" },
  "hero.title1": { ro: "Romanian Women in", en: "Romanian Women in" },
  "hero.title2": { ro: "Life Sciences Switzerland", en: "Life Sciences Switzerland" },
  "hero.subtitle": {
    ro: "Românce in Life Sciences este o comunitate dedicată femeilor românce din domeniul life sciences din Elveția. Obiectivul nostru este să construim un spațiu de încredere, colaborare și vizibilitate, care să conecteze ecosistemele științifice, academice, industriale și antreprenoriale din România și Elveția.",
    en: "Romanian Women in Life Sciences is a community dedicated to Romanian women working in life sciences in Switzerland. Our goal is to build a space of trust, collaboration and visibility that connects the scientific, academic, industrial and entrepreneurial ecosystems of Romania and Switzerland.",
  },
  "hero.cta": { ro: "Become a Member", en: "Become a Member" },

  // About
  "about.tag": { ro: "Despre noi", en: "About Us" },
  "about.title": { ro: "Cine suntem", en: "Who we are" },
  "about.intro": {
    ro: "Suntem o comunitate de femei românce unite de interesul pentru life sciences, care contribuie din roluri diverse la ecosistemul elvețian — de la cercetare și industrie la antreprenoriat, consultanță, drept și finanțe.",
    en: "We are a community of Romanian women united by a shared interest in life sciences, contributing in diverse roles to the Swiss ecosystem — from research and industry to entrepreneurship, consulting, law and finance.",
  },
  "about.f1.title": { ro: "Comunitate profesionala", en: "Professional Community" },
  "about.f1.desc": {
    ro: "O retea de sprijin a femeilor românce care studiaza si lucreaza in domeniul life sciences in Elvetia.",
    en: "A support network for Romanian women studying and working in life sciences in Switzerland.",
  },
  "about.f2.title": { ro: "Dezvoltare profesionala", en: "Professional Development" },
  "about.f2.desc": {
    ro: "Mentorat, ateliere si resurse dedicate evolutiei carierei tale in life sciences.",
    en: "Mentorship, workshops and resources dedicated to advancing your career in life sciences.",
  },
  "about.f3.title": { ro: "Conexiune culturala", en: "Cultural Connection" },
  "about.f3.desc": {
    ro: "Ne onoram identitatea romaneasca, fiind in acelasi timp parte activa a ecosistemului elvetian de life sciences.",
    en: "We honor our Romanian identity while being an active part of the Swiss life sciences ecosystem.",
  },
  "about.f4.title": { ro: "Colaborare si inovatie", en: "Collaboration & Innovation" },
  "about.f4.desc": {
    ro: "Incurajam colaborari interdisciplinare si contributii relevante la cercetare, inovatie si antreprenoriat in life sciences.",
    en: "We encourage interdisciplinary collaboration and meaningful contributions to research, innovation and entrepreneurship in life sciences.",
  },

  // Story
  "story.tag": { ro: "Cum a început", en: "How it started" },
  "story.title": {
    ro: "Uneori, comunitățile se nasc dintr-o nevoie clară. Alteori, dintr-o conversație care refuză să se termine.",
    en: "Sometimes communities are born from a clear need. Other times, from a conversation that refuses to end.",
  },
  "story.p1": {
    ro: "Totul a pornit în Zürich, de la o întâlnire programată pentru 30 de minute între Andreea Loredana Crețu și Andreea Stănescu, care s-a transformat într-o discuție de aproape două ore. Subiectele au curs natural: cariere în life sciences, viața profesională în Elveția, provocările și oportunitățile pentru femeile românce și, mai ales, câte femei extraordinare românce cunoaște fiecare în acest domeniu.",
    en: "It all started in Zürich, from a 30-minute meeting between Andreea Loredana Crețu and Andreea Stănescu that turned into a nearly two-hour conversation. The topics flowed naturally: careers in life sciences, professional life in Switzerland, the challenges and opportunities for Romanian women, and above all, how many extraordinary Romanian women each of them knew in the field.",
  },
  "story.p2": {
    ro: "A urmat un prânz aparent casual, care a deschis o conversație mai profundă despre sens, impact și responsabilitatea de a crea ceva mai mare. De-a lungul anilor, amândouă întâlniseră românce remarcabile în cercetare, industrie, antreprenoriat și consultanță, însă aceste conexiuni apăreau fragmentat, fără un spațiu comun care să le aducă împreună.",
    en: "A seemingly casual lunch followed, opening a deeper conversation about meaning, impact, and the responsibility of building something bigger. Over the years, both had met remarkable Romanian women in research, industry, entrepreneurship and consulting — but these connections were scattered, with no shared space to bring them together.",
  },
  "story.p3": {
    ro: "Din această energie a prins contur ideea unei comunități: un loc în care româncele din life sciences din Elveția să se poată conecta autentic, să împărtășească experiențe, să colaboreze și să se sprijine reciproc.",
    en: "From this energy, the idea of a community took shape: a place where Romanian women in life sciences in Switzerland could connect authentically, share experiences, collaborate and support each other.",
  },
  "story.p4": {
    ro: "Astăzi, această viziune continuă să crească prin Românce in Life Sciences, construită pe încredere, curiozitate și dorința de a evolua împreună.",
    en: "Today, this vision keeps growing through Romanian Women in Life Sciences, built on trust, curiosity and the desire to grow together.",
  },
  "story.stat1": { ro: "Membre active", en: "Active members" },
  "story.stat2": { ro: "Luni de activitate", en: "Months active" },
  "story.stat3": { ro: "Orașe din Elveția", en: "Swiss cities" },
  "story.est": { ro: "Înființat 2025", en: "Est. 2025" },

  // Members
  "members.tag": { ro: "Membrele noastre", en: "Our Members" },
  "members.title": { ro: "Cunoaște comunitatea noastră", en: "Meet our community" },
  "members.intro": {
    ro: "Membrele noastre activează în roluri diverse în cadrul ecosistemului life sciences din Elveția, de la universități și institute de cercetare de top la companii farmaceutice, biotech și organizații conexe.",
    en: "Our members work in diverse roles across the Swiss life sciences ecosystem, from top universities and research institutes to pharmaceutical, biotech and related organizations.",
  },
  "members.more": {
    ro: "Și multe alte profesioniste talentate din domeniul life sciences din întreaga Elveție…",
    en: "And many more talented professionals across life sciences throughout Switzerland…",
  },

  // Vision
  "vision.tag": { ro: "Viziune & Misiune", en: "Vision & Mission" },
  "vision.title": { ro: "Construim conexiuni care contează", en: "We build connections that matter" },
  "vision.visionTitle": { ro: "Viziunea noastră", en: "Our Vision" },
  "vision.visionText": {
    ro: "Să devenim principala rețea a femeilor românce din life sciences din Elveția, recunoscută pentru conexiune, colaborare, mentorat și vizibilitate — un pod real între ecosistemele științifice, antreprenoriale și de politici publice din România și Elveția.",
    en: "To become the leading network of Romanian women in life sciences in Switzerland, recognized for connection, collaboration, mentorship and visibility — a real bridge between the scientific, entrepreneurial and policy ecosystems of Romania and Switzerland.",
  },
  "vision.missionTitle": { ro: "Să construim un spațiu care:", en: "Building a space that:" },
  "vision.m1": { ro: "Conectează femei românce din toate domeniile life sciences", en: "Connects Romanian women across all life sciences fields" },
  "vision.m2": { ro: "Sprijină creșterea profesională și personală", en: "Supports professional and personal growth" },
  "vision.m3": { ro: "Facilitează colaborări, mentorat și vizibilitate", en: "Facilitates collaboration, mentorship and visibility" },
  "vision.m4": { ro: "Oferă inspirație, povești și suport reciproc", en: "Offers inspiration, stories and mutual support" },
  "vision.m5": { ro: "Contribuie la reprezentarea și integrarea profesională a femeilor românce în Elveția", en: "Contributes to the representation and professional integration of Romanian women in Switzerland" },

  // Contact
  "contact.tag": { ro: "Ia legătura cu noi", en: "Get in touch" },
  "contact.title": { ro: "Alătură-te comunității noastre", en: "Join our community" },
  "contact.intro": {
    ro: "Fie că ești interesată să devii membră, să colaborezi cu noi sau pur și simplu să afli mai multe despre rețeaua noastră, ne-ar face plăcere să te cunoaștem.",
    en: "Whether you're interested in becoming a member, collaborating with us, or simply learning more about our network, we'd love to hear from you.",
  },
  "contact.formNote": { ro: "Completează formularul și te vom contacta în cel mai scurt timp.", en: "Fill out the form and we'll get back to you as soon as possible." },
  "contact.formCta": { ro: "Deschide formularul", en: "Open the form" },
  "contact.followUs": { ro: "Urmărește-ne pe Linkedin", en: "Follow us on LinkedIn" },

  // Join
  "join.tag": { ro: "Alătură-te", en: "Join Us" },
  "join.title": { ro: "Cum devii membră", en: "How to Become a Member" },
  "join.intro": { ro: "Trei pași simpli pentru a face parte din comunitatea RWILS.", en: "Three simple steps to become part of the RWILS community." },
  "join.step1.title": { ro: "Completează formularul", en: "Fill Out the Form" },
  "join.step1.desc": { ro: "Trimite cererea de înscriere prin formularul nostru online.", en: "Submit your membership request through our online form." },
  "join.step2.title": { ro: "Așteaptă emailul de confirmare", en: "Wait for Confirmation" },
  "join.step2.desc": { ro: "Vei primi un email de la hello@romanianwomenls.com. Verifică și folderul de spam.", en: "You will receive an email from hello@romanianwomenls.com. Please check your spam folder." },
  "join.step3.title": { ro: "Rămâi la curent și fii membră activă", en: "Stay in the Loop & Become Active" },
  "join.step3.desc": { ro: "Primești ultimele actualizări și noutăți, iar apoi te poți alătura comunității noastre WhatsApp, participa la evenimente și interacționa pe pagina de LinkedIn.", en: "Get the latest updates and news, then join our WhatsApp community, attend events and engage on our LinkedIn page." },

  // Footer
  "footer.tagline": {
    ro: "Conectăm femei românce din domeniul life sciences și sprijinim colaborarea, creșterea profesională și impactul în ecosistemul elvețian.",
    en: "We connect Romanian women in life sciences and support collaboration, professional growth and impact in the Swiss ecosystem.",
  },
  "footer.quickLinks": { ro: "Linkuri rapide", en: "Quick links" },
  "footer.about": { ro: "Despre noi", en: "About us" },
  "footer.story": { ro: "Povestea noastră", en: "Our story" },
  "footer.members": { ro: "Membre", en: "Members" },
  "footer.vision": { ro: "Viziune & Misiune", en: "Vision & Mission" },
  "footer.contact": { ro: "Contact", en: "Contact" },
  "footer.getInTouch": { ro: "Ia legătura cu noi", en: "Get in touch" },
  "footer.formLink": { ro: "Formular de înscriere", en: "Membership form" },
  "footer.rights": { ro: "Toate drepturile rezervate.", en: "All rights reserved." },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored === "ro" || stored === "en") return stored;
    }
    return "ro";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

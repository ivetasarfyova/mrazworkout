const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const languageToggle = document.querySelector("[data-language-toggle]");
const languageFlag = document.querySelector(".language-flag");
const languageLabel = document.querySelector("[data-language-label]");
const metaDescription = document.querySelector("[data-meta-description]");
const testimonialsCarousel = document.querySelector("[data-testimonials-carousel]");
const testimonialPrev = document.querySelector("[data-testimonial-prev]");
const testimonialNext = document.querySelector("[data-testimonial-next]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("preferredLanguage");

const translations = {
  cs: {
    metaDescription:
      "Petr Mráz - osobní trenér kalisteniky a street workoutu. Individuální tréninky, online coaching, technika, síla a progres.",
    title: "Petr Mráz | Osobní trenér kalisteniky",
    languageToggle: "Switch to English",
    languageFlag: "flag-gb",
    languageLabel: "EN",
    navToggle: "Otevřít menu",
    mailSubject: "Nová zpráva z webu",
    mailName: "Jméno",
    mailMessage: "Zpráva",
    formNote: "Otevírám e-mailového klienta s předvyplněnou zprávou.",
    nav: {
      home: "Úvod",
      pricing: "Ceník",
      about: "O mně",
      references: "Reference",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Kalistenika / Street Workout / Coaching",
      title: "Osobní trenér kalisteniky",
      lead: "Vypadat skvěle a cítit se skvěle jde ruku v ruce.",
      primary: "Kontaktujte mě",
      secondary: "Zobrazit ceník",
      statsLabel: "Hlavní zaměření",
      statExperienceValue: "Více než 7 let",
      statExperienceLabel: "praxe ve cvičení",
      statIndividual: "individuální přístup",
      statOnline: "coaching na míru",
    },
    method: {
      eyebrow: "Metoda",
      title: "Co je vlastně kalistenika?",
      copy1:
        "Kalistenika pracuje s vahou vlastního těla a rozvíjí sílu, vytrvalost, koordinaci i flexibilitu. Stojí na cvicích jako kliky, shyby, dřepy, dipy a statické prvky typu planche nebo front lever.",
      copy2:
        "Její výhoda je jednoduchá: trénovat lze téměř kdekoliv a bez drahého vybavení. Kromě fyzické síly buduje také kontrolu nad tělem a přirozeně se propojuje se street workoutem, dynamickými prvky a prací na hrazdách nebo bradlech.",
      imageLabel: "Trénink kalisteniky",
    },
    features: {
      oneTitle: "Kalistenika pro každého",
      oneCopy:
        "Cvičení se dá přizpůsobit věku, kondici i aktuální síle. Každý pohyb má jednodušší i těžší varianty, případně lze přidat externí zátěž.",
      twoTitle: "Individuální přístup",
      twoCopy:
        "Trénink vychází ze zdravotního stavu, současné úrovně, svalových disbalancí a konkrétního cíle klienta.",
      threeTitle: "Bezpečný progres",
      threeCopy:
        "Prioritou je efektivní trénink, správná technika a dlouhodobý postup bez zbytečného rizika.",
    },
    pricing: {
      eyebrow: "Ceník",
      title: "Vyberte si trénink",
      card1Label: "Individuální osobní trénink",
      card1Price: "700 Kč",
      card1Copy: "Osobní lekce zaměřená na techniku, sílu a konkrétní tréninkový cíl.",
      card2Label: "Balíček 10 osobních tréninků",
      card2Price: "6900 Kč",
      card2Copy: "Souvislá práce na progresu, technice a návycích v delším tréninkovém bloku.",
      card3Label: "Měsíční online coaching",
      card3Price: "3000 Kč",
      card3Item1: "3 online tréninky přes WhatsApp nebo Google Meet",
      card3Item2: "Tréninkový plán na míru",
      card3Item3: "Denní možnost online komunikace",
      card3Item4: "Sledování progresu a úpravy tréninku",
    },
    about: {
      imageLabel: "Fitness trenér při tréninku",
      eyebrow: "O mně",
      copy1:
        "V oblasti cvičení a zdravého životního stylu se aktivně pohybuji více než 7 let. Moje cesta začala na střední škole v posilovně a postupně mě přivedla ke kalistenice a street workoutu.",
      copy2:
        "Právě práce s vlastním tělem, technikou a postupným posouváním limitů mě nadchla natolik, že jsem se rozhodl věnovat trénování naplno.",
      credentialsTitle: "Certifikáty a vzdělání",
      credential1: "Instruktor fitness - FitPraha.cz",
      credential2: "Certifikovaný trenér kalisteniky a street workoutu - WSWCF Academy",
      credential3: "NASM & AFAA approved vzdělání",
    },
    testimonials: {
      eyebrow: "Reference",
      title: "Výsledky klientů",
      controlsLabel: "Ovládání referencí",
      prevLabel: "Předchozí reference",
      nextLabel: "Další reference",
      oneCopy:
        "Tréninky s Petrem byly přesně podle mých představ. Oceňuji profesionální, ale přátelský přístup a důraz na správnou techniku.",
      twoCopy:
        "Díky tréninkům jsem zesílil, zhubnul a zlepšil techniku. Posunul jsem se k muscle-upu i stojce.",
      threeCopy:
        "Už po měsíci jsem se ze tří přítahů dostal na osm, zvládl první pozici back leveru a udržel stojku.",
      fourCopy:
        "Z Tuck Front Leveru jsem se posunul na One Leg variantu, zesílil v základech a cítím výrazný progres.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Začněte trénovat cíleně",
      copy:
        "Napište, jaký máte cíl, současnou úroveň a jaký typ spolupráce preferujete. Ozvu se s dalším postupem.",
      phoneLabel: "Telefon",
    },
    form: {
      name: "Jméno a příjmení",
      message: "Zpráva",
      submit: "Odeslat",
    },
    footer: {
      rights: "© 2025 Petr Mráz | Všechna práva vyhrazena",
      backTop: "Zpět nahoru",
    },
  },
  en: {
    metaDescription:
      "Petr Mráz - personal calisthenics and street workout coach. Individual training, online coaching, technique, strength, and progress.",
    title: "Petr Mráz | Personal Calisthenics Coach",
    languageToggle: "Přepnout do češtiny",
    languageFlag: "flag-cz",
    languageLabel: "CS",
    navToggle: "Open menu",
    mailSubject: "New website message",
    mailName: "Name",
    mailMessage: "Message",
    formNote: "Opening your email client with a prefilled message.",
    nav: {
      home: "Home",
      pricing: "Pricing",
      about: "About",
      references: "References",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Calisthenics / Street Workout / Coaching",
      title: "Personal Calisthenics Coach",
      lead: "Looking great and feeling great go hand in hand.",
      primary: "Contact Me",
      secondary: "View Pricing",
      statsLabel: "Main focus",
      statExperienceValue: "More than 7 years",
      statExperienceLabel: "training experience",
      statIndividual: "individual approach",
      statOnline: "tailored coaching",
    },
    method: {
      eyebrow: "Method",
      title: "What is calisthenics?",
      copy1:
        "Calisthenics uses your own bodyweight to develop strength, endurance, coordination, and flexibility. It is built around movements such as push-ups, pull-ups, squats, dips, and static skills like the planche or front lever.",
      copy2:
        "Its advantage is simple: you can train almost anywhere without expensive equipment. Beyond physical strength, it builds body control and naturally connects with street workout, dynamic skills, and training on bars or parallel bars.",
      imageLabel: "Calisthenics training",
    },
    features: {
      oneTitle: "Calisthenics for everyone",
      oneCopy:
        "Training can be adapted to your age, fitness level, and current strength. Every movement has easier and harder variations, with external load added when it makes sense.",
      twoTitle: "Individual approach",
      twoCopy:
        "Training is based on your health, current level, muscle imbalances, and specific personal goal.",
      threeTitle: "Safe progress",
      threeCopy:
        "The priority is effective training, correct technique, and long-term progress without unnecessary risk.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Choose your training",
      card1Label: "Individual personal training",
      card1Price: "700 CZK",
      card1Copy: "A personal session focused on technique, strength, and your specific training goal.",
      card2Label: "Package of 10 personal sessions",
      card2Price: "6900 CZK",
      card2Copy: "Consistent work on progress, technique, and habits across a longer training block.",
      card3Label: "Monthly online coaching",
      card3Price: "3000 CZK",
      card3Item1: "3 online sessions via WhatsApp or Google Meet",
      card3Item2: "Tailored training plan",
      card3Item3: "Daily option for online communication",
      card3Item4: "Progress tracking and training adjustments",
    },
    about: {
      imageLabel: "Fitness coach during training",
      eyebrow: "About me",
      copy1:
        "I have been active in training and a healthy lifestyle for more than 7 years. My path started in a school gym and gradually led me to calisthenics and street workout.",
      copy2:
        "Working with bodyweight, technique, and steadily pushing limits drew me in so strongly that I decided to dedicate myself fully to coaching.",
      credentialsTitle: "Certificates and education",
      credential1: "Fitness Instructor - FitPraha.cz",
      credential2: "Certified Calisthenics and Street Workout Coach - WSWCF Academy",
      credential3: "NASM & AFAA approved education",
    },
    testimonials: {
      eyebrow: "References",
      title: "Client results",
      controlsLabel: "Reference carousel controls",
      prevLabel: "Previous reference",
      nextLabel: "Next reference",
      oneCopy:
        "Training with Petr was exactly what I was looking for. I appreciate the professional yet friendly approach and focus on proper technique.",
      twoCopy:
        "Thanks to the training, I got stronger, lost weight, and improved my technique. I moved closer to the muscle-up and handstand.",
      threeCopy:
        "After just one month I went from three pull-ups to eight, reached my first back lever position, and held a handstand.",
      fourCopy:
        "I progressed from Tuck Front Lever to the One Leg variation, got stronger in the basics, and feel clear progress.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start training with purpose",
      copy:
        "Write what your goal is, your current level, and what type of cooperation you prefer. I will get back to you with the next steps.",
      phoneLabel: "Phone",
    },
    form: {
      name: "Full name",
      message: "Message",
      submit: "Send",
    },
    footer: {
      rights: "© 2025 Petr Mráz | All rights reserved",
      backTop: "Back to top",
    },
  },
};

let currentLanguage = ["cs", "en"].includes(urlLanguage)
  ? urlLanguage
  : savedLanguage === "en"
    ? "en"
    : "cs";

if (["cs", "en"].includes(urlLanguage)) {
  localStorage.setItem("preferredLanguage", currentLanguage);
}

function getTranslationValue(language, key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function applyLanguage(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary.title;
  metaDescription?.setAttribute("content", dictionary.metaDescription);
  navToggle?.setAttribute("aria-label", dictionary.navToggle);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslationValue(language, element.dataset.i18n);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslationValue(language, element.dataset.i18nAriaLabel);

    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  if (languageToggle) {
    languageToggle.setAttribute("aria-label", dictionary.languageToggle);
  }

  if (languageFlag) {
    languageFlag.className = `language-flag ${dictionary.languageFlag}`;
  }

  if (languageLabel) {
    languageLabel.textContent = dictionary.languageLabel;
  }

  if (formNote) {
    formNote.textContent = "";
  }
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);

  if (language === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }

  window.history.replaceState(null, "", url);
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeNav() {
  body.classList.remove("nav-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeNav();
  }
});

languageToggle?.addEventListener("click", () => {
  currentLanguage = currentLanguage === "cs" ? "en" : "cs";
  localStorage.setItem("preferredLanguage", currentLanguage);
  updateLanguageUrl(currentLanguage);
  applyLanguage(currentLanguage);
  closeNav();
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
applyLanguage(currentLanguage);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

function scrollTestimonials(direction) {
  if (!testimonialsCarousel) {
    return;
  }

  const firstCard = testimonialsCarousel.querySelector(".testimonial-card");
  const scrollDistance = firstCard
    ? firstCard.getBoundingClientRect().width + 14
    : testimonialsCarousel.clientWidth;

  testimonialsCarousel.scrollBy({
    left: direction * scrollDistance,
    behavior: "smooth",
  });
}

testimonialPrev?.addEventListener("click", () => scrollTestimonials(-1));
testimonialNext?.addEventListener("click", () => scrollTestimonials(1));

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const dictionary = translations[currentLanguage];

  const subject = encodeURIComponent(`${dictionary.mailSubject} - ${name}`);
  const bodyText = encodeURIComponent(
    `${dictionary.mailName}: ${name}\nE-mail: ${email}\n\n${dictionary.mailMessage}:\n${message}`
  );

  window.location.href = `mailto:mrazpetr99@gmail.com?subject=${subject}&body=${bodyText}`;
  formNote.textContent = dictionary.formNote;
});

import { LocalizedText, NavItem, CalendarEvent, SaintDay } from './types';
import React from 'react';

// Using a proxy/preview link for the Google Drive banner image to ensure it loads in an img tag
export const BANNER_IMAGE_URL = "https://lh3.googleusercontent.com/d/1C3ElaDXuIxRvy29Z5QvA9ZRr1eQjGXR3";
// Placeholder for the "Corps de page d'accueil" image (Church exterior)
export const CHURCH_EXTERIOR_URL = "https://images.unsplash.com/photo-1548625361-ec80d60c23b3?q=80&w=2070&auto=format&fit=crop"; 
// Saint Nicholas Icon URL - High availability thumbnail
export const ST_NICHOLAS_ICON_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Saint_Nicholas_icon_%2816th_century%2C_Vologda%29.jpg/320px-Saint_Nicholas_icon_%2816th_century%2C_Vologda%29.jpg";

export const SITE_TITLE: LocalizedText = {
  fr: "Paroisse Orthodoxe Saint-Nicolas",
  ro: "Parohia Ortodoxă Sfântul Nicolae",
  ka: "წმინდა ნიკოლოზის მართლმადიდებლური სამრევლო"
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { fr: "Accueil", ro: "Acasă", ka: "მთავარი" } },
  { id: 'presentation', label: { fr: "Présentation", ro: "Prezentare", ka: "პრეზენტაცია" } },
  { id: 'biserica', label: { fr: "L'Église", ro: "Biserica", ka: "ეკლესია" } },
  { id: 'ortodoxia', label: { fr: "Orthodoxie", ro: "Ortodoxia", ka: "მართლმადიდებლობა" } },
  { id: 'clergy', label: { fr: "Clergé", ro: "Cler", ka: "სამღვდელოება" } },
  { id: 'parish_life', label: { fr: "Vie Paroissiale", ro: "Viața Parohială", ka: "სამრევლო ცხოვრება" } },
  { id: 'calendar', label: { fr: "Calendrier & Agenda", ro: "Calendar & Agendă", ka: "კალენდარი და დღის წესრიგი" } },
  { id: 'gallery', label: { fr: "Galerie", ro: "Galerie", ka: "გალერეა" } },
  { id: 'contact', label: { fr: "Contact & Accès", ro: "Contact & Acces", ka: "კონტაქტი" } },
];

export const WELCOME_MESSAGE: LocalizedText = {
  fr: "Bienvenue sur le site de la Paroisse Orthodoxe de Clermont-Ferrand, sous la juridiction de la Métropole Orthodoxe Roumaine d'Europe Occidentale et Méridionale.",
  ro: "Bine ați venit pe site-ul Parohiei Ortodoxe din Clermont-Ferrand, sub jurisdicția Mitropoliei Ortodoxe Române a Europei Occidentale și Meridionale.",
  ka: "კეთილი იყოს თქვენი მობრძანება კლერმონ-ფერანის მართლმადიდებლური სამრევლოს ვებგვერდზე, რომელიც დასავლეთ და სამხრეთ ევროპის რუმინეთის მართლმადიდებლური მიტროპოლიის იურისდიქციაშია."
};

export const CONTACT_INFO = {
  address: "43 rue Sainte Claire, 63000 Clermont Ferrand",
  phone: "04 73 37 01 55",
  email: "clermont@mitropolia.eu",
  contacts: [
    { name: "Pr. Gérard REYNAUD", phone: "06 76 47 03 55" },
    { name: "Ciprian POPA", phone: "06 18 12 15 69" },
    { name: "Ioan SARBAN", phone: "06 01 23 43 22" }
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100010328286013",
    youtube: "https://www.youtube.com/channel/UCNFDSNht7I1Qj8et4efKehg"
  }
};

// Mock data based on typical Orthodox calendar
export const UPCOMING_EVENTS: CalendarEvent[] = [
  {
    date: "2024-05-25",
    time: "18:00",
    title: { fr: "Vêpres", ro: "Vecernia", ka: "მწუხრის ლოცვა" },
    type: "vespers"
  },
  {
    date: "2024-05-26",
    time: "10:00",
    title: { fr: "Divine Liturgie", ro: "Sfânta Liturghie", ka: "საღმრთო ლიტურგია" },
    type: "liturgy"
  },
  {
    date: "2024-06-01",
    time: "18:00",
    title: { fr: "Vêpres", ro: "Vecernia", ka: "მწუხრის ლოცვა" },
    type: "vespers"
  },
  {
    date: "2024-06-02",
    time: "10:00",
    title: { fr: "Divine Liturgie", ro: "Sfânta Liturghie", ka: "საღმრთო ლიტურგია" },
    type: "liturgy"
  }
];

export const SAINTS_MOCK: SaintDay = {
  date: "Aujourd'hui",
  saints: {
    fr: "Saint Martyrs Hermès, Aggée et Caïus; Saint martyr Philippe.",
    ro: "Sfinții Mucenici Hermes, Agheu și Caius; Sfântul Mucenic Filip.",
    ka: "წმინდა მოწამენი ჰერმესი, ანგია და გაიოზი; წმინდა მოწამე ფილიპე."
  }
};
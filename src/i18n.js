import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import sharedEN from './locales/en/shared.json'
import sharedKR from './locales/kr/shared.json'
import aboutEN from './locales/en/about.json'
import aboutKR from './locales/kr/about.json'
import testimonialsEN from './locales/en/testimonials.json'
import testimonialsKR from './locales/kr/testimonials.json'
import projectsEN from './locales/en/projects.json'
import projectsKR from './locales/kr/projects.json'
import blogEN from './locales/en/blog.json'
import blogKR from './locales/kr/blog.json'
import yearEndEN from './locales/en/yearEnd.json'
import yearEndKR from './locales/kr/yearEnd.json'
import smartThingsEN from './locales/en/smartThings.json'
import smartThingsKR from './locales/kr/smartThings.json'
import faqEN from './locales/en/faq.json'
import faqKR from './locales/kr/faq.json'
import qnaER from './locales/en/qna.json'
import qnaKR from './locales/kr/qna.json'

// the translations
const resources = {
  en: {
    about: aboutEN,
    shared: sharedEN,
    testimonials: testimonialsEN,
    projects: projectsEN,
    blog: blogEN,
    yearEnd: yearEndEN,
    smartThings: smartThingsEN,
    faq: faqEN,
    qna: qnaER
  },
  kr: {
    about: aboutKR,
    shared: sharedKR,
    testimonials: testimonialsKR,
    projects: projectsKR,
    blog: blogKR,
    yearEnd: yearEndKR,
    smartThings: smartThingsKR,
    faq: faqKR,
    qna: qnaKR
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    defaultNS: 'shared',
    lng: localStorage.getItem('lng') || 'en',
    fallbackLng: 'en',

    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n

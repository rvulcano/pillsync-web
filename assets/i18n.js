// Tiny i18n for the static site: en (default), pt-BR, es — picked from the browser language.
// ?lang=pt|es|en wins (and is remembered), then the last choice, then the browser.
const lang = (() => {
  const norm = (l) => (l || '').toLowerCase().replace(/-.*/, '')
  const pick = (l) => (['pt', 'es', 'en'].includes(norm(l)) ? norm(l) : null)
  const q = pick(new URLSearchParams(location.search).get('lang'))
  try {
    if (q) localStorage.setItem('pillsync.site.lang', q)
    return q || pick(localStorage.getItem('pillsync.site.lang')) || pick(navigator.language) || 'en'
  } catch {
    return q || pick(navigator.language) || 'en'
  }
})()
document.documentElement.lang = { pt: 'pt-BR', es: 'es', en: 'en' }[lang]

export const T = {
  en: {
    tagline: 'Never miss a dose',
    sub: 'Medication reminders right on time — and a heads-up for the people who care about you.',
    soon: 'Coming soon to the App Store and Google Play.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    inviteTitle: (who) => (who ? `${who} wants to care for you` : 'You were invited to PillSync'),
    inviteSub: 'They’ll help you remember your medications and get a heads-up if one slips.',
    step1: 'Download PillSync',
    step2: 'Create your account',
    step2auto: 'The invite connects automatically.',
    step2code: 'If asked, enter this code:',
    open: 'Open in the app',
    play: 'Get it on Google Play',
    appstore: 'Download on the App Store',
    copy: 'Copy code',
    copied: 'Copied!',
    invalid: 'This invite is invalid or has expired. Ask for a new one.',
  },
  pt: {
    tagline: 'Nunca mais esqueça um remédio',
    sub: 'Lembretes de remédio na hora certa — e um aviso para quem cuida de você.',
    soon: 'Em breve na App Store e no Google Play.',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    inviteTitle: (who) => (who ? `${who} quer cuidar de você` : 'Você foi convidado para o PillSync'),
    inviteSub: 'Essa pessoa vai te ajudar a lembrar dos remédios e recebe um aviso se alguma dose escapar.',
    step1: 'Baixe o PillSync',
    step2: 'Crie sua conta',
    step2auto: 'O convite é conectado sozinho.',
    step2code: 'Se pedir, digite este código:',
    open: 'Abrir no app',
    play: 'Baixar no Google Play',
    appstore: 'Baixar na App Store',
    copy: 'Copiar código',
    copied: 'Copiado!',
    invalid: 'Este convite é inválido ou expirou. Peça um novo.',
  },
  es: {
    tagline: 'No vuelvas a olvidar una dosis',
    sub: 'Recordatorios de medicinas a tiempo — y un aviso para quienes te cuidan.',
    soon: 'Muy pronto en App Store y Google Play.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    inviteTitle: (who) => (who ? `${who} quiere cuidarte` : 'Te invitaron a PillSync'),
    inviteSub: 'Te ayudará a recordar tus medicinas y recibirá un aviso si se te pasa alguna dosis.',
    step1: 'Descarga PillSync',
    step2: 'Crea tu cuenta',
    step2auto: 'La invitación se conecta sola.',
    step2code: 'Si te lo pide, introduce este código:',
    open: 'Abrir en la app',
    play: 'Descargar en Google Play',
    appstore: 'Descargar en App Store',
    copy: 'Copiar código',
    copied: '¡Copiado!',
    invalid: 'Esta invitación no es válida o caducó. Pide una nueva.',
  },
}[lang]
export const LANG = lang

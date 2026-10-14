// Landing page copy (en / pt / es) and rendering. Screens come from `node scripts/store-screenshots.mjs`.
import { LANG } from '/assets/i18n.js'

const COPY = {
  en: {
    notifNow: 'now',
    notifT: 'Time for Losartan 50 mg',
    notifP: '1 tablet · After breakfast',
    aTake: 'Take', aSnooze: 'Snooze', aSkip: 'Skip',
    notifLabel: 'Reminder notification for Losartan 50 mg with Take, Snooze and Skip actions',
    title: 'PillSync: medication reminders with caregiver alerts',
    desc: 'Reminders for every dose, right on time. If one slips, the person who cares for you gets an alert.',
    nav: 'How it works',
    soon: 'Coming soon to the App Store and Google Play',
    heroTitle: 'Your meds, right on time. And the people who care about you, in the loop.',
    heroSub: 'PillSync reminds you of every dose. If one slips, a son, a daughter or anyone you choose gets an alert and can call you right away.',
    heroFree: 'Free for the person taking the medicine.',
    heroLink: 'See how it works',
    dayTitle: 'A day with PillSync',
    s1t: 'Time for your pill',
    s1p: 'Your phone reminds you on time, even offline. Mark Take, Snooze or Skip right from the notification.',
    s2t: 'On time? The mascot celebrates.',
    s2p: 'Every dose taken on time gets a heart. Small wins that turn into a habit.',
    toastT: 'Right on time!',
    toastP: 'That’s how it’s done.',
    s3t: 'Missed one? Your caregiver knows.',
    s3p: 'If a dose isn’t marked within the time you agreed on, your caregiver gets an alert and can call or WhatsApp you in one tap.',
    s4t: 'How the week went',
    s4p: 'History shows your adherence over the last 7 and 30 days and which doses were missed. Handy for your next appointment.',
    addTitle: 'Adding a medicine takes seconds',
    addP: 'Type the first letters and pick one. PillSync fills in the strength, the form and even the shape and color of the pill, so you recognize it in the box.',
    addFact: '172 common medicines in English, Portuguese and Spanish.',
    planTitle: 'Free for the person taking the medicine. Pro for the person who cares.',
    freeName: 'Free',
    freeWho: 'For you',
    free: ['Unlimited reminders at the exact time', 'Take, Snooze or Skip from the notification', '7- and 30-day history', 'Connect with whoever cares for you'],
    proName: 'PillSync Pro',
    proWho: 'For caregivers',
    pro: ['Care for up to 5 people', 'Alert when someone misses a dose', 'Call or WhatsApp in one tap', 'See each person’s day'],
    planNote: 'Monthly, yearly or lifetime, priced in your local currency in your country’s store.',
    privTitle: 'Your health data is yours',
    privP: 'We don’t sell your data. You can delete your account and everything in it at any time, right in the app.',
    privLink: 'Read the Privacy Policy',
    faqTitle: 'Questions',
    faq: [
      ['Do I need internet to get reminders?', 'No. Reminders live on your phone and ring even offline. The internet is only used to sync and to alert the person who cares for you.'],
      ['Does the person I care for need a phone?', 'Yes. For now they use PillSync on their own phone, for free. You send the invite on WhatsApp and you’re connected as soon as they create their account.'],
      ['How much does it cost?', 'It’s free for the person taking the medicine. To care for someone, PillSync Pro is monthly, yearly or lifetime, priced in your local currency.'],
      ['Does PillSync replace medical advice?', 'No. It reminds you of and records the doses you add. Always follow your prescription and your doctor’s or pharmacist’s advice.'],
    ],
    endTitle: 'Start with tomorrow morning’s dose.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    lang: 'Language',
    alt: { today: 'Today screen with the doses of the day and Take, Snooze and Skip buttons', care: 'Care screen showing that João missed his Metformin, with Call and WhatsApp buttons', history: 'History screen with 83% adherence and a bar chart of the week', search: 'Adding a medicine: typing “losar” suggests Losartan', mascot: 'PillSync mascot, a blue and white capsule, waving', love: 'PillSync mascot with heart eyes' },
  },
  pt: {
    notifNow: 'agora',
    notifT: 'Hora da Losartana 50 mg',
    notifP: '1 comprimido · Após o café',
    aTake: 'Tomei', aSnooze: 'Adiar', aSkip: 'Pular',
    notifLabel: 'Notificação de lembrete da Losartana 50 mg com as ações Tomei, Adiar e Pular',
    title: 'PillSync: lembrete de remédio com aviso para quem cuida',
    desc: 'Lembrete de cada dose na hora certa. Se uma escapar, quem cuida de você recebe um aviso.',
    nav: 'Como funciona',
    soon: 'Em breve na App Store e no Google Play',
    heroTitle: 'Remédio na hora certa. E quem cuida de você fica sabendo.',
    heroSub: 'O PillSync avisa a hora de cada dose. Se uma escapar, um filho, uma filha ou quem você escolher recebe um alerta e pode ligar na hora.',
    heroFree: 'Grátis para quem toma o remédio.',
    heroLink: 'Ver como funciona',
    dayTitle: 'Um dia com o PillSync',
    s1t: 'Hora do remédio',
    s1p: 'O celular avisa no horário, mesmo sem internet. Dá para marcar Tomei, Adiar ou Pular direto na notificação.',
    s2t: 'Tomou na hora? O mascote comemora.',
    s2p: 'Cada dose no horário ganha um coração. Pequenas vitórias que viram hábito.',
    toastT: 'Na hora certa!',
    toastP: 'É assim que se faz.',
    s3t: 'Esqueceu? Quem cuida fica sabendo.',
    s3p: 'Se a dose não for marcada no prazo combinado, quem cuida de você recebe um alerta e liga ou manda WhatsApp com um toque.',
    s4t: 'Como foi a semana',
    s4p: 'O histórico mostra a adesão dos últimos 7 e 30 dias e quais doses ficaram para trás. Bom para levar na consulta.',
    addTitle: 'Cadastrar um remédio leva segundos',
    addP: 'Digite as primeiras letras e escolha. O PillSync já preenche a concentração, a forma e até o formato e a cor do comprimido, para você reconhecer na caixa.',
    addFact: '172 genéricos em 3 idiomas e 8.665 nomes comerciais registrados na ANVISA.',
    planTitle: 'Grátis para quem toma. Pro para quem cuida.',
    freeName: 'Grátis',
    freeWho: 'Para você',
    free: ['Lembretes sem limite no horário exato', 'Tomei, Adiar e Pular na notificação', 'Histórico de 7 e 30 dias', 'Conectar com quem cuida de você'],
    proName: 'PillSync Pro',
    proWho: 'Para quem cuida',
    pro: ['Cuidar de até 5 pessoas', 'Alerta quando alguém esquece uma dose', 'Ligar ou mandar WhatsApp com um toque', 'Ver o dia de cada pessoa'],
    planNote: 'Mensal, anual ou vitalício, com preço em reais na loja do Brasil.',
    privTitle: 'Seus dados de saúde são seus',
    privP: 'Não vendemos seus dados. Você apaga a conta e tudo o que há nela quando quiser, direto no app.',
    privLink: 'Ler a Política de Privacidade',
    faqTitle: 'Dúvidas',
    faq: [
      ['Preciso de internet para receber os lembretes?', 'Não. Os lembretes ficam no seu celular e tocam mesmo sem internet. A internet só serve para sincronizar e para avisar quem cuida de você.'],
      ['A pessoa que eu cuido precisa ter celular?', 'Sim. Por enquanto ela usa o PillSync no próprio celular, de graça. Você manda o convite pelo WhatsApp e a conexão acontece assim que ela cria a conta.'],
      ['Quanto custa?', 'Para quem toma remédio, é grátis. Para cuidar de alguém, o PillSync Pro tem plano mensal, anual ou vitalício, em reais.'],
      ['O PillSync substitui o médico?', 'Não. Ele lembra e registra as doses que você cadastrar. Siga sempre a receita e a orientação do seu médico ou farmacêutico.'],
    ],
    endTitle: 'Comece pela dose de amanhã cedo.',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    lang: 'Idioma',
    alt: { today: 'Tela Hoje com as doses do dia e os botões Tomei, Adiar e Pular', care: 'Tela Cuidado mostrando que João esqueceu a Metformina, com botões Ligar e WhatsApp', history: 'Tela Histórico com 83% de adesão e gráfico da semana', search: 'Cadastro de remédio: ao digitar “losar” aparece Losartana', mascot: 'Mascote do PillSync, uma cápsula azul e branca, acenando', love: 'Mascote do PillSync apaixonado' },
  },
  es: {
    notifNow: 'ahora',
    notifT: 'Hora de Losartán 50 mg',
    notifP: '1 comprimido · Después del desayuno',
    aTake: 'Tomar', aSnooze: 'Posponer', aSkip: 'Omitir',
    notifLabel: 'Notificación de recordatorio de Losartán 50 mg con las acciones Tomar, Posponer y Omitir',
    title: 'PillSync: recordatorio de medicinas con aviso para quien te cuida',
    desc: 'Recordatorio de cada dosis a tiempo. Si se te pasa una, quien te cuida recibe un aviso.',
    nav: 'Cómo funciona',
    soon: 'Muy pronto en App Store y Google Play',
    heroTitle: 'Tus medicinas a tiempo. Y quien te cuida, al tanto.',
    heroSub: 'PillSync te avisa de cada dosis. Si se te pasa una, tu hijo, tu hija o quien elijas recibe una alerta y puede llamarte al momento.',
    heroFree: 'Gratis para quien toma la medicina.',
    heroLink: 'Ver cómo funciona',
    dayTitle: 'Un día con PillSync',
    s1t: 'Hora de tu medicina',
    s1p: 'El móvil te avisa a la hora, incluso sin internet. Marca Tomar, Posponer u Omitir desde la notificación.',
    s2t: '¿A tiempo? La mascota lo celebra.',
    s2p: 'Cada dosis a tiempo recibe un corazón. Pequeñas victorias que se vuelven hábito.',
    toastT: '¡Justo a tiempo!',
    toastP: 'Así se hace.',
    s3t: '¿Se te pasó una? Quien te cuida lo sabe.',
    s3p: 'Si la dosis no se marca en el plazo acordado, quien te cuida recibe una alerta y puede llamarte o escribirte por WhatsApp con un toque.',
    s4t: 'Cómo fue la semana',
    s4p: 'El historial muestra la adherencia de los últimos 7 y 30 días y qué dosis quedaron pendientes. Útil para tu próxima consulta.',
    addTitle: 'Añadir una medicina lleva segundos',
    addP: 'Escribe las primeras letras y elige. PillSync completa la concentración, la forma y hasta la forma y el color de la pastilla, para que la reconozcas en la caja.',
    addFact: '172 medicinas comunes en español, inglés y portugués.',
    planTitle: 'Gratis para quien la toma. Pro para quien cuida.',
    freeName: 'Gratis',
    freeWho: 'Para ti',
    free: ['Recordatorios ilimitados a la hora exacta', 'Tomar, Posponer u Omitir desde la notificación', 'Historial de 7 y 30 días', 'Conectar con quien te cuida'],
    proName: 'PillSync Pro',
    proWho: 'Para quien cuida',
    pro: ['Cuidar hasta 5 personas', 'Alerta cuando alguien olvida una dosis', 'Llamar o escribir por WhatsApp con un toque', 'Ver el día de cada persona'],
    planNote: 'Mensual, anual o de por vida, con precio en tu moneda en la tienda de tu país.',
    privTitle: 'Tus datos de salud son tuyos',
    privP: 'No vendemos tus datos. Puedes borrar tu cuenta y todo lo que contiene cuando quieras, desde la app.',
    privLink: 'Leer la Política de Privacidad',
    faqTitle: 'Preguntas',
    faq: [
      ['¿Necesito internet para recibir los recordatorios?', 'No. Los recordatorios están en tu móvil y suenan incluso sin internet. Internet solo sirve para sincronizar y avisar a quien te cuida.'],
      ['¿La persona que cuido necesita móvil?', 'Sí. Por ahora usa PillSync en su propio móvil, gratis. Le envías la invitación por WhatsApp y quedan conectados en cuanto crea su cuenta.'],
      ['¿Cuánto cuesta?', 'Es gratis para quien toma la medicina. Para cuidar a alguien, PillSync Pro es mensual, anual o de por vida, con precio en tu moneda.'],
      ['¿PillSync sustituye al médico?', 'No. Recuerda y registra las dosis que añadas. Sigue siempre tu receta y las indicaciones de tu médico o farmacéutico.'],
    ],
    endTitle: 'Empieza con la dosis de mañana temprano.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    lang: 'Idioma',
    alt: { today: 'Pantalla Hoy con las dosis del día y los botones Tomar, Posponer y Omitir', care: 'Pantalla Cuidado mostrando que João olvidó la Metformina, con botones Llamar y WhatsApp', history: 'Pantalla Historial con 83% de adherencia y gráfico de la semana', search: 'Añadir medicina: al escribir “losar” aparece Losartán', mascot: 'Mascota de PillSync, una cápsula azul y blanca, saludando', love: 'Mascota de PillSync enamorada' },
  },
}

const C = COPY[LANG]
const SHOTS = { pt: 'pt-BR', es: 'es', en: 'en' }[LANG]

document.title = C.title
document.querySelector('meta[name=description]').setAttribute('content', C.desc)

document.querySelectorAll('[data-c]').forEach((el) => {
  el.textContent = C[el.dataset.c]
})
document.querySelectorAll('[data-c-label]').forEach((el) => {
  el.setAttribute('aria-label', C[el.dataset.cLabel])
})
document.querySelectorAll('[data-list]').forEach((el) => {
  el.replaceChildren(...C[el.dataset.list].map((text) => Object.assign(document.createElement('li'), { textContent: text })))
})
document.querySelectorAll('img[data-shot]').forEach((img) => {
  img.src = `/assets/shots/${SHOTS}/${img.dataset.shot}.webp`
  img.alt = C.alt[img.dataset.shot]
})
document.querySelectorAll('img[data-alt]').forEach((img) => {
  img.alt = C.alt[img.dataset.alt]
})

const faq = document.getElementById('faq-list')
faq.replaceChildren(
  ...C.faq.map(([q, a]) => {
    const d = document.createElement('details')
    const s = document.createElement('summary')
    s.textContent = q
    const p = document.createElement('p')
    p.textContent = a
    d.append(s, p)
    return d
  }),
)

const select = document.getElementById('lang')
select.value = LANG
select.setAttribute('aria-label', C.lang)
select.addEventListener('change', () => {
  const url = new URL(location.href)
  url.searchParams.set('lang', select.value)
  location.href = url.href
})

document.body.classList.add('ready')

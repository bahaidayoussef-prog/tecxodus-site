'use strict';

// Use the site's existing GA4 property. A handoff is only an outbound intent.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-YE0XFCRWNY');

const form = document.querySelector('#visit-form');
const statusLine = document.querySelector('#visit-status');
form.hidden = false;

const { nom: nameField, telephone: phoneField, creneau: slotField } = form.elements;
for (const field of [nameField, phoneField, slotField]) {
  field.addEventListener('input', () => field.setCustomValidity(''));
}

const query = new URLSearchParams(location.search);
const ads = ['gclid', 'gbraid', 'wbraid'].some(key => query.has(key)) ||
  (query.get('utm_source')?.toLowerCase() === 'google' &&
   ['cpc', 'ppc', 'paid_search'].includes(query.get('utm_medium')?.toLowerCase()));
let lastHandoff;

function isValidSlot(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4}) à (\d{2}):(\d{2})$/.exec(value);
  if (!match) return false;
  const [day, month, year, hour, minute] = match.slice(1).map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day && hour < 24 && minute < 60;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const [nom, telephone, creneau] = [nameField, phoneField, slotField].map(
    field => field.value.trim().replace(/\s+/g, ' ')
  );
  nameField.setCustomValidity(nom ? '' : 'Veuillez saisir votre nom.');
  const phoneDigits = telephone.replace(/\D/g, '');
  const validPhone = /^\+?[\d ().-]+$/.test(telephone) && phoneDigits.length >= 7 && phoneDigits.length <= 15;
  phoneField.setCustomValidity(validPhone ? '' : 'Veuillez saisir un numéro de téléphone valide.');
  slotField.setCustomValidity(isValidSlot(creneau) ? '' : 'Indiquez une date et une heure valides au format JJ/MM/AAAA à HH:MM.');
  if (!form.reportValidity()) return;
  const signature = JSON.stringify([nom, telephone, creneau]);
  const isNew = lastHandoff?.signature !== signature;
  if (isNew) {
    const suffix = Array.from(crypto.getRandomValues(new Uint8Array(5)),
      byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
    lastHandoff = { signature, ref: `${ads ? 'SM-ADS' : 'SM'}-${suffix}` };
  }
  const { ref } = lastHandoff;
  const message = [
    'Bonjour Tecxodus, je souhaite visiter le bureau de 100 m² à Sidi Maârouf, face à Casanearshore, à 14 990 DH TTC par mois, parking privé inclus.',
    '',
    `Nom : ${nom}`, `Téléphone : ${telephone}`,
    `Créneau souhaité : ${creneau} (heure de Casablanca)`,
    '', `Référence : ${ref}`
  ].join('\n');
  const url = new URL('https://wa.me/212663449200');
  url.searchParams.set('text', message);
  if (isNew) {
    gtag('event', 'bureau_whatsapp_open', {
      listing: 'bureau_sidi_maarouf',
      handoff_ref: ref,
      traffic_group: ads ? 'google_ads' : 'autre',
      transport_type: 'beacon'
    });
  }
  statusLine.textContent = 'Vérifiez le récapitulatif dans WhatsApp, puis envoyez-le pour demander une visite.';
  location.assign(url.href);
});

const videoTrigger = document.querySelector('#video-trigger');
const videoViewer = document.querySelector('#video-viewer');
const video = videoViewer.querySelector('video');
if (typeof videoViewer.showModal === 'function') {
  videoTrigger.setAttribute('aria-haspopup', 'dialog');
  videoTrigger.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    videoViewer.showModal();
    video.play().catch(() => {});
  });
  videoViewer.addEventListener('click', event => {
    if (event.target === videoViewer) videoViewer.close();
  });
  videoViewer.addEventListener('close', () => {
    video.pause();
    videoTrigger.focus();
  });
}

const viewer = document.querySelector('#photo-viewer');
const fullPhoto = document.querySelector('#full-photo');
const caption = document.querySelector('#photo-caption');
let trigger;
if (typeof viewer.showModal === 'function') {
  for (const link of document.querySelectorAll('.photo')) {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      fullPhoto.src = link.href;
      fullPhoto.alt = link.querySelector('img').alt;
      caption.textContent = fullPhoto.alt + (link.closest('.simulated') ? ' · Simulation d’aménagement' : ' · État actuel');
      viewer.showModal();
    });
  }
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    fullPhoto.removeAttribute('src');
    trigger?.focus();
  });
}

'use strict';

// Use the site's existing GA4 property. A handoff is only an outbound intent.
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-YE0XFCRWNY');

const form = document.querySelector('#visit-form');
const statusLine = document.querySelector('#visit-status');
form.hidden = false;

const nameFields = [form.elements.nom, form.elements.activite];
for (const field of nameFields) {
  field.addEventListener('input', () => field.setCustomValidity(''));
}

const query = new URLSearchParams(location.search);
const ads = ['gclid', 'gbraid', 'wbraid'].some(key => query.has(key)) ||
  (query.get('utm_source')?.toLowerCase() === 'google' &&
   ['cpc', 'ppc', 'paid_search'].includes(query.get('utm_medium')?.toLowerCase()));
let lastHandoff;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  for (const field of nameFields) {
    field.setCustomValidity(field.value.trim() ? '' : 'Veuillez renseigner ce champ.');
  }
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const clean = key => String(data.get(key)).replace(/\s+/g, ' ').trim();
  const answers = ['nom', 'activite', 'stade', 'delai', 'budget'].map(clean);
  const signature = JSON.stringify(answers);
  const isNew = lastHandoff?.signature !== signature;
  if (isNew) {
    const suffix = Array.from(crypto.getRandomValues(new Uint8Array(5)),
      byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
    lastHandoff = { signature, ref: `${ads ? 'SM-ADS' : 'SM'}-${suffix}` };
  }
  const { ref } = lastHandoff;
  const [nom, activite, stade, delai, budget] = answers;
  const message = [
    'Bonjour Tecxodus, je souhaite visiter le bureau de 110 m² à Sidi Maârouf, près de Casanearshore.',
    '',
    `Nom : ${nom}`, `Activité : ${activite}`, `Stade du projet : ${stade}`,
    `Délai d’installation : ${delai}`, `Loyer de 16 500 DH TTC/mois dans mon budget : ${budget}`,
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

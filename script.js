const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdoKRRP5nyixiS4ZwIP64xX5YD3nCFBVdiMkxSTO4YY6SB2CA/viewform?usp=publish-editor';
const ASSET_LOCATION = 'Jorong Galo Gandang, Nagari Andaleh, Kecamatan Luak, Kabupaten Lima Puluh Kota, Provinsi Sumatera Barat.';
const portfolioDetails = {
  property: {
    eyebrow: 'PROPERTY & REAL ESTATE · 01', title: 'Bumi Shiddiqi Properti', image: 'assets/tanah-pariaman-selatan.jpg',
    paragraphs: [
      'Bumi Shiddiqi Properti berfokus pada identifikasi, perantaraan, perdagangan, dan pengembangan peluang aset properti.',
      'Kegiatan usaha mencakup jual-beli tanah dan bangunan, properti lelang, pencarian aset potensial, serta transaksi properti dengan pemeriksaan legalitas dan analisis risiko.'
    ],
    listTitle: 'Core Business', items: ['Property Brokerage', 'Asset Trading', 'Property Auctions', 'Land & Building Investment']
  },
  agriculture: {
    eyebrow: 'AGRICULTURE & COMMODITIES · 02', title: 'Tani Makmur Sejahtera', image: 'assets/lahan-02-10000m2.jpg',
    paragraphs: [
      'Dokumen menyebut unit ini sebagai Tani Makmur Sejahtera pada judul, sementara uraian menyebut Tani Makmur Bersama. Nama resmi perlu dipastikan sebelum publikasi final.',
      'Uraian sumber menyebut pengelolaan lahan pertanian, produksi komoditas pangan, dan perdagangan hasil pertanian. Komoditas potensial meliputi padi, jagung, cabai, dan produk pertanian lainnya. Usaha juga diarahkan pada pembelian hasil panen petani, pengepulan, dan distribusi kepada pedagang besar maupun pembeli industri.'
    ],
    listTitle: 'Core Business', items: ['Farmland Management', 'Crop Production', 'Agricultural Trading', 'Commodity Distribution']
  },
  livestock: {
    eyebrow: 'LIVESTOCK & TRADING · 03', title: 'Shiddiqi Ternak Nusantara', image: 'assets/lahan-03-3100m2.jpg',
    paragraphs: [
      'Dokumen memakai nama Shiddiqi Ternak Nusantara pada judul, sementara uraian menyebut Sumber Ternak Nusantara. Nomenklatur final perlu dikonfirmasi.',
      'Uraian sumber berfokus pada pengelolaan dan pengembangan usaha peternakan melalui kepemilikan atau pengelolaan ternak, perdagangan ternak, penggemukan, serta pengembangan jaringan pemasok dan pembeli.'
    ],
    listTitle: 'Core Business', items: ['Livestock Management', 'Animal Trading', 'Fattening Operations', 'Supply & Distribution Networks']
  },
  law: {
    eyebrow: 'LEGAL SERVICES & ACCESS TO JUSTICE · 04', title: 'JS Law (Jimmy Shiddiqi Law)', image: 'assets/azhim-tsaqib-shiddiqi.jpg',
    paragraphs: [
      'JS Law berfokus pada penyediaan layanan bantuan dan konsultasi hukum secara gratis bagi masyarakat yang membutuhkan, dengan mengedepankan integritas, profesionalitas, dan kepedulian sosial.',
      'Layanan diarahkan pada konsultasi hukum awal, edukasi dan penyuluhan hukum, pendampingan informasi terkait permasalahan hukum, serta fasilitasi akses terhadap layanan bantuan hukum yang sesuai kebutuhan. Pelaksanaan memperhatikan peraturan perundang-undangan, kompetensi pemberi layanan, kerahasiaan informasi, dan prinsip keadilan.',
      'Komitmen layanan mengikuti kapasitas yang tersedia. Informasi ini bukan pengganti pendapat hukum profesional untuk perkara tertentu.'
    ],
    listTitle: 'Core Business', items: ['Free Legal Consultation', 'Legal Aid Facilitation', 'Legal Education', 'Community Legal Outreach', 'Access to Justice']
  }
};
const farmAssets = [
  {id:1, title:'Bidang 01', area:3100, areaLabel:'± 3.100 m²', perimeter:'± 240 m', image:'assets/lahan-01-3100m2.jpg', padi:'Rp7,4–13 juta', jagung:'Rp6,8–14,1 juta', cabai:'Rp37,2–167,4 juta', note:'Padi (gabah), jagung (kering), dan cabai merah keriting. Data omzet sesuai dokumen.'},
  {id:2, title:'Bidang 02', area:10000, areaLabel:'10.000 m²', perimeter:'500 m', image:'assets/lahan-02-10000m2.jpg', padi:'Rp27,2–40,8 juta', jagung:'Rp22–44,7 juta', cabai:'Rp120–420 juta', note:'Rentang omzet yang tercantum dalam dokumen untuk komoditas padi, jagung, dan cabai.'},
  {id:3, title:'Bidang 03', area:3100, areaLabel:'± 3.100 m²', perimeter:'240 m', image:'assets/lahan-03-3100m2.jpg', padi:'Rp7,4–13 juta', jagung:'Rp6,8–14,1 juta', cabai:'Rp37,2–167,4 juta', note:'Entri bidang dan estimasi omzet kedua yang serupa di dokumen; ditampilkan sebagai entri terpisah sesuai sumber.'},
  {id:4, title:'Bidang 04', area:4225, areaLabel:'4.225 m²', perimeter:'260 m', image:'assets/lahan-04-4225m2.jpg', padi:'Rp12–20 juta', jagung:'Rp10–20 juta', cabai:'Rp40–120 juta', note:'Rentang omzet yang tercantum dalam dokumen untuk komoditas padi, jagung, dan cabai.'},
  {id:5, title:'Bidang 05', area:3000, areaLabel:'2.500–3.500 m²', perimeter:'260 m', image:'assets/lahan-05-2500-3500m2.jpg', padi:'Rp7–15 juta', jagung:'Rp6–15 juta', cabai:'Rp25–100 juta', note:'Luas ditulis sebagai rentang 2.500–3.500 m² dalam dokumen. Nilai area 3.000 m² hanya dipakai untuk pengelompokan filter.'},
  {id:6, title:'Bidang 06', area:1950, areaLabel:'± 1.950 m²', perimeter:'± 180 m', image:'assets/lahan-06-1950m2.jpg', padi:'Rp4,68–8,78 juta', jagung:'Rp3,90–9,56 juta', cabai:'Rp23,40–117 juta', note:'Rentang omzet yang tercantum dalam dokumen untuk komoditas padi, jagung, dan cabai.'}
];
const assetImgAlt = 'Gambar bidang lahan dari dokumen Shiddiqi Group';
const farmGrid = document.getElementById('farmGrid');
const modal = document.getElementById('detailModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalBody = document.getElementById('modalBody');
const modalContact = document.getElementById('modalContact');
let previousFocus = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function renderFarmCards(filter = 'all') {
  const filtered = farmAssets.filter(asset => filter === 'all' || (filter === 'small' ? asset.area <= 3500 : asset.area > 3500));
  farmGrid.innerHTML = filtered.map(asset => `
    <button class="farm-card" type="button" data-farm-id="${asset.id}" aria-label="Buka detail ${escapeHtml(asset.title)}">
      <div class="farm-card-image"><img src="${asset.image}" alt="${assetImgAlt} — ${escapeHtml(asset.title)}" loading="lazy"><span class="farm-photo-label">FARM ASSET / ${String(asset.id).padStart(2,'0')}</span><span class="farm-area-label">${escapeHtml(asset.areaLabel)}</span><span class="farm-card-arrow">↗</span></div>
      <div class="farm-card-body"><div class="farm-card-top"><h3>${escapeHtml(asset.title)}</h3><span>${escapeHtml(asset.perimeter)}</span></div><p class="farm-location">${escapeHtml(ASSET_LOCATION)}</p>
      <div class="farm-income-preview"><div><small>PADI / GABAH</small><b>${escapeHtml(asset.padi)}</b></div><div><small>JAGUNG / KERING</small><b>${escapeHtml(asset.jagung)}</b></div><div><small>CABAI</small><b>${escapeHtml(asset.cabai)}</b></div></div>
      <span class="farm-card-link"><span>Lihat rincian bidang</span><span>DETAIL +</span></span></div>
    </button>`).join('');
  farmGrid.querySelectorAll('[data-farm-id]').forEach(card => card.addEventListener('click', () => openFarmDetail(Number(card.dataset.farmId), card)));
}
function openModal({image, eyebrow, title, body}, opener) {
  previousFocus = opener || document.activeElement;
  modalImage.innerHTML = image ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(title)}">` : '';
  modalEyebrow.textContent = eyebrow || 'DETAIL INFORMATION';
  modalTitle.textContent = title || '';
  modalBody.innerHTML = body || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  document.getElementById('modalClose').focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
}
function openPortfolioDetail(key, opener) {
  const data = portfolioDetails[key];
  if (!data) return;
  const body = `${data.paragraphs.map(text => `<p>${escapeHtml(text)}</p>`).join('')}<h3>${escapeHtml(data.listTitle)}</h3><ul>${data.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  openModal({image:data.image, eyebrow:data.eyebrow, title:data.title, body}, opener);
}
function openFarmDetail(id, opener) {
  const asset = farmAssets.find(item => item.id === id);
  if (!asset) return;
  const body = `<p>${escapeHtml(asset.note)}</p><div class="modal-metrics"><div><small>LUAS</small><b>${escapeHtml(asset.areaLabel)}</b></div><div><small>KELILING</small><b>${escapeHtml(asset.perimeter)}</b></div><div><small>LOKASI</small><b>Luak, Sumbar</b></div></div><h3>Estimasi omzet dalam dokumen</h3><ul><li>Padi (gabah): <b>${escapeHtml(asset.padi)}</b></li><li>Jagung (kering): <b>${escapeHtml(asset.jagung)}</b></li><li>Cabai merah keriting: <b>${escapeHtml(asset.cabai)}</b></li></ul><p>${escapeHtml(ASSET_LOCATION)}</p><p class="modal-caption">Gambar bidang diambil dari dokumen yang diberikan. Data luas, keliling, dan omzet belum diverifikasi secara independen.</p>`;
  openModal({image:asset.image, eyebrow:`FARM ASSET / ${String(asset.id).padStart(2,'0')}`, title:asset.title, body}, opener);
}

renderFarmCards();
document.querySelectorAll('[data-detail]').forEach(card => card.addEventListener('click', () => openPortfolioDetail(card.dataset.detail, card)));
document.querySelectorAll('.filter-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.filter-tab').forEach(item => {item.classList.remove('active');item.setAttribute('aria-pressed','false');});
  tab.classList.add('active');tab.setAttribute('aria-pressed','true');renderFarmCards(tab.dataset.filter);
}));

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if(event.target === modal) closeModal(); });
modalContact.addEventListener('click', () => closeModal());
document.addEventListener('keydown', event => {
  if(event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  if(event.key === 'Tab' && modal.classList.contains('open')) {
    const focusable = [...modal.querySelectorAll('button,a[href]')].filter(el => !el.disabled && el.offsetParent !== null);
    if(!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if(event.shiftKey && document.activeElement === first){event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement === last){event.preventDefault();first.focus();}
  }
});

const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
function closeMenu(){mainNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Buka menu');}
menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Tutup menu':'Buka menu');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.getElementById('currentYear').textContent = new Date().getFullYear();

const progress = document.getElementById('scrollProgress');
function updateScrollProgress(){const max = document.documentElement.scrollHeight - window.innerHeight;progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;}
window.addEventListener('scroll', updateScrollProgress, {passive:true});updateScrollProgress();

// Reveal sections progressively, without hiding page content when JavaScript is unavailable.
const revealTargets = document.querySelectorAll('.principle, .portfolio-card, .model-canvas, .farm-card, .property-feature, .comp-card, .leader-layout, .commitment-copy, .form-panel');
revealTargets.forEach(el => el.classList.add('reveal'));
if('IntersectionObserver' in window){
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
  }),{threshold:0.08,rootMargin:'0px 0px -24px 0px'});
  revealTargets.forEach(el => revealObserver.observe(el));
}else revealTargets.forEach(el => el.classList.add('is-visible'));

// If the embedded Google Form blocks third-party embedding in a browser, the visible fallback link still opens it directly.
const inquiryLinks = document.querySelectorAll('a[href*="docs.google.com/forms"]');
inquiryLinks.forEach(link => {link.addEventListener('click', () => { /* intentional direct navigation to the supplied Google Form */ });});

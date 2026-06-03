/**
 * main.js — LHP LKPD TA 2025
 * Data entitas, render kartu, inisialisasi Swiper, mobile menu
 */

// =============================================
// DATA ENTITAS
// Ganti nilai `img` dengan path lokal setelah
// gambar asli tersedia di assets/img/
// Contoh: img: 'assets/img/badung.webp'
// =============================================
const entitasList = [
  {
    id: 1,
    name: 'Pemerintah Provinsi Bali',
    type: 'Pemerintah Provinsi',
    img: null, // ganti: 'assets/img/pemprov-bali.webp'
    icon: 'fa-solid fa-building-columns',
  },
  {
    id: 2,
    name: 'Pemerintah Kota Denpasar',
    type: 'Pemerintah Kota',
    img: null,
    icon: 'fa-solid fa-city',
  },
  {
    id: 3,
    name: 'Pemerintah Kabupaten Badung',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 4,
    name: 'Pemerintah Kabupaten Gianyar',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 5,
    name: 'Pemerintah Kabupaten Buleleng',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 6,
    name: 'Pemerintah Kabupaten Tabanan',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 7,
    name: 'Pemerintah Kabupaten Jembrana',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 8,
    name: 'Pemerintah Kabupaten Klungkung',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 9,
    name: 'Pemerintah Kabupaten Bangli',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
  {
    id: 10,
    name: 'Pemerintah Kabupaten Karangasem',
    type: 'Pemerintah Kabupaten',
    img: null,
    icon: 'fa-solid fa-building',
  },
];

// =============================================
// RENDER KARTU ENTITAS KE SWIPER
// =============================================
function renderEntityCards() {
  const wrapper = document.getElementById('swiper-wrapper');
  if (!wrapper) return;

  const slides = entitasList.map((entity) => {
    const imgContent = entity.img
      ? `<img src="${entity.img}" alt="Foto ${entity.name}" width="400" height="225" loading="lazy" />`
      : `<div class="entity-card__img-placeholder"><i class="${entity.icon}"></i></div>`;

    return `
      <div class="swiper-slide">
        <div class="entity-card">
          <div class="entity-card__img-wrapper">
            ${imgContent}
          </div>
          <div class="entity-card__body">
            <span class="entity-card__tag">LHP LKPD TA 2025</span>
            <p class="entity-card__name">${entity.name}</p>
            <p class="entity-card__type">${entity.type}</p>
            <a href="https://bali-ppid.bpk.go.id/" target="_blank" rel="noopener noreferrer"
               class="entity-card__link">
              Akses Laporan <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  });

  wrapper.innerHTML = slides.join('');
}

// =============================================
// INISIALISASI SWIPER
// =============================================
function initSwiper() {
  return new Swiper('.entitas-swiper', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    breakpoints: {
      540: { slidesPerView: 2.15, spaceBetween: 20 },
      768: { slidesPerView: 3,    spaceBetween: 24 },
      1024: { slidesPerView: 4,   spaceBetween: 24 },
    },
    a11y: {
      prevSlideMessage: 'Slide sebelumnya',
      nextSlideMessage: 'Slide berikutnya',
    },
  });
}

// =============================================
// MOBILE HAMBURGER MENU
// =============================================
function initMobileMenu() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  const menuEntitasLink = document.getElementById('mobile-menu-entitas');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
      menu.classList.add('hidden');
      icon.className = 'fa-solid fa-bars text-lg';
      btn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.remove('hidden');
      icon.className = 'fa-solid fa-xmark text-lg';
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Tutup menu saat link di mobile diklik
  if (menuEntitasLink) {
    menuEntitasLink.addEventListener('click', () => {
      menu.classList.add('hidden');
      icon.className = 'fa-solid fa-bars text-lg';
      btn.setAttribute('aria-expanded', 'false');
    });
  }
}

// =============================================
// INIT SEMUA
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderEntityCards();
  initSwiper();
  initMobileMenu();
});

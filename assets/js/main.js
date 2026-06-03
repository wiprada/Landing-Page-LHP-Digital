/**
 * main.js — LHP LKPD TA 2025
 * Data entitas, render kartu, inisialisasi Swiper, mobile menu
 */

// =============================================
// DATA ENTITAS
// =============================================
const entitasList = [
  {
    id: 1,
    name: 'Pemerintah Provinsi Bali',
    type: 'Pemerintah Provinsi',
    img: 'assets/img/bali.webp',
    icon: 'fa-solid fa-building-columns',
  },
  {
    id: 2,
    name: 'Pemerintah Kota Denpasar',
    type: 'Pemerintah Kota',
    img: 'assets/img/denpasar.webp',
    icon: 'fa-solid fa-city',
  },
  {
    id: 3,
    name: 'Pemerintah Kabupaten Badung',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/badung.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 4,
    name: 'Pemerintah Kabupaten Gianyar',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/gianyar.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 5,
    name: 'Pemerintah Kabupaten Buleleng',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/buleleng.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 6,
    name: 'Pemerintah Kabupaten Tabanan',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/tabanan.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 7,
    name: 'Pemerintah Kabupaten Jembrana',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/jembrana.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 8,
    name: 'Pemerintah Kabupaten Klungkung',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/klungkung.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 9,
    name: 'Pemerintah Kabupaten Bangli',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/bangli.webp',
    icon: 'fa-solid fa-building',
  },
  {
    id: 10,
    name: 'Pemerintah Kabupaten Karangasem',
    type: 'Pemerintah Kabupaten',
    img: 'assets/img/karangasem.webp',
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
      : `<div class="entity-card__img-placeholder" aria-hidden="true"><i class="${entity.icon}"></i></div>`;

    return `
      <div class="swiper-slide">
        <div class="entity-card">
          <div class="entity-card__img-wrapper">
            ${imgContent}
          </div>
          <div class="entity-card__body">
            <span class="entity-card__tag" aria-hidden="true">LHP LKPD TA 2025</span>
            <p class="entity-card__name">${entity.name}</p>
            <p class="entity-card__type">${entity.type}</p>
            <a href="https://bali-ppid.bpk.go.id/" target="_blank" rel="noopener noreferrer"
               class="entity-card__link" aria-label="Akses laporan ${entity.name} di PPID BPK">
              Akses Laporan <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
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

  // AOS — Animate On Scroll
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,        // animasi hanya dijalankan sekali
      offset: 60,        // mulai animasi 60px sebelum elemen terlihat
      easing: 'ease-out-cubic',
    });
  }
});

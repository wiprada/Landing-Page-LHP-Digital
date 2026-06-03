# Rencana Pengembangan Bertahap: Landing Page LHP LKPD TA 2025

> Dirancang untuk pengembangan di lokal (VS Code) dengan fokus pada **performa**, **struktur mobile-first**, dan **skalabilitas**.

---

## Status Keseluruhan

| Tahap | Nama | Status |
|-------|------|--------|
| 1 | Persiapan Lingkungan Lokal | ✅ Selesai |
| 2 | Penyempurnaan Aset & Konten | ✅ Selesai |
| 3 | Optimasi Mobile-First & UI/UX | ✅ Selesai |
| 4 | Interaktivitas Lanjutan & Aksesibilitas | ⬜ Belum Dimulai |
| 5 | Persiapan Deployment | ⬜ Belum Dimulai |

> Legend: ⬜ Belum Dimulai · 🔄 Sedang Dikerjakan · ✅ Selesai

---

## Tahap 1 — Persiapan Lingkungan Lokal (Setup & Strukturisasi)

> **Fokus:** Memindahkan proyek ke lingkungan lokal dan mengatur struktur folder yang baik.

### 1.1 Inisialisasi Proyek
- [x] Buat folder proyek baru di lokal (`e:\Landing Page LHP Digital`)
- [x] Buka folder tersebut di VS Code
- [x] Inisialisasi Git: `git init`

### 1.2 Struktur Folder Standar

Buat struktur folder berikut untuk memisahkan HTML, CSS, JavaScript, dan aset gambar:

```
lhp-lkpd-2025/
├── index.html            ← File utama
├── assets/
│   ├── css/
│   │   └── style.css     ← CSS kustom dari tag <style>
│   ├── js/
│   │   └── main.js       ← JS, data entitas, & inisialisasi Swiper
│   └── img/              ← Folder gambar kantor pemda asli
└── README.md
```

- [x] Buat semua folder di atas

### 1.3 Refactoring `index.html`
- [x] Pindahkan CSS kustom dari `<style>` ke `assets/css/style.css`
  ```html
  <link rel="stylesheet" href="assets/css/style.css">
  ```
- [x] Pindahkan JavaScript (`entitasList`, inisialisasi Swiper, smooth scroll) ke `assets/js/main.js`
  ```html
  <script src="assets/js/main.js"></script>
  ```

### 1.4 Migrasi Tailwind — CDN → NPM/CLI

> **Mengapa?** CDN tidak disarankan untuk produksi. Tailwind via npm mengaktifkan *purging* CSS yang tidak terpakai → file lebih kecil, load lebih cepat.

- [x] Install Tailwind: `npm install -D tailwindcss@3`
- [x] Inisialisasi config: `tailwind.config.js` dibuat manual
- [x] Konfigurasi tema *spring green* ada di `tailwind.config.js`
- [x] Buat `src/input.css` dan tambahkan direktif:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- [x] Watcher: `npm run dev` (`npx tailwindcss -i ./src/input.css -o ./assets/css/tailwind.css --watch`)
- [x] Ganti CDN script dengan link lokal di `index.html`:
  ```html
  <link rel="stylesheet" href="assets/css/tailwind.css">
  ```

---

## Tahap 2 — Penyempurnaan Aset & Konten

> **Fokus:** Mengganti placeholder dengan aset nyata dan memastikan kualitas visual.

### 2.1 Pengumpulan & Optimasi Gambar
- [x] Kumpulkan foto asli/resmi gedung/kantor untuk ke-10 entitas:
  - Pemprov Bali, Kota Denpasar, dan 8 Kabupaten
- [x] Kompres gambar ke format `.webp` (performa terbaik di web mobile)
- [x] Simpan semua gambar di `assets/img/` (10 file: bali, denpasar, badung, gianyar, buleleng, tabanan, jembrana, klungkung, bangli, karangasem)

### 2.2 Pembaruan Data Entitas (`main.js`)
- [x] Perbarui array `entitasList` — semua path gambar lokal sudah terhubung:
  ```js
  img: 'assets/img/badung.webp'
  ```

### 2.3 Tinjau Ulang Tipografi & Ikon
- [x] Font `Inter` dimuat via Google Fonts dengan `preconnect` + fallback `system-ui`
- [x] Font Awesome 6.5.2 terpasang via CDN dengan SRI integrity hash

---

## Tahap 3 — Optimasi Mobile-First & UI/UX Lanjutan

> **Fokus:** Memastikan pengalaman pengguna di perangkat seluler (smartphone) sempurna.

### 3.1 Navigasi Mobile (Hamburger Menu)
- [x] Tombol hamburger sudah ada untuk layar kecil
- [x] Off-canvas dropdown menu dengan Tailwind + JavaScript (buka/tutup) — `initMobileMenu()` di `main.js`

### 3.2 Uji Touch Target
- [x] Hamburger button diperbesar ke `w-11 h-11` (44×44 px)
- [x] Hero CTA button ditambahkan `min-h-[44px]`
- [x] Mobile menu links ditambahkan `min-h-[44px]`
- [x] Swiper nav buttons sudah `w-11 h-11` (44×44 px)
- [x] *(Swiper.js sudah menangani gestur swipe di mobile)*

### 3.3 Viewport & Overflow Audit
- [x] `overflow-x: clip` ditambahkan pada `#entitas` untuk mencegah horizontal scroll dari Swiper `overflow: visible`
- [x] `max-width: 100vw; overflow-x: hidden` pada `body, html`
- [ ] Uji manual di DevTools: iPhone SE, iPhone Pro Max, Samsung Galaxy

### 3.4 Optimasi Loading (LCP & CLS)
- [x] `loading="lazy"` pada semua gambar slide carousel Swiper
- [x] `width="400" height="225"` (rasio 16:9) pada gambar untuk mencegah CLS

---

## Tahap 4 — Interaktivitas Lanjutan & Aksesibilitas

> **Fokus:** Membuat halaman lebih dinamis dan dapat diakses oleh semua pengguna.

### 4.1 Animasi Scroll *(Opsional)*
- [ ] Pertimbangkan library ringan **AOS (Animate On Scroll)** untuk efek fade-in/slide-up pada elemen utama (kotak alert PPID, header)

### 4.2 Peningkatan SEO
- [ ] Perbarui meta tag di `<head>`:
  - Deskripsi akurat
  - Keywords
  
- [ ] Pastikan semua gambar memiliki atribut `alt` yang deskriptif
  - Contoh: `alt="Foto Gedung Kantor Bupati Badung"`
- [ ] Pastikan struktur heading (`H1` → `H2` → `H3`) semantis dan teratur

### 4.3 Audit Aksesibilitas (a11y)
- [ ] Periksa kontras warna teks vs latar belakang (khususnya *spring green* di latar terang)
- [ ] Pastikan navigasi keyboard berfungsi — elemen carousel dan tombol CTA dapat dijangkau dengan `Tab`

---

## Tahap 5 — Persiapan Deployment (Rilis)

> **Fokus:** Mengemas aplikasi untuk dipublikasikan ke server.

### 5.1 Build untuk Production
- [ ] Jalankan Tailwind build dengan minifikasi:
  ```bash
  npx tailwindcss -i ./src/input.css -o ./assets/css/tailwind.css --minify
  ```

### 5.2 Hosting
- [ ] Siapkan server tujuan:
  - Server instansi BPK/Pemda setempat, **atau**
  - Static hosting: Vercel, Netlify, atau GitHub Pages *(untuk staging)*

### 5.3 Pengujian Final
- [ ] Uji semua tautan, terutama: https://bali-ppid.bpk.go.id/
- [ ] *Cross-browser testing* di Chrome, Safari, dan Firefox — desktop & mobile

# Shiddiqi Group — Advanced Website

Website profil interaktif berdasarkan isi **Shiddiqi Business Model or info.docx** yang Anda unggah. Berkas foto dan gambar bidang lahan dari dokumen telah diekstrak dan disertakan di folder `assets/`.

## Isi paket
- `index.html` — satu halaman website dengan bagian About Us, Business Portfolio, Business Model, Vision & Mission, Farm Assets, Property, Leadership, Commitment, serta Contact Us.
- `style.css` — desain responsif desktop/tablet/ponsel, tipografi, ilustrasi grafis, motion/reveal, modal dan layout.
- `script.js` — kartu bisnis yang dapat ditekan untuk membuka detail, kartu farm assets interaktif, filter luas lahan, modal yang dapat ditutup, menu mobile, indikator progres scroll, dan tahun footer otomatis.
- `assets/` — 8 gambar yang diekstrak dari dokumen Word: foto pimpinan, enam peta/citra bidang lahan, dan foto tanah kosong.

## Menjalankan secara lokal
1. Unduh dan ekstrak `Shiddiqi_Group_Advanced_Website.zip`.
2. Pastikan folder `assets` berada satu tingkat dengan `index.html`, `style.css`, dan `script.js`.
3. Buka `index.html` di browser modern. Untuk hasil paling konsisten, jalankan dengan server lokal atau hosting statis.

## Google Forms
Form resmi yang diberikan terpasang sebagai iframe pada bagian Contact Us dan sebagai tautan tombol cadangan:
`https://docs.google.com/forms/d/e/1FAIpQLSdoKRRP5nyixiS4ZwIP64xX5YD3nCFBVdiMkxSTO4YY6SB2CA/viewform?usp=publish-editor`

Jika iframe gagal ditampilkan karena batasan peramban/jaringan/izin Google, gunakan tombol **Buka form** yang tersedia di halaman.

## Sebelum dipublikasikan
- Konten sektor bisnis mengikuti dokumen yang diberikan. Dokumen menggunakan nama **Tani Makmur Sejahtera** pada judul tetapi **Tani Makmur Bersama** di deskripsi; dokumen juga menggunakan **Shiddiqi Ternak Nusantara** pada judul tetapi **Sumber Ternak Nusantara** di deskripsi. Perbedaan tersebut ditandai dan sebaiknya dikonfirmasi.
- Data luas, keliling, dan rentang omzet lahan serta detail tanah Pariaman berasal dari dokumen pengguna dan belum diverifikasi secara independen. Omzet bukan laba bersih.
- Pembanding harga tanah adalah harga penawaran listing dan bukan nilai transaksi final atau penilaian profesional.
- Kontak email, WhatsApp, lokasi kantor, Instagram, dan LinkedIn di website berasal dari dokumen yang diberikan. Pastikan informasi masih benar dan memang siap dipublikasikan.
- Google Forms mengelola dan menerima kiriman secara langsung; website tidak menyimpan jawaban pengunjung pada database sendiri.

## Teknologi
HTML, CSS, dan JavaScript vanilla tanpa proses build. Google Fonts membutuhkan koneksi internet; fallback font tersedia.

## Bahasa / Language
Website ini dilengkapi tombol **EN** di header untuk mengaktifkan terjemahan bahasa Inggris bagi label dan teks antarmuka yang tersedia. Tekan **ID** untuk kembali ke bahasa Indonesia. Nama resmi, data angka, dan istilah usaha tertentu dipertahankan sesuai sumber.

The website includes an **EN** toggle in the header for the English interface translation available in `language.js`. Press **ID** to switch back to Indonesian. Official names, figures, and selected business terms remain as provided in the source material.

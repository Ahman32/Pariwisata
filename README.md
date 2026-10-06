# JelajahNusantara - Web Pariwisata

Website pariwisata full-stack menggunakan **Node.js + Express** untuk backend dan **React.js + Vite** untuk frontend.

## Fitur

- Landing page modern dan responsif.
- Daftar destinasi wisata unggulan Indonesia.
- Paket perjalanan dengan harga dan fasilitas.
- Testimoni pelanggan.
- Formulir kontak yang terhubung ke API backend.
- API JSON sederhana untuk destinasi, paket wisata, testimoni, dan kontak.

## Prasyarat

- Node.js 18 atau lebih baru
- npm

## Instalasi

Jalankan dari direktori root proyek:

```bash
npm run install:all
```

## Menjalankan Aplikasi

Jalankan frontend dan backend sekaligus:

```bash
npm run dev
```

Aplikasi akan berjalan di:

- Frontend: <http://localhost:5173>
- Backend API: <http://localhost:5000/api>

Anda juga bisa menjalankan secara terpisah:

```bash
npm run server
npm run client
```

## Build Frontend

```bash
npm run build
```

## Endpoint API

| Method | Endpoint | Deskripsi |
| --- | --- | --- |
| GET | `/api/health` | Mengecek status backend |
| GET | `/api/destinations` | Mengambil semua destinasi wisata |
| GET | `/api/destinations/:id` | Mengambil detail destinasi berdasarkan ID |
| GET | `/api/packages` | Mengambil paket wisata |
| GET | `/api/testimonials` | Mengambil testimoni pelanggan |
| POST | `/api/contact` | Mengirim pesan kontak |

Contoh body untuk `POST /api/contact`:

```json
{
  "name": "Rani",
  "email": "rani@example.com",
  "phone": "081234567890",
  "message": "Saya tertarik dengan paket Bali 4 hari 3 malam."
}
```

## Struktur Proyek

```text
.
├── server/   # Backend Node.js + Express
└── client/   # Frontend React.js + Vite
```

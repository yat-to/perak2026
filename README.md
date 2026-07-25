# PERAK2026 Frontend

Frontend **PERAK2026** dibangun menggunakan **Next.js** sebagai framework React untuk menyediakan antarmuka pengguna (User Interface) yang modern, responsif, dan memiliki performa tinggi.

Aplikasi ini berfungsi sebagai client yang berkomunikasi dengan layanan **Backend FastAPI** melalui REST API. Seluruh proses autentikasi, pengelolaan data, dan proses bisnis dilakukan melalui endpoint API yang disediakan oleh backend.

## Technology Stack

- Next.js
- React
- TypeScript
- Bootstrap
- Axios
- Redux Toolkit
- React Hook Form
- ESLint

## System Requirements

Pastikan perangkat telah terpasang:

- Node.js 20.x atau versi terbaru
- npm 10.x atau versi terbaru

## Installation

Clone repository:

```bash
git clone https://github.com/username/perak2026-frontend.git
```

Masuk ke direktori project:

```bash
cd perak2026-frontend
```

Install seluruh dependency:

```bash
npm install
```

## Environment Configuration

Buat file `.env.local` pada root project.

Contoh konfigurasi:

```env
NEXT_PUBLIC_APP_NAME=PERAK2026
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Sesuaikan nilai `NEXT_PUBLIC_API_URL` dengan alamat Backend FastAPI yang digunakan.

## Running Development

Menjalankan aplikasi dalam mode development:

```bash
npm run dev
```

Aplikasi akan tersedia pada:

```
http://localhost:3000
```

## Build Production

Build aplikasi:

```bash
npm run build
```

Menjalankan hasil build:

```bash
npm run start
```

## Project Structure

```
src/
├── app/                # App Router
├── components/         # Reusable Components
├── layouts/            # Layout
├── services/           # API Services
├── store/              # Redux Toolkit
├── hooks/              # Custom Hooks
├── utils/              # Utility Functions
├── types/              # TypeScript Types
├── assets/             # Images & Static Assets
├── styles/             # Global Styles
└── middleware.ts       # Middleware
```

## Features

- Modern User Interface
- Responsive Layout
- Authentication
- Authorization
- REST API Integration
- State Management menggunakan Redux Toolkit
- Modular Component Architecture
- Environment Configuration
- TypeScript Support

## Backend Integration

Frontend PERAK2026 terhubung dengan layanan Backend berbasis **FastAPI** melalui REST API.

Contoh konfigurasi endpoint:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Seluruh komunikasi data dilakukan melalui endpoint API menggunakan protokol HTTP/HTTPS.

## Development Guidelines

- Menggunakan TypeScript untuk meningkatkan kualitas kode.
- Menggunakan Redux Toolkit sebagai state management.
- Memisahkan business logic dari komponen UI.
- Menggunakan reusable component untuk memudahkan pemeliharaan aplikasi.
- Menggunakan Environment Variables untuk seluruh konfigurasi yang bersifat dinamis.
- Mengikuti standar penulisan kode (ESLint).

## License

Copyright © 2026 PERAK2026.

Seluruh hak cipta dilindungi. Penggunaan, modifikasi, dan distribusi aplikasi ini mengikuti ketentuan lisensi yang berlaku pada proyek ini.
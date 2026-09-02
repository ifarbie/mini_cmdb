# Development Guide

Panduan untuk menjalankan project **Mini CMDB** dalam environment development.

## 1. Install Frontend Dependencies

Masuk ke folder `frontend`:

```bash
cd frontend
```

Kemudian install dependencies:

```bash
npm install
```

## 2. Setup Environment Variables

Siapkan environment variables yang dibutuhkan oleh frontend dan backend.

Gunakan file `.env.example` sebagai referensi untuk mengetahui environment variables yang diperlukan.

Buat file `.env` pada folder yang sesuai, kemudian isi nilainya berdasarkan konfigurasi environment development.

> Jangan commit file `.env` ke repository jika file tersebut berisi informasi sensitif.

## 3. Setup Database

Sebelum menjalankan backend, database harus sudah tersedia.

Pastikan MySQL sudah berjalan, kemudian buat schema/database dengan menjalankan file:

```text
database.sql
```

File tersebut berisi SQL yang diperlukan untuk membuat database dan tabel yang digunakan oleh project.

Setelah database berhasil dibuat, pastikan konfigurasi database pada environment variables backend sudah sesuai dengan database yang telah dibuat.

## 4. Run Development Environment

Setelah frontend dependencies, environment variables, dan database selesai disiapkan, development environment dapat dijalankan.

Kembali ke folder utama project:

```bash
cd ..
```

Pastikan posisi terminal berada di folder utama `mini_cmdb`:

```text
mini_cmdb/
├── backend/
├── frontend/
├── database.sql
├── package.json
└── ...
```

Kemudian jalankan:

```bash
npm run dev
```

Command tersebut akan menjalankan frontend dan backend secara bersamaan.

## Development Flow

Secara keseluruhan, proses setup pertama kali adalah:

```text
1. Clone repository
       ↓
2. npm install di folder frontend
       ↓
3. Setup environment variables
       ↓
4. Jalankan database.sql
       ↓
5. Pastikan konfigurasi database sesuai
       ↓
6. Kembali ke folder utama mini_cmdb
       ↓
7. npm run dev
       ↓
8. Mulai development
```

## Quick Start

Jika semua prerequisite sudah tersedia, langkah utamanya:

```bash
cd frontend
npm install

# Setup .env berdasarkan .env.example
# Setup database menggunakan database.sql

cd ..
npm run dev
```

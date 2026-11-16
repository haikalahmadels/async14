# Student Management

Tugas **Asynchronous 14: Frontend Individual Challenge, React UI Implementation Practice** (Modul Frontend Development).

Halaman sederhana untuk menampilkan data mahasiswa memakai ReactJS. Tugas ini melatih React Hooks (`useState` dan `useEffect`) serta looping data dengan `.map()`. Aplikasi tidak memakai backend atau database: semua data mahasiswa adalah data dummy yang disimpan di state React.

## Ketentuan dan Implementasi

### 1. Menampilkan data mahasiswa dengan `useState` dan `.map()`

Tabel berisi kolom NIM, Nama Mahasiswa, No. HP, Email, Alamat, Program Studi, dan Tahun Masuk.

- 5 data mahasiswa disusun sebagai array of objects (`initialStudents` di `src/App.jsx`).
- Data disimpan di state: `const [students] = useState(initialStudents)`.
- Setiap baris tabel dibuat dengan `students.map(...)`, satu baris untuk satu mahasiswa.
- Setiap baris memakai key unik, yaitu NIM: `key={s.nim}`.
- Jumlah mahasiswa dihitung dari `students.length`, tidak ditulis manual.

### 2. Jam digital dengan `useEffect` (`src/Clock.jsx`)

- Waktu saat ini disimpan di `useState`.
- `useEffect` menjalankan `setInterval()` yang memperbarui waktu setiap 1 detik.
- Fungsi cleanup memanggil `clearInterval()` saat komponen di-unmount, sehingga interval tidak menumpuk.
- Jam dibuat sebagai komponen terpisah, jadi yang di-render ulang setiap detik hanya jam, bukan seluruh tabel.

### 3. Tampilan UI

Urutan isi halaman:

1. Header: **Student Management**
2. Subheader: **Daftar Data Mahasiswa**
3. Jumlah mahasiswa
4. Jam digital yang diperbarui setiap detik
5. Tabel data mahasiswa

Styling memakai Vanilla CSS:

- Tema gelap sebagai default, dengan tombol untuk beralih ke tema terang. Pilihan tema disimpan di `localStorage`.
- Gaya Swiss Grid: tanpa kartu, hierarki dibangun dari ukuran huruf, grid, dan satu garis tebal. Satu warna aksen amber untuk angka jumlah mahasiswa.
- Font Hanken Grotesk dengan angka tabular, agar digit NIM, No. HP, dan jam sejajar.
- Responsif: di layar kecil, tabel bisa digeser ke samping tanpa merusak layout halaman.
- Kontras warna memenuhi WCAG AA, fokus keyboard terlihat jelas, dan animasi menghormati pengaturan reduced-motion.

## Menjalankan Proyek

Membutuhkan Node.js 20.19+ atau 22.12+ (syarat Vite 8).

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Perintah lain:

- `npm run build`: build untuk produksi ke folder `dist`
- `npm run preview`: menjalankan hasil build
- `npm run lint`: memeriksa kode dengan oxlint

## Struktur File

```
src/
├── App.jsx     # data mahasiswa (useState), tabel (.map), tombol tema
├── Clock.jsx   # jam digital (useState + useEffect + setInterval/clearInterval)
├── App.css     # gaya komponen halaman
├── index.css   # token warna tema gelap/terang dan gaya dasar
└── main.jsx    # entry point React
```

## Teknologi

React 19, Vite, Vanilla CSS.

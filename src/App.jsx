import { useEffect, useState } from 'react'
import Clock from './Clock.jsx'
import './App.css'

const initialStudents = [
  { nim: '2301001', nama: 'Andi Saputra', hp: '081234567801', email: 'andi@mail.com', alamat: 'Surabaya', prodi: 'Informatika', tahun: 2023 },
  { nim: '2301002', nama: 'Budi Santoso', hp: '081234567802', email: 'budi@mail.com', alamat: 'Malang', prodi: 'Sistem Informasi', tahun: 2023 },
  { nim: '2301003', nama: 'Citra Amelia', hp: '081234567803', email: 'citra@mail.com', alamat: 'Lumajang', prodi: 'Informatika', tahun: 2023 },
  { nim: '2401001', nama: 'Dinda Putri', hp: '081234567804', email: 'dinda@mail.com', alamat: 'Jember', prodi: 'Manajemen', tahun: 2024 },
  { nim: '2401002', nama: 'Eko Pratama', hp: '081234567805', email: 'eko@mail.com', alamat: 'Kediri', prodi: 'Informatika', tahun: 2024 },
]

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export default function App() {
  const [students] = useState(initialStudents)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage diblokir (mis. private window): tema tetap berlaku untuk sesi ini.
    }
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <div className="page">
      <div className="utility">
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Ganti ke tema ${nextTheme === 'dark' ? 'gelap' : 'terang'}`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          <span>{nextTheme === 'dark' ? 'Tema gelap' : 'Tema terang'}</span>
        </button>
      </div>

      <div className="top">
        <header>
          <h1 className="title">Student<br />Management</h1>
          <p className="subtitle">Daftar Data Mahasiswa</p>
        </header>
        <div className="figure">
          <span className="figure-label">Jumlah mahasiswa</span>
          <span className="figure-value accent">{students.length}</span>
        </div>
        <Clock />
      </div>

      <main>
        <section>
          <div className="table-scroll" role="region" aria-label="Tabel data mahasiswa" tabIndex={0}>
            <table>
              <caption className="sr-only">Daftar data mahasiswa</caption>
              <thead>
                <tr>
                  <th scope="col">NIM</th>
                  <th scope="col">Nama Mahasiswa</th>
                  <th scope="col">No. HP</th>
                  <th scope="col">Email</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Program Studi</th>
                  <th scope="col">Tahun Masuk</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="empty">Belum ada data mahasiswa.</td>
                  </tr>
                ) : (
                  students.map((s) => (
                    <tr key={s.nim}>
                      <td>{s.nim}</td>
                      <td className="name">{s.nama}</td>
                      <td>{s.hp}</td>
                      <td><a href={`mailto:${s.email}`}>{s.email}</a></td>
                      <td>{s.alamat}</td>
                      <td>{s.prodi}</td>
                      <td>{s.tahun}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

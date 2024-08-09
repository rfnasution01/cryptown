import { Link } from 'react-router-dom'

export function BackToHome() {
  return (
    <Link
      to="/"
      className="flex items-center gap-12 rounded-2xl bg-white px-24 py-12 text-primary-950 hover:bg-opacity-80"
    >
      <p>Kembali ke Menu Utama</p>
    </Link>
  )
}

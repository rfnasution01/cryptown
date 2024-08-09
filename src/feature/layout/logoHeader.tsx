import { Link } from 'react-router-dom'

export function LogoHeader() {
  return (
    <Link
      to="/"
      className="flex items-center justify-center gap-16 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <img
        src="/favicon/logo.png"
        alt="Logo Cryptown"
        className="h-[7rem] w-[7rem] rounded-full transition-transform duration-300 ease-in-out"
        loading="lazy"
      />
      <div className="flex flex-col gap-8">
        <p className="text-cryptown-white font-nunito text-[2.8rem] font-bold transition-colors duration-300 ease-in-out">
          Crypt<span className="text-cryptown-golder-yellow">Own</span>
        </p>
        <p className="text-cryptown-light-gray font-sans text-[1.8rem] uppercase transition-colors duration-300 ease-in-out">
          Empower Your Crypto
        </p>
      </div>
    </Link>
  )
}

import { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const meta = {
  deskripsi:
    'Stay ahead in the crypto market with real-time updates on Bitcoin, Ethereum, Monero, and Litecoin prices. Analyze trends and make informed decisions with CrypTown.',
  website: 'https://cryptown.vercel.app/',
  nama_aplikasi: 'CrypTown',
  logo: '/favicon/logo.png',
}

export function Seo({
  children,
  title,
  date,
}: {
  children: ReactNode
  title?: string
  date?: string
}) {
  return (
    <HelmetProvider>
      <div className="scrollbar h-screen overflow-y-auto bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 text-[2rem] phones:text-[2.4rem]">
        {children}
      </div>
      <Helmet>
        <title>{title ? `${title} | CrypTown` : 'CrypTown'}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.deskripsi} name="description" />
        <meta property="og:url" content={meta.website} />
        <link rel="canonical" href={meta.website} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CrypTown" />
        <meta property="og:description" content={meta.deskripsi} />
        <meta property="og:title" content={title ?? meta.nama_aplikasi} />
        <meta name="image" property="og:image" content={meta.logo} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ?? meta.nama_aplikasi} />
        <meta name="twitter:description" content={meta.deskripsi} />
        <meta name="twitter:image" content={meta.logo} />
        {date && (
          <>
            <meta property="article:published_time" content={date} />
            <meta
              name="publish_date"
              property="og:publish_date"
              content={date}
            />
          </>
        )}

        {/* Favicon */}
        <link rel="icon" href={meta.logo} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
    </HelmetProvider>
  )
}

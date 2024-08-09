import Image404 from '@/assets/images/404.png'
import { BackToHome } from '@/components/backToHome'
import { Typography } from '@/components/typography'

export default function ComingSoonPage() {
  return (
    <div className="scrollbar flex min-h-screen items-center justify-center overflow-y-auto bg-primary-500 font-sf-pro text-[2rem] text-white phones:text-[2.4rem]">
      <div className="flex w-5/6 items-center gap-64 rounded-2x p-32 phones:w-full phones:flex-col-reverse">
        <div className="flex w-3/5 flex-col gap-64 phones:w-full">
          <Typography
            title="Maaf, halaman yang Anda cari tidak ditemukan"
            size="xl"
            className="text-white phones:text-center"
          />
          <Typography
            title="Silakan periksa kembali URL yang anda inputkan atau kembali ke menu
            utama."
            size="md"
            className="text-white phones:text-center"
          />
          <div className="flex phones:justify-center">
            <BackToHome />
          </div>
        </div>
        <div className="flex w-2/5 items-center justify-center phones:w-2/3">
          <img src={Image404} alt="404" className="w-full" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center bg-custom-radial justify-between p-24 ${inter.className}`}
    >
    </div>
  )
}

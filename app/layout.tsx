import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToastProvider from './providers/ToastProvider'
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'
import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

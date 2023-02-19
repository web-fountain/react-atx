import "./styles/base.css"
import "./styles/fonts.css"
import "./styles/resets.css"
import "./styles/themes.css"
import { Poppins } from "@next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

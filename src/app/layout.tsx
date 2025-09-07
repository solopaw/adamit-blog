import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"
interface RootLayoutProps {
  children: React.ReactNode
}
export const metadata:Metadata = {
  title: "Adam It Page",
  description: "The personal website of Adam It",

}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    
      <html lang="en" suppressHydrationWarning>
        <head />
        
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar></Navbar>
            {children}
          </ThemeProvider>
        </body>
      </html>
    
  )
}
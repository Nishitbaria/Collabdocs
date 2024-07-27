import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { Toaster } from 'react-hot-toast';
import { cn } from "@/lib/utils"
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes"
import Provider from "./Provider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: 'Collabdocs - Collaborative Editor',
  description: 'Your go-to collaborative editor for documents and notes sharing with your team members and friends in real-time with live updates',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371FF",
          fontSize: '16px'
        },
      }}
    >
      <html lang="en">
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
            <Toaster />
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

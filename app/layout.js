import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Adeel Tahir | Full Stack Developer",
  description: "Adeel Tahir  a Full Stack Developer specializing in Next.js React, Node.js, PostgreSQL, and MongoDB. With a passion for building scalable and efficient web applications, Adeel brings expertise in both front-end and back-end development, creating seamless user experiences and robust server-side solutions.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <link rel="icon" type="image/png" href="/favicon.png" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

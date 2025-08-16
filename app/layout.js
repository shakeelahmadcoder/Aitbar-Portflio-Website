import { Lato } from 'next/font/google'

import "./globals.css";

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'],})

export const metadata = {
  title: "Graphic Designer Portfolio Website",
  description: "Created by Shakeel Ahmed  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}

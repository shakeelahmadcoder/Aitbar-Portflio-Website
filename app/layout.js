import { Lato } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Graphic Designer Portfolio Website",
  description: "Created by Shakeel Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-white ${lato.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

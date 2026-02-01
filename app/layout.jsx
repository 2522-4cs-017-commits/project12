import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Usman Ahmed Qureshi - Portfolio",
  description: "E-Commerce & Digital Marketing Specialist Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-slate-900 text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}

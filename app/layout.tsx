import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Snowfall from "@/components/Snowfall";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-[url('/christmas-bg.jpg')] bg-cover min-h-screen`}
      >
        <div className="relative z-20">{children}</div>
        <Snowfall />
      </body>
    </html>
  );
}
